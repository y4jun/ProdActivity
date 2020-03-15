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
	if(item == "puppy"){
		data.puppyBought = true;
	}
	if(item == "palmtree"){
		data.palmtreeBought = true;
	}
	if(item == "flower"){
		data.flowerBought = true;
	}
	
	res.render('redeem', data)
}