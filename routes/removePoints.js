var data = require("../assignments.json");

exports.removePoints = function(req, res) {    
	
	var pointsToSubtract = parseInt(req.params.id);
	data.currPoints -= pointsToSubtract;
	console.log(data.currPoints);
	
	res.render('redeem', data)
}