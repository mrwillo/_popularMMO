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
module.exports  = {
	parseListItem: parseListItem
}
