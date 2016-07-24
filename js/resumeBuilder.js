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
			"job" : "Product Designer",
			"years" : "2015 - Current",
			"description" : "I design, code and create stuff :)"
		},
		{
			"employer" : "Peixe Urbano",
			"job" : "Product Designer",
			"years" : "2012 - 2015",
			"description" : "I worked closely with the marketing team representing the views of the Product Manager."			
		},
		{
			"employer" : "Funarte",
			"job" : "Wordpress Developer",
			"years" : "2011 - 2012",
			"description" : "I was part of a contracted team that made all of Funarte's archives available online."			
		}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Sample Project 1",
		"date" : "xxxx-xxxx",
		"description" : "lorem ipsum",
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