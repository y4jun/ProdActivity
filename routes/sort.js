var data = require("../assignments.json");

exports.sortByDate = function(req, res) {    

	//sort by closest to current date
	data.assignments.sort(function(a, b){
		return Math.abs(Date.now() - new Date(a.date)) - Math.abs(Date.now() - new Date(b.date));
	});

	//make sure ids are in order
	for (var i = 0; i < data.assignments.length; i++){
		data.assignments[i].id = i + 1;
	}
	res.render('index', data)
}