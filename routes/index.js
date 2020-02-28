
/*
 * GET home page.
 */
var data = require('../assignments.json');

exports.view = function(req, res){
	data['viewAlt'] = false;
 	res.render('index', data);
};

exports.viewAlt = function(req, res){
	data['viewAlt'] = true;
	res.render('index', data);
};