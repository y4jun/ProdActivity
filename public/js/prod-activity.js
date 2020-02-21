'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('#datepicker').each(function(){
		$(this).datepicker();
	})
})

/*
 * Function that is called when the document is ready.
 */
var profilePoints = 0;
var pointsEarned = 0;
var pts = 0;
function initializePage() {	
	$('.assignment a').click(moreInfo);
	$('.hideInfo #complete').click(completeAssignment);
	$('.hideInfo #cancel').click(removeAssignment);
	$('.mainbody #MemeBtn').click(memegenerate);
	// $('.column #thuglifeBtn').click(overlay1);
	$('.column #frameBtn').click(overlay2);
	// $('.column #goldchainBtn').click(overlay3);

}

function overlay1(){
	var position = $(".proPic").offset();
	$("#thuglife").css({position:'absolute', top:position.top, left: position.left});
}

function overlay2(){
	var position = $(".proPic").offset();
	$("#frame").css({position:'absolute', top:position.top, left: position.left});
}

// function overlay3(){
// 	var position = $(".proPic").offset();
// 	$("#goldchain").css({position:'absolute', top:position.top, left: position.left});
// }
function memegenerate(){
	var memeimg = document.getElementById('memeimg');
	memeimg.src = "https://loremflickr.com/640/360";
	$(".memebutton #MemeBtn").hide();
	// document.getElementById("MemeBtn").innerHTML = "Try again";
	// initializePage();
}



function moreInfo(e){
	e.preventDefault();
	var assignmentID = $(this).closest('.assignment').attr('id');
	console.log(assignmentID)
	$('#' + assignmentID + ' .hideInfo').fadeToggle();

}



function removeAssignment(){
	console.log("clicked");
	var assignmentID = $(this).closest('.assignment').attr('id');
	var target = $('#' + assignmentID);
	$('#' + assignmentID + ' .removeAssignment').hide();
	target.animate({
    	opacity: "-=1"
  	}, 300, function() {
    target.remove();
  	});
}


function completeAssignment(pts){
		console.log("clicked");
  	var assignmentID = $(this).closest('.assignment').attr('id');
  	var target = $('#' + assignmentID);
	$('#' + assignmentID + ' .removeAssignment').hide();
	target.animate({
    	opacity: "-=1"
  	}, 300, function() {
    target.remove();
  	});
  		console.log(pts+"___");
	pointsEarned += parseInt(JSON.stringify(pts));
	console.log(pointsEarned);
  	$('#ptss').text(pointsEarned);

	// profilePoints = profilePoints + points;
	// //removeAssignment();
	// document.getElementById('displayPoints').innerHTML = "<h4>Points Earned: " + profilePoints + "pts</h4>";
}