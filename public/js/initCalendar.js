var events = [];

var title = '';
var course = '';
var date = ''
var day = 0;
var month = 0;
var year = 0;
var dataObj = {};
var link = '/index';

$.get('/json', function(data){

	for(i=0; i<data.assignments.length; i++){
		title = data.assignments[i].title;
		course = data.assignments[i].course;
		date = Date.parse(data.assignments[i].date);
		date = new Date(date);
		day = date.getDate();
		month = date.getMonth();
		year = date.getFullYear();
		dataObj = {'Date': new Date(year, month, day), 'Title': title + ' - ' + course, 'Link': link};
		events.push(dataObj);
	}
});

var settings = {
	Color: '',
	LinkColor: '',
	NavShow: true,
	NavVertical: false,
	NavLocation: '',
	DateTimeShow: true,
	DateTimeFormat: 'mmm, yyyy',
	DatetimeLocation: '',
	EventClick: '',
	EventTargetWholeDay: false,
	DisabledDays: [],
	ModelChange: ''

};
var element = document.getElementById('calendar');
calendar(element, events, settings);