var assignments = require('../assignments.json');

exports.assignmentInfo = function(request, response) { 
	var assignmentID = request.params.id;
	if (assignmentID == "random") {
		assignmentID = Math.floor(Math.random() * assignments.length) + 1;
	} else {
		assignmentID = parseInt(assignmentID);
	}

  	var assignment = assignments[assignmentID-1]; // of by one, our first assignment has index 0
  	response.json(assignment);
}