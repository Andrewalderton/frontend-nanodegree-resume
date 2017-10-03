
var bio = {
	name: 'Andrew Alderton',
	role: 'Front-End Web Developer',
	contacts: {
		//mobile: '',
		email: 'andrewalderton@sky.com',
		github: 'Andrewalderton',
		twitter: '@Andy_Alderton',
		location: 'Bristol, UK'
	},
	welcomeMessage: 'Hard-working and motivated front-end developer. Easily adaptable and reliable, willing to go the extra mile to achieve desired results and hit personal targets. An extremely passionate individual with a commitment to creating high-quality websites and web applications, always seeking new creative and personal challenges and responsibilities.',
	skills: [
		' HTML5', ' CSS3', ' JavaScript', ' jQuery', ' Python', ' PostgreSQL', ' WordPress', ' git', ' Photoshop', ' Premiere Pro', ' After Effects'
	],
	biopic: 'images/andy.jpg',
	display: function() {
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$('#header').prepend(formattedRole);
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		$('#header').prepend(formattedName);

		// var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		// $('#topContacts').append(formattedMobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		$('#topContacts').append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		$('#topContacts').append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		$('#topContacts').append(formattedGithub);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$('#topContacts').append(formattedLocation);

		$('#footerContacts').append(formattedEmail + formattedTwitter + formattedGithub + formattedLocation);

		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		$('#header').append(formattedBioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills);
			$('#header').append(HTMLskillsStart, formattedSkills);
		}
	}
};

bio.display();

var education = {
	schools: [
		{
			name: 'Bournemouth University',
			location: 'Bournemouth',
			degree: 'Masters',
			majors: ['Directing Digital Film and Television'],
			dates: '2011 - 2013',
			url: 'http://www1.bournemouth.ac.uk'
		},
		{
			name: 'University of the West of England',
			location: 'Bristol',
			degree: 'Undergraduate',
			majors: ['Film Studies'],
			dates: '2007 - 2010',
			url: 'http://uwe.ac.uk'
		}
	],
	onlineCourses: [
		{
			title: 'Full Stack Nanodegree',
			school: 'Udacity',
			date: '2017',
			url: 'http://udacity.com/nanodegree'
		},
		{
			title: 'Front-End Nanodegree',
			school: 'Udacity',
			date: '2016',
			url: 'http://udacity.com/nanodegree'
		},
		{
			title: 'Web Design, Front-End Development, WordPress Development',
			school: 'Treehouse',
			date: '2015-2016',
			url: 'http://teamtreehouse.com/andrewalderton'
		}
	],
	display: function() {
		education.schools.forEach(function(school) {
			$('#education').append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace('%data%', school.name).replace('%datum%', school.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
			var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
			$('.education-entry:last').append(formattedSchoolTitle);

			var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
			$('.education-entry:last').append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
			$('.education-entry:last').append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.majors);
			$('.education-entry:last').append(formattedSchoolMajor);
		});

		$('#education').append(HTMLonlineClasses);

		education.onlineCourses.forEach(function(onlineCourse) {
			$('#education').append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title).replace('%datum%', onlineCourse.url);
			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
			var schoolTitle = formattedOnlineTitle + formattedOnlineSchool;
			$('.education-entry:last').append(schoolTitle);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.date);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace('%datum%', onlineCourse.url);
			$(".education-entry:last").append(formattedOnlineURL);
		});
	}
};

education.display();

var work = {
	jobs: [
		{
			employer: 'Lidl',
			title: 'Store Assistant/Duty Manager',
			location: 'Weston-Super-Mare/Clevedon',
			dates: '2012 - 2014',
			description: 'Performing a number of store duties such as serving customers at the tills, assisting with enquiries, cleaning duties and restocking, adapting quickly to strict schedules and procedures. Prioritising tasks and responsibilities under pressure, maintaining store displays, and ensuring that the store meets hygiene and freshness standards and regulations.'
		},
		{
			employer: 'Farmfoods',
			title: 'Store Assistant',
			location: 'Worle',
			dates: '2011',
			description: 'Performing regular store duties including working on the tills, advising customers, restocking to strict time schedules and maintaining excellent store presentation and hygiene standards.'
		}
	],
	display: function() {
		work.jobs.forEach(function(job) {
			$('#workExperience').append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$('.work-entry:last').append(formattedEmployerTitle);

			var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
			$('.work-entry:last').append(formattedWorkDates);
			var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
			$('.work-entry:last').append(formattedWorkLocation);
			var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
			$('.work-entry:last').append(formattedWorkDescription);
		});

		$('#mapDiv').append(googleMap);
		$('#workExperience').append(googleMap);
	}
};

