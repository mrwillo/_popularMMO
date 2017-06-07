var isValidHeader = function(req) {
	if (req.headers['accesstoken'] && req.headers['accesstoken'] === 'bananhduy') {
		return true;
	}
	console.log("invalid token access");
	return false;
}
module.exports = {
	isValidHeader : isValidHeader
}