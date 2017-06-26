var isValidHeader = function(req) {
	if (req.headers['accesstoken'] && req.headers['accesstoken'] === 'bananhduy') {
		return true;
	}
	console.log("invalid token access");
	return false;
}

var isValidHeaderForMeOnly = function(req) {
	if (req.headers['accesstoken'] && req.headers['accesstoken'] === 'duydeptraionly') {
		return true;
	}
	console.log("invalid token access");
	return false;
}
module.exports = {
	isValidHeader : isValidHeader,
	isValidMeOnly: isValidHeaderForMeOnly
}