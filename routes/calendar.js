var data = require('../assignments.json');

exports.viewCalendar = function(req, res){

	res.render('calendar', data);
}