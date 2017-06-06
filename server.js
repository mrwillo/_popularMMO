require('http').globalAgent.maxSockets = Infinity
var express = require('express');
var app = express();
var mongoUtil = require('./mongoUtil');
var configuration = require('./configuration')

app.use(express.bodyParser());

var portListening = 8080;
app.get("/api/home", function(req, res){
	if (req.query.appID === '_popularMMO') {
		var bannerUrl='https://yt3.ggpht.com/tYGki5tVXShlciDDg9cAsMn6HkrfHQujnUrm6G0ZophW56Pg9A3wdsWq4N8tl1-pPfNNfFMdHg=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no'
		var homeObj = {
			banner: bannerUrl,
			"videoList" : [
			{
				name:"Lucky Block Hunger Games",
				numberOfVideo: 67,
				listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=v5Dd0u_pHDkobZt1ohtKNxOaQy0",
				listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
			}
			]
		}
	}
	
	res.send(homeObj);
});

app.listen(portListening, function () {
	mongoUtil.connectToServer(function (err) {
		var db = mongoUtil.getDb();
		
		db.collection('SuggestionSong').find();
	})
	console.log('Server is listening on port: ' + portListening);
})

