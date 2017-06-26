/**
 * Created by willo on 6/14/17.
 */
var mongoUtil = require("../commons/mongoUtil");
var schedule = require("node-schedule");

var getListChannelToUpdate = function (channelName) {
	var db = mongoUtil.getDb();
	db.collection('playlist').find({channelID: channelName}).sort({views: -1}).toArray(function (err, items) {
		console.log(items.length);
		if (items.length === 0) {
			console.log("empty channel, will need to craw new data");
		} else {
			console.log("There is some data, progress to check and update if require");
		}
	});
}

var executeJob = function () {
	console.log("Jobs start");
	var time = '59 23 * * *';
	time = '*/1 * * * *'
	mongoUtil.connectToServer(function (err) {
		var j = schedule.scheduleJob(time, function () {
			console.log(new Date() + ": job started every 10s");
			getListChannelToUpdate('popularMMO');
		});
	});
}

module.exports = {
	executeJob: executeJob
}
