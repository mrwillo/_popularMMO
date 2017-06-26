require('http').globalAgent.maxSockets = Infinity
var express = require('express');
var app = express();
var mongoUtil = require('./commons/mongoUtil');
var popularMMOAPI = require('./api/popularMMOAPI')
var cheerio = require('cheerio');
var request = require('request');
var htmlParser = require('./commons/tubeHtmlParser');
var fs = require('fs');
var jobs = require("./jobs/playlistUpdateJob")

app.use(express.bodyParser());

var portListening = 8081;
app.get("/popularMMO/api/home", popularMMOAPI.homeAPI)
app.get("/popularMMO/api/playlist/videos", popularMMOAPI.videosOfPlaylistAPI)
app.put("/popularMMO/api/like", popularMMOAPI.likeAPI)
app.put("/popularMMO/api/dislike", popularMMOAPI.dislikeAPI)
app.get("/popularMMO/api/listWebsite", popularMMOAPI.getWebsiteListAPI)
var cachedData
app.get("/input/manual/getChannelPlaylist", function (req, res) {
	cachedData = fs.readFileSync("/Users/willo/workspace/_popularMMO/test_data/playlist_test.html").toString();
	var $ = cheerio.load(cachedData);
	var result = htmlParser.parseListItem($.root());
	res.send(result);
});
app.get("/parseVideoMeta", function (req, res) {
	//url: https://www.youtube.com/watch?v=K5I_6CpBNKI
	cachedData = fs.readFileSync("/Users/willo/workspace/_popularMMO/test_data/video_detail_meta.html").toString();
	var $ = cheerio.load(cachedData);
	var videoObj = htmlParser.parseVideoDetail($.root());
	res.send(videoObj);
});
app.get("/parseVideoDes", function (req, res) {
	//url: https://www.youtube.com/watch?v=K5I_6CpBNKI
	cachedData = fs.readFileSync("/Users/willo/workspace/_popularMMO/test_data/video_detail_des.html").toString();
	var $ = cheerio.load(cachedData);
	var videoObj = htmlParser.parseVideoDetail($('#action-panel-details'));
	res.send(videoObj)
});
app.get("/parseListDetail", function (req, res) {
	cachedData = fs.readFileSync("/Users/willo/workspace/_popularMMO/test_data/playlistDetails.html").toString();
	var $ = cheerio.load(cachedData);
	var playlistInfo = htmlParser.parseListInfo($("div[id=pl-header]"));
	var videos = [];
	var playlistID = 'testPlaylistID';
	$("#pl-load-more-destination").children().each(function (index, el) {
		var video = htmlParser.parseVideoOfPlaylist($(this), playlistID);
		videos.push(video);
	});
	res.send({info: playlistInfo, videos: videos});
})
app.get("/parsingData", function (req, res) {
	request("https://www.youtube.com/user/PopularMMOs/playlists", function (err, response, html) {
		var $ = cheerio.load(html);
		var arr = [];
		$('#channels-browse-content-grid').children().each(function (index, el) {
			var listItem = htmlParser.parseListItem($(this), "popularMMO");
			arr.push(listItem);
		});
		res.send(arr);
	})
})


app.get("/onlyMe/testData", function (req, res) {
	var db = mongoUtil.getDb();
	var objInsert = {
		videoId: "uVQZzQRRS1w",
		videoBanner: "https://i.ytimg.com/vi/uVQZzQRRS1w/sddefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=jC5xOYuXZ6-BY5NPOvje04NltN4",
		playTime: "4:21",
		videoTitle: "Trucks for children. Learn wild animals in English! Cartoons for babies 1 year",
		views: 116414852,
		description: "Wooden shape sorter truck brings wild animals! Let <b>learn</b> their names in English!",
		like: 100,
		appLike: 10,
		dislike: 10,
		appDislike: 20,
		playlistID: "PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
	}
	db.collection("videos").insertOne(objInsert, {w: 1}, function (err, resInsert) {
		console.log(resInsert);
	})
	res.send("inserted")
})
app.listen(portListening, function () {
	mongoUtil.connectToServer(function (err) {
		var db = mongoUtil.getDb();
		if (err) {
			console.log("Error connect to mongoUtil");
		}
		// jobs.executeJob();
	})
	console.log('Server is listening on port: ' + portListening);
})

