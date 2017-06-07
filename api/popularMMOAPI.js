var commonService = require('../commons/commonService');

var homeAPI = function(req, res) {
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
module.exports = {
	homeAPI: homeAPI
}