var mongoUtil = require("./mongoUtil");

var insertOne = function(collectionName, objFindConditions, objToInsert) {
	var db = mongoUtil.getDb();
	db.collection(collectionName).findOne(
		objFindConditions,//condition
		function (err, item) {
			if (!item) {
				//insert new
				db.collection(collectionName).insertOne(objToInsert, {w: 1}, function (err, resInsert) {
					console.log("insert successfully");
				})
			} else {
				console.log("in update case");
				//update
				// db.collection("videos").update({videoId: videoObj.videoId}, {$set: {appLike: item.appLike+1}}, {w: 1}, function (err, result) {
				// 	console.log('updated, from origin:' + item.appLike + "increased 1: " + result);
				// });
			}
		})
}

var updateOne = function(collectionName, objFindConditions, objUpdate) {
	var db = mongoUtil.getDb();
	db.collection(collectionName).findOne(
		objFindConditions,//condition
		function (err, item) {
			if (!item) {
				//insert new
				console.log("video id is not found");
				return {error: "video not found to update meta info"};
			} else {
				console.log("in update case");
				db.collection(collectionName).update(objFindConditions, {$set: objUpdate}, {w: 1}, function (err, result) {
					return {success: "updated meta info"};
				});
			}
		})
	
}

var insertOnePlaylist = function(playlistObj, channelID) {
	var objFindConditions = {
		playlistID: playlistObj.playlistID,
		channelID: channelID
	};
	playlistObj.channelID = channelID;
	
	insertOne("playlist", objFindConditions, playlistObj);
}
var insertOneVideo = function(videoObj) {
	var objFindConditions = {
		videoId: videoObj.videoId,
		playlistID: videoObj.playlistID
	}
	insertOne("videos", objFindConditions, videoObj);
}
var updateVideoMetaInfo = function(videoMetaInfo, videoId) {
	var objFindConditions = {
		videoId: videoId
	}
	return updateOne("videos", objFindConditions, videoMetaInfo);
}
module.exports = {
	insertOnePlaylist: insertOnePlaylist,
	insertOneVideo: insertOneVideo,
	updateVideoMetaInfo: updateVideoMetaInfo
}