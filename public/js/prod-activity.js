'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.assignment a').click(addAssignmentDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addAssignmentDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var assignmentID = $(this).closest('.assignment').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	//var idNumber = assignmentID.substr('assignment'.length);

	console.log("User clicked on assignment " + assignmentID);
	$.get('/assignment/' + assignmentID, callBackFn);
	
}

function callBackFn(result){
	console.log("hello");
	/*
	var projectHTML = 
	'<p>' + result['title'] + '</p>' +
	'<p>' + result['date'] + '</p>' +
    '<img src="' + result['image'] + '" class="detailsImage">' + result['summary']
	;
*/
	$('#project' + result.id + ' .details').html(projectHTML);
}