require('http').globalAgent.maxSockets = Infinity
var express = require('express');
var app = express();
var mongoUtil = require('./commons/mongoUtil');
var popularMMOAPI = require('./api/popularMMOAPI')

app.use(express.bodyParser());

var portListening = 8080;
app.get("/popularMMO/api/home", popularMMOAPI.homeAPI)
app.get("/popularMMO/api/playlist/videos", popularMMOAPI.videosOfPlaylistAPI)
app.put("/popularMMO/api/like", popularMMOAPI.likeAPI)
app.put("/popularMMO/api/dislike", popularMMOAPI.dislikeAPI)

app.listen(portListening, function () {
	mongoUtil.connectToServer(function (err) {
		var db = mongoUtil.getDb();
		db.collection("popularMMO");
	})
	console.log('Server is listening on port: ' + portListening);
})

