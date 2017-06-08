require('http').globalAgent.maxSockets = Infinity
var express = require('express');
var app = express();
var mongoUtil = require('./commons/mongoUtil');
var popularMMOAPI = require('./api/popularMMOAPI')

app.use(express.bodyParser());

var portListening = 8081;
app.get("/popularMMO/api/home", popularMMOAPI.homeAPI)
app.get("/popularMMO/api/playlist/videos", popularMMOAPI.videosOfPlaylistAPI)
app.put("/popularMMO/api/like", popularMMOAPI.likeAPI)
app.put("/popularMMO/api/dislike", popularMMOAPI.dislikeAPI)
app.get("/popularMMO/api/listWebsite", popularMMOAPI.getWebsiteListAPI)
app.get("/onlyMe/testData", function(req, res){
	var db = mongoUtil.getDb();
	var objInsert = {
		videoId: "uVQZzQRRS1w",
		videoBanner: "https://i.ytimg.com/vi/uVQZzQRRS1w/sddefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=jC5xOYuXZ6-BY5NPOvje04NltN4",
		playTime: "4:21",
		videoTitle: "Trucks for children. Learn wild animals in English! Cartoons for babies 1 year",
		views: 116414852,
		description: "Wooden shape sorter truck brings wild animals! Let <b>learn</b> their names in English!",
		like:100,
		appLike:10,
		dislike:10,
		appDislike:20,
		playlistID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
	}
	db.collection("videos").insertOne(objInsert,{w:1},function(err, resInsert){
		console.log(resInsert);
	})
	res.send("inserted")
})

app.listen(portListening, function () {
	mongoUtil.connectToServer(function (err) {
		var db = mongoUtil.getDb();
		db.collection("popularMMO");
		console.log(err);
	})
	console.log('Server is listening on port: ' + portListening);
})

