var data = require("../assignments.json");

exports.removePoints = function(req, res) {    
	
	var pointsToSubtract = parseInt(req.params.id);
	data.currStars -= pointsToSubtract;
	
	res.render('redeem', data)
}