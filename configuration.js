/**
 * Created by willo on 3/18/17.
 */
var activeAds = false
var appNames = {
	tubeKID: "tubeKID",
	karaoke: "karaoke",
	englishKID: "englishKID",
	cookTips: "cookTips"
}
var defaultFilters = {
	"tubeKID": " cartoon for kid",
	"karaoke": " karaoke beat",
	"cookTips": " cook tips",
	"englishKID": " english for children"
}
var host = "https://www.youtube.com";
var contentFilterForLang = {
	"en": " cartoon for kid",
	"vi": " phim hoat hinh"
}
var karaokeFilterForLang = {
	"vi": " karaoke beat"
}
var englishFilterForLang = {
	"en": " english for children",
	"vi": " tieng anh cho tre em"
}
var cookTipsFilterForLang = {
	"en": " cook tips",
	"vi": " cook tips"
}

var GamingTV4KIDConfigs = {
	trOiOiquAncAonHa: activeAds,
	AToken: Date.now(),
	channelLogo: "http://yt3.ggpht.com/2tDwwVVEuy0ja92htLiC-JZdfqUB1ogR--jjSph3Ybk068mSQkoOhG9YdvYvgDrWyjCIvi9JOubtFIyi=s100-nd-c-c0xffffffff-rj-k-no",
	channelBanner: "http://yt3.ggpht.com/Fi_QFrKP41XqTdHvd0nLYFY9dxg1ejOgOayHvCihUTfBBz0zdS8FtlMtzkN_Wk0V9jAyvgwwd8riw68E=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no"
}
var channelKeys = {
	gaming: "https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg/videos",
	kids: "https://www.youtube.com/user/thekydstv/videos"
}
module.exports = {
	tubeKID: {
		contentFilters: contentFilterForLang
	},
	karaoke: {
		contentFilters: karaokeFilterForLang
	},
	englishKID: {
		contentFilters: englishFilterForLang
	},
	cookTips: {
		contentFilters: cookTipsFilterForLang
	},
	GamingTV4KID: GamingTV4KIDConfigs,
	host: host,
	activeAds: activeAds,
	defaultFilters: defaultFilters,
	appNames: appNames,
	channelKeys: channelKeys
}
