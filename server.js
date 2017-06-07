require('http').globalAgent.maxSockets = Infinity
var express = require('express');
var app = express();
var mongoUtil = require('./mongoUtil');
var popularMMOAPI = require('./api/popularMMOAPI')

app.use(express.bodyParser());

var portListening = 8080;
app.get("/popularMMO/api/home", popularMMOAPI.homeAPI);

app.listen(portListening, function () {
	mongoUtil.connectToServer(function (err) {
		var db = mongoUtil.getDb();
		
		db.collection('popularMMO').find();
	})
	console.log('Server is listening on port: ' + portListening);
})

