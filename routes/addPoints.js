var data = require("../assignments.json");

exports.addPoints = function(req, res) {    
	
	var pointsToAdd = parseInt(req.params.id);
	data.totalStars += pointsToAdd;
	data.currStars += pointsToAdd;
	
	if(data.totalStars <= 20){
		data.beltImg = "white.png";
		data.beltType = "White";
	}
	else if(data.totalStars > 20 && data.totalStars <= 50){
		data.beltImg = "yellow.png";
		data.beltType = "Yellow";
	}
	else if(data.totalStars > 50 && data.totalStars <= 90){
		data.beltImg = "orange.png";
		data.beltType = "Orange";
	}
	else if(data.totalStars > 90 && data.totalStars <= 130){
		data.beltImg = "green.png";
		data.beltType = "Green";
	}
	else if(data.totalStars > 130 && data.totalStars <= 190){
		data.beltImg = "blue.png";
		data.beltType = "Blue";
	}
	else if(data.totalStars > 190 && data.totalStars <= 250){
		data.beltImg = "purple.png";
		data.beltType = "Purple";
	}
	else if(data.totalStars > 250 && data.totalStars <= 320){
		data.beltImg = "brown.png";
		data.beltType = "Brown";
	}
	else if(data.totalStars > 320 && data.totalStars <= 420){
		data.beltImg = "red.png";
		data.beltType = "Red";
	}
	else{
		data.beltImg = "black.png";
		data.beltType = "Black";
	}
	res.render('index', data)
}