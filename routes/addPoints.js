var data = require("../assignments.json");

exports.addPoints = function(req, res) {    
	
	var pointsToAdd = parseInt(req.params.id);
	data.totalPoints += pointsToAdd;
	data.currPoints += pointsToAdd;
	console.log(data.currPoints);
	
	if(data.totalPoints <= 50){
		data.beltImg = "white.png";
		data.beltType = "White";
	}
	else if(data.totalPoints > 50 && data.totalPoints <= 110){
		data.beltImg = "yellow.png";
		data.beltType = "Yellow";
	}
	else if(data.totalPoints > 110 && data.totalPoints <= 180){
		data.beltImg = "orange.png";
		data.beltType = "Orange";
	}
	else if(data.totalPoints > 180 && data.totalPoints <= 260){
		data.beltImg = "green.png";
		data.beltType = "Green";
	}
	else if(data.totalPoints > 260 && data.totalPoints <= 350){
		data.beltImg = "blue.png";
		data.beltType = "Blue";
	}
	else if(data.totalPoints > 350 && data.totalPoints <= 450){
		data.beltImg = "purple.png";
		data.beltType = "Purple";
	}
	else if(data.totalPoints > 450 && data.totalPoints <= 650){
		data.beltImg = "brown.png";
		data.beltType = "Brown";
	}
	else if(data.totalPoints > 650 && data.totalPoints <= 950){
		data.beltImg = "red.png";
		data.beltType = "Red";
	}
	else{
		data.beltImg = "black.png";
		data.beltType = "Black";
	}
	res.render('index', data)
}