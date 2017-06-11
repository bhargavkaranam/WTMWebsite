function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {

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


    $('.parallax-window-1').parallax({imageSrc: '/images/back.jpeg', speed: .3});
    $('.parallax-window-2').parallax({imageSrc: '/images/QuoteBg.jpg', speed: .3});
    $('.parallax-window-3').parallax({imageSrc: '/images/QuoteBg1.jpg', speed: .3});



    var events = [
        {
            'name': 'Code in Pajamas',
            'image': '/images/CodeInPajamasLogo.png',
            'description': 'Bi-weekly meet-ups held at the girls’ hostel after college hours.Initiated by our seniors to help us face the campus interviews.',
        },
        {
            'name': 'Code Czarinas',
            'image': '/images/CodeCzarinaLogo.png',
            'description': 'Weekly meet-ups held at the girl’s hostel. Comprises workshops, internship talks and speaker sessions',
        },
        {
            'name': 'CodeBuzz',
            'image': '/images/CodeBuzzLogo.png',
            'description': 'A crash competitive-coding session  held over 10 days, every summer. Girls are mentored over Slack and this is followed by a mini-contest.',
        },
        {
            'name': 'WTM Hub',
            'image': '/images/WTMHubLogo.png',
            'description': 'An interactive session followed by a mini App Contest based on Mad Ads.',
        },
        {
            'name': 'Meetups & Workshops',
            'image': '/images/photos/File18.jpeg',
            'description': 'Workshops are held to introduce the newbies to dev. They cover a range of topics under Front-end web dev, Android Dev and Version Control.',
        }
    ];


    var team = [
        {
            'name': 'Mehul Smriti Raje',
            'title': 'Founder',
            'fb': 'https://www.facebook.com/mehul.s.raje',
            'image': 'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/11188184_1626957987551018_4280750234830041851_n.jpg?oh=da3c0d443169e7a3e5d758d1a4cbc46f&oe=59D6009A'
        },
        {
            'name': 'Muskan Gupta',
            'title': 'Manager',
            'fb': 'https://www.facebook.com/guskanmupta',
            'image': 'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/14591861_1869678003255978_699234978143974107_n.jpg?oh=7e967434a965a271fde4c57aa41110dc&oe=599F129F'
        },
        {
            'name': 'Shubheksha Jalan',
            'title': 'Manager',
            'fb': 'https://www.facebook.com/shubheksha.jalan',
            'image': 'https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/14192107_10154438239944780_456008402719041222_n.jpg?oh=00a0ba4088dccd10514c9751dea8c54c&oe=59E89111',
        }
    ];

    function sectionLeft() {
        $("nav").css('background', '#FFF');
        $("nav").find('li').css('color', '#272727');
        $("nav").fadeIn();
    }

    function sectionEntered() {
        $("nav").hide();
    }


    sectionEntered();

    $('#fullpage').fullpage({
        verticalCentered: false,
        lockAnchors: false,
        autoScrolling: false,
        fitToSection: false
    });

    $.each(events, function (k, v) {

        $(".events").append('<div class="event">\
			<div style="background:url(' + v.image + ') #EEE;background-size: 100% auto;background-repeat:no-repeat;background-position:center center;" class="event-image"></div>\
			<div class="event-desc">\
			<div class="event-name">\
			<h1>' + v.name + '</h1>\
			</div>\
			<div class="event-description">\
			' + v.description + '\
			</div>\
			</div>\
			</div>\
			')

    });

    $.each(team, function (k, v) {
        $("#s3 .team-container").append('<div class="team">\
			<div class="team-member">\
			<div style="background:url(' + v.image + ');background-size: cover;background-position: center center;" class="team-image"></div>\
			</div>\
			<div class="team-desc">\
			<h1 class="team-name">' + v.name + '</h1>\
			<h3 class="team-title">' + v.title + '</h3>\
			<a target="_blank" href="' + v.fb + '"><i class="fa fa-facebook"></i></a>\
			</div>\
			</div>');
    });




    $(document).on('click', '.navItem', function (event) {
        event.preventDefault();
        try {
            document.getElementById("mySidenav").style.width = "0";
        } catch (err) {

        }

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(document).on("click", ".wtmDefault", function (ev) {
        ev.preventDefault();
        $.ajax({
            url: '/contact',
            type: 'post',
            data: 'name=' + $("#name").val() + '&email=' + $("#email").val() + '&message=' + $("#message").val(),
            dataType: 'json',
            success: function (data) {
                data.status ? $(".message").html("We got your message. We'll get back to you shortly. Thank you.") : $(".message").html("Error");
            }
        });
    });

    $(document).on("click", ".fa-bars", function () {

        document.getElementById("mySidenav").style.width = "250px";

    })


});