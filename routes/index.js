
/*
 * GET home page.
 */
var data = require('../assignments.json');

exports.view = function(req, res){
	data['viewAlt'] = false;

	data.assignments.sort(function(a, b){
		return Math.abs(Date.now() - new Date(a.date)) - Math.abs(Date.now() - new Date(b.date));
	});

	data.assignments.reverse();
	//make sure ids are in order
	for (var i = 0; i < data.assignments.length; i++){
		data.assignments[i].id = i + 1;
	}

	if(data.assignments.length == 0){
		data['noAssignments'] = true;
	}
	else{
		data['noAssignments'] = false;
	}

 	res.render('index', data);
};

exports.viewAlt = function(req, res){
	data['viewAlt'] = true;

	//sort by date closest to current date
	data.assignments.sort(function(a, b){
		return Math.abs(Date.now() - new Date(a.date)) - Math.abs(Date.now() - new Date(b.date));
	});

	//make sure ids are in order
	for (var i = 0; i < data.assignments.length; i++){
		data.assignments[i].id = i + 1;
	}

	if(data.assignments.length == 0){
		data['noAssignments'] = true;
	}
	else{
		data['noAssignments'] = false;
	}
	
	res.render('index', data);
};