work.display();

var projects = {
	projects: [
		{
			title: 'Item Catalog',
			dates: '2017',
			description: 'Item catalog web app created using Flask. The application provides a list of items within a variety of categories and integrates third-party user registration and authentication.',
			images: [ 'images/smartphone-640.jpg'
			],
			alt: 'smartphone',
			url: 'https://github.com/Andrewalderton/fullstack-nanodegree-item-catalog'
		},
		{
			title: 'Linux Server Configuration',
			dates: '2017',
			description: 'Prepared Linux server to host web applications, securing from a number of attack vectors. PostgreSQL database was configured, with an existing project deployed on the server.',
			images: [ 'images/linux-640.jpg'
			],
			alt: 'typing on laptop',
			url: 'https://github.com/Andrewalderton/fullstack-nanodegree-item-catalog'
		},
		{
			title: 'Portfolio',
			dates: '2016',
			description: 'A responsive website displaying images, descriptions and links to my most recent completed work. API requests implemented to display Treehouse and Codewars data.',
			images: [ 'images/office_640.jpg'
			],
			alt: 'office desk',
			url: 'http://andrewalderton.github.io/nanodegree-portfolio'
		},
		{
			title: 'Arcade Game',
			dates: '2016',
			description: 'Recreated the classic arcade game, Frogger, for the Udacity Front-End Nanodegree. Added a number of entities to the game, including player characters and enemies.',
			images: [ 'images/arcade-640.jpg'
			],
			alt: 'joystick',
			url: 'http://andrewalderton.github.io/frontend-nanodegree-arcade-game'
		},
		{
			title: 'Website Optimisation',
			dates: '2016',
			description: 'Optimised a provided website, which contained a number of performance-related issues, achieving a target PageSpeed score and running at 60 frames per second.',
			images: [ 'images/technology_640.jpg'
			],
			alt: 'laptop keyboard',
			url: 'http://andrewalderton.github.io/frontend-nanodegree-mobile-portfolio'
		},
		{
			title: 'Neighbourhood Map',
			dates: '2016',
			description: 'Single-page app featuring a map of my local area. Includes: map markers to identify popular locations, search function with auto-complete, and list-view for simple browsing of locations.',
			images: [ 'images/ipad_640.jpg'
			],
			alt: 'iPad displaying a map',
			url: 'http://andrewalderton.github.io/frontend-nanodegree-neighbourhood-map'
		},
		{
			title: 'Feed Reader Testing',
			dates: '2016',
			description: 'Project using Jasmine to test the functionality of an app that reads RSS feeds. Tests check the underlying business logic of the app, event handling and DOM manipulation.',
			images: [ 'images/man-coding-640.jpg'
			],
			alt: 'man coding',
			url: 'http://andrewalderton.github.io/frontend-nanodegree-feedreader'
		},
		{
			title: 'House Promo Video',
			dates: '2016',
			description: 'Directed and edited three-minute promotional video for estate agents, C. J. Hole, helping them to reach a wider range of potential clients through video marketing.',
			images: [ 'images/house-promo.jpg'
			],
			alt: 'House video screenshot',
			url: 'https://vimeo.com/154409349'
		},
		{
			title: 'Dissertation Project',
			dates: '2012',
			description: 'Directed and edited two music videos as part of Masters dissertation, working closely with unsigned bands and developing the project from conception to completion.',
			images: [ 'images/music.jpg'
			],
			alt: 'Band group photo',
			url: 'https://vimeo.com/79493866'
		},
		{
			title: 'Short Film Project',
			dates: '2011',
			description: 'Directed three-minute short film, Anticipating Pleasure, collaborating with a screenwriter in developing a script and working closely with professional actors.',
			images: [ 'images/roshan.jpg'
			],
			alt: 'short film screenshot',
			url: 'https://vimeo.com/82585931'
		}
	],
	display: function() {

		projects.projects.forEach(function(project) {
			$('#projects').append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title).replace('%datum%', project.url);
			$('.project-entry:last').append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
			$('.project-entry:last').append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
			$('.project-entry:last').append(formattedProjectDescription);

			if (project.images.length > 0) {
			project.images.forEach(function(image) {
				var formattedProjectImage = HTMLprojectImage.replace('%data%', image).replace('%datum%', project.alt).replace('%datums%', project.url);
			$('.project-entry:last').append(formattedProjectImage);
				});
			}
		});
	}
};

projects.display();

$(document).ready(function() {
	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
		loading: false,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'body',
		transition: function(url){ window.location.href = url; }
	});
});
