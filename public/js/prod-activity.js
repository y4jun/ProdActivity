'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('#datepicker').each(function(){
		$(this).datepicker();
	});
})


/*
 * Function that is called when the document is ready.
 */

function initializePage() {	

	$('.current-assignments a').click(moreInfo);
	$('.recent-assignments a').click(moreInfoRecent);
	$('.hideInfo #complete').click(removeAssignment);
	$('.hideInfo #remove').click(removeAssignment);
	$('.mainbody #MemeBtn').click(memegenerate);
	$('.column #thuglifeBtn').click(overlay1);
	$('.column #frameBtn').click(overlay2);
	$('.column #goldchainBtn').click(overlay3);

	$('#hmbgr').click(clickHamburger);
	$('.sideNav_Home').click(clickHome);
	$('.sideNav_Profile').click(clickProfile);
	$('.sideNav_Redeem').click(clickRedeem);
	$('.view-recent').click(clickRecent);
	$('.header #add').click(clickAdd);
	$('.assignment #AssignBtn').click(clickAssginment);
	$('.topView .done').click(clickDone);

}

function toggleSwitch(){
	
	if($('#calendar').css("display") == 'none'){
		$('.assignment').hide();
		$('#calendar').fadeIn();	
	}
	else{
		$('#calendar').hide();
		$('.assignment').fadeIn();
	}
}

function toggleTodo(){
	$('.recent-assignments').hide();
	$('.current-assignments').fadeIn();
	$('.topView hr').css("margin-left", "15%");

}

function toggleDone(){
	$('.current-assignments').hide();
	$('.recent-assignments').fadeIn();
	$('.topView hr').css("margin-left", "60%");
}


function clickDone(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'clickDone', 'click');
	location.replace("/recent");
}

function clickAssginment(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'clickForDescription', 'click');
}

function clickAdd(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'addBtn', 'click');
}

function clickRecent(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'viewRecent', 'click');
}

function clickHamburger(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'hmgrMenu', 'click');
}
function clickHome(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'sideNav_Home', 'click');
	location.replace("/index");
}
function clickProfile(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'sideNav_Profile', 'click');
	location.replace("/profile");
}
function clickRedeem(e) {
	e.preventDefault();
	ga('create', 'UA-159672138-1', 'auto');
	ga('send', 'event', 'sideNav_Redeem', 'click');
	location.replace("/redeem");
}

function overlay1(){
	var cost = parseInt($(this).text());
	var currPoints = parseInt($('#displayPoints h4').text());
	console.log("huh")
	console.log(cost);
	console.log(currPoints);

	if(currPoints >= cost){
		
		$("#thuglife-item h5").remove();
		$("#thuglifeBtn").remove();
		var position = $(".proPic").offset();
		$('#curr-points').text(currPoints-cost + "pts");
		$.post("/removePoints/" + cost);
		$("#thuglife").css({opacity:'0.2'});
		$.post("/savechanges/thuglife");
		location.replace("/redeem");
	}
	else{
		var html = ("<p>NOT ENOUGH POINTS</p>").fontcolor("red");
		$(this).closest('.column').append(html);
		var target = $('.column p');
		target.animate({
    	opacity: "-=1"
  		}, 800, function() {
    	target.remove();
    	console.log("YEah");
  		});
	}
}

function overlay2(){
	var cost = parseInt($(this).text());
	var currPoints = parseInt($('#displayPoints h4').text());

	if(currPoints >= cost){

		$("#frame-item h5").remove();
		$("#frameBtn").remove();
		var position = $(".proPic").offset();
		$('#curr-points').text(currPoints-cost + "pts");
		$.post("/removePoints/" + cost);
		$("#frame2").css({opacity:'1'});
		$.post("/savechanges/frame");
		location.replace("/redeem");
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
	var currPoints = parseInt($('#displayPoints h4').text());

	if(currPoints >= cost){

		$("#goldenchain-item h5").remove();
		$("#goldchainBtn").remove();
		var position = $(".proPic").offset();
		$('#curr-points').text(currPoints-cost + "pts");
		$.post("/removePoints/" + cost);
		$("#goldchain2").css({opacity:'1'});
		$.post("/savechanges/goldchain");
		location.replace("/redeem");
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

	var currPoints = parseInt($('#displayPoints h4').text());
	var cost = 5;

	if(currPoints >= cost){

	$.post("/removePoints/" + cost);
	$('#curr-points').text(currPoints-cost + "pts");
	var memeimg = document.getElementById('memeimg');
	memeimg.src = "https://loremflickr.com/640/360";
	$(".memebutton #MemeBtn").hide();
	}
	else{
		var html = ("<p>NOT ENOUGH POINTS</p>").fontcolor("red");
		$(this).closest('.memebutton').append(html);
		var target = $('.memebutton p');
		target.animate({
    	opacity: "-=1"
  		}, 800, function() {
    	target.remove();
  		});
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

function moreInfoRecent(e){
	e.preventDefault();
	var assignmentID = $(this).closest('.assignment').attr('id');
	console.log(assignmentID)
	$('.recent-assignments ' + '#' + assignmentID + ' .hideInfo').fadeToggle();

}



function removeAssignment(){

	var completeOrRemove = $(this).attr('id');
	var numPoints = parseInt($(this).attr('title'));
	var currPoints = parseInt($('#display-points h3').text());
	var assignmentID = $(this).closest('.assignment').attr('id');
	var target = $('#' + assignmentID);

	//$('#' + assignmentID + ' .removeAssignment').hide();
	
	/*
	target.animate({
    	opacity: "-=1"
  	}, 300, function() {
    target.remove();
  	});
  	*/

	if(completeOrRemove == "complete"){
		target.addClass("slide-out-bck-tr")
		setTimeout(
		() => { location.replace("/index"); }, 300);
		$.post("/removed/" + assignmentID + "/complete");
		$.post("/addPoints/" + numPoints);
	}
	else{
		target.addClass("slide-out-right")
		setTimeout(
		() => { location.replace("/index"); }, 500);
		$.post("/removed/" + assignmentID + "/remove");
	}

	/*
	setTimeout(
		() => {

			$.get('/json', function(data){
				if(data.viewAlt){
					location.replace("/page_B");
				}
				else{
					location.replace("/index")
				}
			});
		},
	350
	);
	*/

}