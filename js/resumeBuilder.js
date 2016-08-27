var bio = {
	"name" : "Carol Durandet",
	"role" : "Front-end Developer",
	"contacts" : {
		"email" : "caroldurandet@gmail.com",
		"mobile" : "+55 21 982032500",
		"github" : "caroldurandet",
		"location" : "Rio de Janeiro"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Hi, I'm Carol.",
	"skills" : [
		"html",
		"css",
		"product",
		"design"
	],
};

var education = {
	"schools" : [
	{
		"place" : "UFRJ",
		"years" : "2005-2008",
		"major" : "Fine Arts"
	},
	{
		"place" : "Infnet",
		"years" : "2014-2015",
		"major" : "Digital Design"
	}
	],
	"onlineCourses" : [
	{
		"place" : "Udacity",
		"years" : "2015-2017",
		"major" : "Front-end Developer"
	}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Estante Virtual",
			"title" : "Product Designer",
			"dates" : "2015 - Current",
			"description" : "I design, code and create stuff :)"
		},
		{
			"employer" : "Peixe Urbano",
			"title" : "Product Designer",
			"dates" : "2012 - 2015",
			"description" : "I worked closely with the marketing team representing the views of the Product Manager."			
		},
		{
			"employer" : "Funarte",
			"title" : "Wordpress Developer",
			"dates" : "2011 - 2012",
			"description" : "I was part of a contracted team that made all of Funarte's archives available online."			
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Estante Virtual Redesign",
			"date" : "2016",
			"description" : "blablabla",
			"images" : [
				"url",
				"url"
			]
		}
	]
};

$("#header").prepend(bio.role);
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
};