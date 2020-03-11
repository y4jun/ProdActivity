var data = require("../assignments.json");

exports.addAssignment = function(req, res){
	var alistLen = data.assignments.length;
	var color =  "#71da71";
	var priority = req.query.priority;

	if(priority == "low"){
		color = "#71da71";
	}
	if(priority == "med"){
		color = "#ffdb4d";
	}
	if(priority == "high"){
		color = "#ff3333";
	}
	

	var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
	var date = new Date(req.query.duedate);
	var day = date.getDate();
	var month = monthNames[date.getMonth()];
	var year = date.getFullYear();
	date = day + " " + month.substring(0,3) + " " + year;

	var newAssignment = {"id" : alistLen + 1,
						"course": req.query.course,
 						"title": req.query.title,
 						"date": date,
 						"description": req.query.description,
 						"color": color,
 						"priority" : priority,
 						"points": req.query.points
 					    };
 
 	data.assignments.push(newAssignment)
 	data['noAssignments'] = false;
	res.redirect('/index');
}