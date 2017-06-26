require('http').globalAgent.maxSockets = Infinity
var express = require('express');
var app = express();
var mongoUtil = require('./commons/mongoUtil');
var popularMMOAPI = require('./api/popularMMOAPI')
var conf = require("./commons/configuration");
var cheerio = require('cheerio');
var request = require('request');
var htmlParser = require('./commons/tubeHtmlParser');
var dataProcessor = require("./commons/tubeDataProcessor");
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
app.get("/input/manual/getPlaylistInfo", function (req, res) {//don't need
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
	// cachedData = fs.readFileSync("/Users/willo/workspace/_popularMMO/test_data/playlistDetails.html").toString();
	// var $ = cheerio.load(cachedData);
	var viewOnePlaylistUri = "https://www.youtube.com/playlist?list=PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq";
	var headers ={
		"accept-language":"en-US,en;q=0.8"
	}
	request({uri: viewOnePlaylistUri, headers: headers}, function(err, response, html){
		$ = cheerio.load(html);
		var playlistInfo = htmlParser.parseListInfo($("div[id=pl-header]"));
		var videos = [];
		var playlistID = 'PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq';
		$("#pl-load-more-destination").children().each(function (index, el) {
			var video = htmlParser.parseVideoOfPlaylist($(this), playlistID);
			dataProcessor.insertOneVideo(video);
			videos.push(video);
		});
		
		res.send({info: playlistInfo, videos: videos});
	});
})
app.get("/input/manual/getChannelPlaylist", function (req, res) {
	var uri = "https://www.youtube.com/user/PopularMMOs/playlists";
	var headers ={
		"accept-language":"en-US,en;q=0.8"
	}
	request({uri:uri,headers:headers}, function (err, response, html) {
		var $ = cheerio.load(html);
		var arr = [];
		$('#channels-browse-content-grid').children().each(function (index, el) {
			var listItem = htmlParser.parseListItem($(this), "popularMMO");
			//each channel, need to parse details to build channel object and insert db
			//1 parse detail
			var viewOnePlaylistUri = "https://www.youtube.com/playlist?list=PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq";
			request({uri:viewOnePlaylistUri, headers:headers}, function(err1, response1, html1) {
				var $1 = cheerio.load(html1);
				
				var playlistInfo = htmlParser.parseListInfo($1("div[id=pl-header]"));
				listItem.numberOfViews = playlistInfo.numberOfViews;
				listItem.lastUpdatedDate = playlistInfo.lastUpdatedDate;
				dataProcessor.insertOnePlaylist(listItem, conf.channels.popularMMO);
				
				var playlistID = listItem.playlistID;
				$("#pl-load-more-destination").children().each(function (index, el) {
					var video = htmlParser.parseVideoOfPlaylist($1(this), playlistID);
					dataProcessor.insertOneVideo(video);
				});
			});
		});
		res.send("check db pls");
	})
});

app.get("/popularMMO/api/requestUpdateVideoInfo", function(req, res){
	var videoId = req.query.videoId;
	var uriDetail = "https://www.youtube.com/watch?v="+videoId;
	var headers ={
		"accept-language":"en-US,en;q=0.8"
	}
	request({uri: uriDetail, headers: headers}, function(err, response, html){
		var $ = cheerio.load(html);
		var videoMeta = htmlParser.parseVideoDetail($("div[id=watch7-content]"));
		res.send(dataProcessor.updateVideoMetaInfo(videoMeta, videoId));
	});
});


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

