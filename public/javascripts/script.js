$(document).ready(function(){
	$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      
      if ($(window).scrollTop() > 1) {
      	sectionLeft();
      }
      if ($(window).scrollTop() < 1) {
      	sectionEntered();
      }
  });
	var events = [
	{
		'name': 'Code in Pajamas',
		'image': '',
		'description': '',
	},
	{
		'name': 'Code Czarinas',
		'image': '',
		'description': '',
	},
	{
		'name': 'CodeBuzz',
		'image': '',
		'description': '',
	},
	{
		'name': 'WTM Hub',
		'image': '',
		'description': '',
	},
	{
		'name': 'Meetups & Workshops',
		'image': '',
		'description': '',
	}
	];


	var team = [
	{
		'name': 'Mehul Smriti Raje',
		'title': 'Founder',
		'fb': '',
		'image': 'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/11188184_1626957987551018_4280750234830041851_n.jpg?oh=da3c0d443169e7a3e5d758d1a4cbc46f&oe=59D6009A'
	},
	{
		'name': 'Muskan Gupta',
		'title': 'Manager',
		'fb': '',
		'image': 'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/14591861_1869678003255978_699234978143974107_n.jpg?oh=7e967434a965a271fde4c57aa41110dc&oe=599F129F'
	},
	{
		'name': 'Shubheksha Jalan',
		'title': 'Manager',
		'fb': '',
		'image': 'https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/14192107_10154438239944780_456008402719041222_n.jpg?oh=00a0ba4088dccd10514c9751dea8c54c&oe=59E89111',
	}
	];

	function sectionLeft() {
		$("nav").css('background','#FFF');
		$("nav").find('li').css('color','#272727');
		$("nav").fadeIn();
	}

	function sectionEntered() {
		$("nav").hide();

		
	}


	sectionEntered();

	$('#fullpage').fullpage({
		verticalCentered: false,
		autoScrolling: false

	});

	$.each(events,function(k,v){
		console.log(v);
		$(".events").append('<div class="event">\
			<div class="event-image"></div>\
			<div class="event-desc">\
			<div class="event-name">\
			<h1>' + v.name + '</h1>\
			</div>\
			<div class="event-description">\
			Lorem ipsum dolor sit amet, consectetur adipisicing elit\
			</div>\
			</div>\
			</div>\
			')

	});

	$.each(team,function(k,v){
		$("#s3 .text").append('<div class="team">\
			<div class="team-member">\
			<div style="background:url(' + v.image + ');background-size: cover;background-position: center center;" class="team-image"></div>\
			</div>\
			<div class="team-desc">\
			<h1 class="team-name">' + v.name + '</h1>\
			<h3 class="team-title">' + v.title + '</h3>\
			<i class="fa fa-facebook"></i>\
			</div>\
			</div>');
	})


	


	$(document).on('click', 'a', function(event){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
	});
});