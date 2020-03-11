var data = require("../assignments.json");

exports.removedAssignment = function(req, res) {    
	var assignmentID = req.params.id;
	var completeOrRemove = req.params.corr;

	if(completeOrRemove == "complete"){
		data.recent.unshift(data.assignments[assignmentID-1])
		data.noRecent = false;
	}

	data.assignments.splice(assignmentID-1,1);

	var listLen = data.assignments.length;	
	for (var i = 0; i < listLen; i++){
		data.assignments[i].id = i + 1;
	}

	listLen = data.recent.length;
	for (var i = 0; i < listLen; i++){
		data.recent[i].id = i + 1;
	}
	
	res.render('index', data)
}