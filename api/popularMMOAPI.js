var commonService = require('../commons/commonService');
var mongoUtil = require('../commons/mongoUtil');

var home = function(req, res) {
	if ( !commonService.isValidHeader(req) ) {
		res.send({"error":"hey, you don't have access to this api. sorry!"});
		return;
	}
		var bannerUrl='https://yt3.ggpht.com/tYGki5tVXShlciDDg9cAsMn6HkrfHQujnUrm6G0ZophW56Pg9A3wdsWq4N8tl1-pPfNNfFMdHg=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no'
		var homeObj = {
			banner: bannerUrl,
			"videoList" : [
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				},
				{
					name:"Lucky Block Hunger Games",
					numberOfVideo: 67,
					listBanner:"https://i.ytimg.com/vi/yi2ZIEm4Hog/hqdefault.jpg",
					listID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
				}
			]
		}
	
	res.send(homeObj);
}
var videosOfPlaylist = function(req, res) {
	if ( !commonService.isValidHeader(req) ) {
		res.send({"error":"hey, you don't have access to this api. sorry!"});
		return;
	}
	if (req.query.playlistID === undefined || req.query.playlistID === "") {
		res.send({error: "missed parameter"});
		return;
	}
	
	var videos = [
		{
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
	},
	{
		videoId: "sJSGEQgAYWg",
		videoBanner: "https://i.ytimg.com/vi/sJSGEQgAYWg/sddefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=T_Oboe65stE3Arxsn2l-OQugWnI",
		playTime: "9:45",
		videoTitle: "Learn Colors and Race Cars with Max, Bill and Pete the Truck - TOYS (Colors and Toys for Toddlers)",
		views: 116414852,
		description: "<b>Learn</b> Colors For Toddlers! Join the amazing adventure with Max the Glow Train, Blazin Bill the Monster Truck, Pete the Truck ...",
		like:100,
		appLike:10,
		dislike:10,
		appDislike:20,
		playlistID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
	},
	{
		videoId: "tkpfg-1FJLU",
		videoBanner: "https://i.ytimg.com/vi/tkpfg-1FJLU/sddefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Zklew2bunHCPrYawxn2b2HxDQGI",
		playTime: "3:00",
		videoTitle: "Let Learn The Colors! - Cartoon Animation Color Songs for Children by ChuChuTV",
		views: 116414852,
		description: "COLORS SONG - Let<b>Learn</b> The Colors! - <b>Cartoon</b> Animation Color Songs for Children by ChuChuTV Here comes a New, ...",
		like:100,
		appLike:10,
		dislike:10,
		appDislike:20,
		playlistID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
	},
	{
		videoId: "BXDAFo_dCMs",
		videoBanner: "https://i.ytimg.com/vi/BXDAFo_dCMs/sddefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=u1GZWywGp565phuoppGKlcUxZSc",
		playTime: "48:19",
		videoTitle: "All of the Colors | Coloring for Kids | Learn the Colors | Color Crew | BabyFirst TV",
		views: 116414852,
		description: "BabyFirst TV brings you a Color Crew compilation, where all the colors from the Color Crew join your kids in some coloring for ...",
		like:100,
		appLike:10,
		dislike:10,
		appDislike:20,
		playlistID:"PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
	}]
	res.send({data: videos});
}
var likeVideo = function(req, res) {
	processLikeVideo(req, res, false);
	
}
var dislikeVideo = function(req, res) {
	processLikeVideo(req, res, true);
}
var processLikeVideo = function (req, res, isDislike) {
	if ( !commonService.isValidHeader(req) ) {
		res.send({"error":"hey, you don't have access to this api. sorry!"});
		return;
	}
	console.log(req.body);
	var videoObj = req.body;
	if (videoObj.videoId === undefined || videoObj === null || videoObj === "") {
		res.send({error:"video id is missing"});
		return;
	}
	var db = mongoUtil.getDb();
	db.collection("videos").findOne(
		{ videoId: videoObj.videoId,
			playlistID: videoObj.playlistID },//condition
		function (err, item) {
		console.log(item);
		if (!item) {
			res.send({error:"Video id not video not found to like/dislike"});
			return;
		}
		if (isDislike) {
			db.collection("videos").update({videoId: videoObj.videoId}, {$set: {appDislike: item.appDislike+1}}, {w: 1}, function (err, result) {
				console.log('updated, from origin:' + item.appDislike + "decrease 1: " + result);
			});
			res.send({"success":"dislike video successfully"});
			return;
		} else {
			db.collection("videos").update({videoId: videoObj.videoId}, {$set: {appLike: item.appLike+1}}, {w: 1}, function (err, result) {
				console.log('updated, from origin:' + item.appLike + "increased 1: " + result);
			});
			res.send({"success":"like video successfully"});
		}
		
	});
}
var getWebsiteList = function(req, res) {
	if ( !commonService.isValidHeader(req) ) {
		res.send({"error":"hey, you don't have access to this api. sorry!"});
		return;
	}
	var arrWebsite = [
		'http://cartoonforkid.org/'
	]
	res.send({data:arrWebsite});
}
module.exports = {
	homeAPI: home,
	likeAPI: likeVideo,
	dislikeAPI: dislikeVideo,
	videosOfPlaylistAPI: videosOfPlaylist,
	getWebsiteListAPI: getWebsiteList
}