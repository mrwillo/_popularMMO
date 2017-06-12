/**
 * Created by willo on 6/10/17.
 */
const fs = require('fs');

var parseListItem = function(listItemObj) {
	var listItem = {};
	try {
		listItem.playlistID = listItemObj.find("a").attr('href').split("list=")[1];
		listItem.bannerUrl = listItemObj.find("a").find('span').filter('.yt-thumb-clip').find('img').attr('src').split("?custom")[0];
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
	playlistInfo.numberOfViews = liDetails.eq(2).html().split(" views")[0];
	playlistInfo.lastUpdatedDate = liDetails.eq(3).html();
	return playlistInfo;
}
var parseVideoOfPlaylist = function(trObj) {
	var videoObj = {};
	var videoTitle = trObj.find(".pl-video-title").find("a");
	videoObj.videoTitle = videoTitle.text();
	videoObj.videoId = videoTitle.attr("href").split("?v=")[1].substring(0,11);
	videoObj.playTime = trObj.find(".pl-video-time").find('.more-menu-wrapper').find(".timestamp").find('span').text();
	videoObj.videoBanner = trObj.find(".pl-video-thumbnail").find('span').find("a").find("span").filter(".yt-thumb-clip").find("img").attr('src').split("?")[0];
	
	return videoObj;
}
module.exports  = {
	parseListItem: parseListItem,
	parseListInfo: parseListInfo,
	parseVideoOfPlaylist: parseVideoOfPlaylist
}
