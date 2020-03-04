var data = require("../assignments.json");

exports.savechanges = function(req, res) {    
	
	var item = req.params.id;

	if(item == "thuglife"){
		data.thuglifeBought = true;
	}
		if(item == "frame"){
		data.frameBought = true;
	}
		if(item == "goldchain"){
		data.goldchainBought = true;
	}
	
	res.render('index', data)
}