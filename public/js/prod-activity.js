'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
var profilePoints = 0;
function initializePage() {	
	$('.assignment a').click(moreInfo);
	$('.hideInfo #complete').click(removeAssignment);
	$('.hideInfo #cancel').click(removeAssignment);
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


function completeAssignment(points){

	profilePoints = profilePoints + points;
	//removeAssignment();
	document.getElementById('displayPoints').innerHTML = "<h4>Points Earned: " + profilePoints + "pts</h4>";
}