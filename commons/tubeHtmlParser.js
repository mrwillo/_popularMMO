/**
 * Created by willo on 6/10/17.
 */
const fs = require('fs');

var parseListItem = function(listItemObj) {
	var listItem = {};
	try {
		listItem.playlistID = listItemObj.find("a").attr('href').split("list=")[1];
		listItem.bannerUrl = listItemObj.find("a").find('span').filter('.yt-thumb-clip').find('img').attr('src')
			.split(".jpg")[0].replace("hqdefault", "maxresdefault.jpg");
		listItem.numberOfVideo = listItemObj.find("a").find('span').filter(".formatted-video-count-label").find("b").text();
		listItem.playlistTitle = listItemObj.find("div[class='yt-lockup-content']").find("h3").find('a').text();
	}catch (ex) {
		console.log(ex);
	}
	return listItem;
}
var parseListInfo = function(listDetailsObj) {
	var playlistInfo = {};
	var liDetails = listDetailsObj.find(".pl-header-content").find("ul[class='pl-header-details']").children();
	playlistInfo.numberOfViews = liDetails.eq(2).html().split(" views")[0].replace(/,/g,"");;
	playlistInfo.lastUpdatedDate = liDetails.eq(3).html();
	return playlistInfo;
}
var parseVideoOfPlaylist = function(trObj, playlistID) {
	// {
	// 	DONE, "videoId": "uVQZzQRRS1w",
	// 	DONE, "videoBanner": "https://i.ytimg.com/vi/uVQZzQRRS1w/sddefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=jC5xOYuXZ6-BY5NPOvje04NltN4",
	// 	DONE, "playTime": "4:21",
	// 	DONE, "videoTitle": "Trucks for children. Learn wild animals in English! Cartoons for babies 1 year",
	// 	"views": 116414852,
	// 	"description": "Wooden shape sorter truck brings wild animals! Let <b>learn</b> their names in English!",
	// 	"like": 100,
	// 	"appLike": 10,
	// 	"dislike": 10,
	// 	"appDislike": 20,
	// 	DONE, "playlistID": "PL6p1NYDZ87wIR3Gkbvf5NlvgUPJBNXarq"
	// }
	var videoObj = {};
	var videoTitle = trObj.find(".pl-video-title").find("a");
	videoObj.videoTitle = videoTitle.filter(".pl-video-title-link").text().trim();
	videoObj.videoId = videoTitle.attr("href").split("?v=")[1].substring(0,11);
	videoObj.playTime = trObj.find(".pl-video-time").find('.more-menu-wrapper').find(".timestamp").find('span').text();
	videoObj.videoBanner = trObj.find(".pl-video-thumbnail").find('span').find("a").find("span")
													.filter(".yt-thumb-clip").find("img").attr('data-thumb').split("?")[0].replace("hqdefault.jpg", "maxresdefault.jpg");
	videoObj.playlistID = playlistID;
	
	videoObj.views=0;
	videoObj.description="";
	videoObj.like=0;
	videoObj.appLike=0;
	videoObj.dislike=0;
	videoObj.appDislike=0;
	
	return videoObj;
}
var parseVideoDetail = function(cVideoObj) {
	var vObj = {};
	vObj.views = cVideoObj.find('#watch-header').find('.watch-view-count').text().split(" views")[0].replace(/,/g,"");
	vObj.like = cVideoObj.find('#watch8-sentiment-actions').find('.like-button-renderer').children().first().find('span')
		.filter('.yt-uix-button-content').text().split("Sign")[0].replace(/,/g,"");
	vObj.dislike = cVideoObj.find('#watch8-sentiment-actions').find('.like-button-renderer').children().eq(2).find('span')
		.filter('.yt-uix-button-content').text().split("Sign")[0].replace(/,/g,"");
	vObj.publishOn = cVideoObj.find('#watch-description').find('#watch-uploader-info').find('strong').text();
	vObj.description = cVideoObj.find('#watch-description').find('#watch-description-text').find('p').text();
	return vObj;
};
module.exports  = {
	parseListItem: parseListItem,
	parseListInfo: parseListInfo,
	parseVideoOfPlaylist: parseVideoOfPlaylist,
	parseVideoDetail: parseVideoDetail
}
