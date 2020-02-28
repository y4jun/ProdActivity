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
	$('.hideInfo #complete').click(removeAssignment);
	$('.hideInfo #remove').click(removeAssignment);
	$('.mainbody #MemeBtn').click(memegenerate);
	$('.column #thuglifeBtn').click(overlay1);
	$('.column #frameBtn').click(overlay2);
	$('.column #goldchainBtn').click(overlay3);

}

function overlay1(){
	var cost = parseInt($(this).text());
	var currPoints = parseInt($('#displayPoints h3').text());

	if(currPoints >= cost){
		
		$("#thuglife-item h5").remove();
		$("#thuglifeBtn").remove();
		var position = $(".proPic").offset();
		$('#curr-points').text(currPoints-cost + "pts");
		$.post("/removePoints/" + cost);
		$("#thuglife").css({position:'absolute', top:position.top, left: position.left});
	}
	else{
		var html = ("<p>NOT ENOUGH POINTS</p>").fontcolor("red");
		$(this).closest('.column').append(html);
		var target = $('.column p');
		target.animate({
    	opacity: "-=1"
  		}, 800, function() {
    	target.remove();
  		});
	}
}

function overlay2(){
	var cost = parseInt($(this).text());
	var currPoints = parseInt($('#displayPoints h3').text());

	if(currPoints >= cost){

		$("#frame-item h5").remove();
		$("#frameBtn").remove();
		var position = $(".proPic").offset();
		$('#curr-points').text(currPoints-cost + "pts");
		$.post("/removePoints/" + cost);
		$("#frame").css({position:'absolute', top:position.top, left: position.left});
	}
	else{
		var html = ("<p>NOT ENOUGH POINTS</p>").fontcolor("red");
		$(this).closest('.column').append(html);
		var target = $('.column p');
		target.animate({
    	opacity: "-=1"
  		}, 800, function() {
    	target.remove();
  		});
	}
}

function overlay3(){
	var cost = parseInt($(this).text());
	var currPoints = parseInt($('#displayPoints h3').text());

	if(currPoints >= cost){

		$("#goldenchain-item h5").remove();
		$("#goldchainBtn").remove();
		var position = $(".proPic").offset();
		$('#curr-points').text(currPoints-cost + "pts");
		$.post("/removePoints/" + cost);
		$("#goldchain").css({position:'absolute', top:position.top, left: position.left});
	}
	else{
		var html = ("<p>NOT ENOUGH POINTS</p>").fontcolor("red");
		$(this).closest('.column').append(html);
		var target = $('.column p');
		target.animate({
    	opacity: "-=1"
  		}, 800, function() {
    	target.remove();
  		});
	}
}
function memegenerate(){

	var currPoints = parseInt($('#displayPoints h3').text());
	var cost = 5;

	if(currPoints >= cost){

	$.post("/removePoints/" + cost);
	$('#curr-points').text(currPoints-cost + "pts");
	var memeimg = document.getElementById('memeimg');
	memeimg.src = "https://loremflickr.com/640/360";
	$(".memebutton #MemeBtn").hide();
	}
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

	var completeOrRemove = $(this).attr('id');
	var numPoints = parseInt($(this).attr('title'));
	var assignmentID = $(this).closest('.assignment').attr('id');
	var target = $('#' + assignmentID);

	$('#' + assignmentID + ' .removeAssignment').hide();
	target.animate({
    	opacity: "-=1"
  	}, 300, function() {
    target.remove();
  	});

	if(completeOrRemove == "complete"){
		$.post("/removed/" + assignmentID + "/complete");
		$.post("/addPoints/" + numPoints);
	}
	else{
		$.post("/removed/" + assignmentID + "/remove");
	}

	setTimeout(
		() => {
			location.replace("/index");
		},
		350
	);
	//location.reload();
}