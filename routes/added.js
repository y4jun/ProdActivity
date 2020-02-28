var data = require("../assignments.json");

exports.addAssignment = function(req, res){
	var alistLen = data.assignments.length;
	var color =  "#71da71";
	var priority = "none";

	if(data.viewAlt){
		priority = req.query.priority;

		if(priority == "low"){
			color = "#71da71";
		}
		if(priority == "med"){
			color = "#ffdb4d";
		}
		if(priority == "high"){
			color = "#ff3333";
		}
	}
	else{
		color = req.query.color;
	}

	var date = new Date(req.query.duedate);
	var day = date.getDate();
	var month = date.toLocaleString('default', { month: 'long' })
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
	res.render('index', data);
}