var data = require("../assignments.json");

exports.changeProfile = function(req, res) {    
	
	data.displayName = req.params.id;
	data.profilePic = req.params.pic;
	
	res.render('profile', data);
}