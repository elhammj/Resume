/* 
   File: resumeBuilder.js
   Copy right: Elham Jaffar
   Course: Udacity  - Front End Web Design
   Year: 2017
   Project Purpose: Practicing Java script and build an online Resume
*/


/*  -------------------- HEADER PART -----------------------
	Bio Section
	Consists of Name, Role, Contact Info, Picture, Welcome Message and Skills !
*/
//bio Object
var bio = {
	"name": "Elham Jaffar",
	"role": "Software Engineer",
	"contactInfo": { 
	  "phone": "+966542551805", 
	  "email": "elham.m.j@gmail.com",
	  "github": "https://github.com/elhammj", 
	  "website": "http://www.elhammj.com" ,
	  "location": "Dammam, Saudi Arabia"
	 },
	"picture": "images/personalPhoto.jpg;",
	"welcomeMsg": " Welcome To My Resume !",
	"skills": ["Attention to details","Fast workeing", "Leadership", "Programming Languages"]
};

//Header (Name and Role)
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Contact Info
var formattedContactPhone = HTMLcontactGeneric.replace("%contact%", "Mobile").replace("%data%", bio.contactInfo.phone);
var formattedContactEmail = HTMLcontactGeneric.replace("%contact%", "Email").replace("%data%", bio.contactInfo.email);
var formattedContactGit = HTMLcontactGeneric.replace("%contact%", "Github").replace("%data%", bio.contactInfo.github);
var formattedContactWebsite = HTMLcontactGeneric.replace("%contact%", "Website").replace("%data%", bio.contactInfo.website);
var formattedContactLocation = HTMLcontactGeneric.replace("%contact%", "Location").replace("%data%", bio.contactInfo.location);
$("#topContacts").append(formattedContactPhone);
$("#topContacts").append(formattedContactEmail);
$("#topContacts").append(formattedContactGit);
$("#topContacts").append(formattedContactWebsite);
$("#topContacts").append(formattedContactLocation);

//Personal Image
var formattedPic = HTMLbioPic.replace("%data%", "images/personalPhoto.jpg");
$("#header").append(formattedPic);

//Welcome Msg
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedMsg);

//Skills
var formattedSkillOne = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkillTwo = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkillThree = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkillFour = HTMLskills.replace("%data%", bio.skills[3]);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkillOne);
$("#header").append(formattedSkillTwo);
$("#header").append(formattedSkillThree);
$("#header").append(formattedSkillFour);

// -------------------- END HEADER PART -----------------------

/*  -------------------- WORK PART -----------------------
	Work Experince Section (2 Work Experinces)
	Consists of Job Position, Employer, Years worked at and the city of the business !
*/
var work = {
	"SJU": {
		"position": "Gradute Teaching Asisstant",
		"employer": "Saint Joseph's University",
		"dates": "Jan 2016 - Dec 2016",
		"city": "Philadelphia",
		"descreption": " Attended classes for the course(s) assigned, assisted in closed Lab, graded assignments and understood and studied course materials. Tutored, supervised open and close labs and reported on students progress. "
	},
	"ARAMCO": {
		"position": "Software Develop",
		"employer": "Saudi Aramco",
		"dates": "Jun 2015 - Jul 2015",
		"city": "Dhahran",
		"descreption": "Developed a complete web application (GPS Navigation Map Online Request) and Windows application (GPS Navigation Map Tracking System) for Geospatial Information Technology Unit in Geomatics Service Division. Collaborated with coworkers to learn procedures and divided work evenly."
	}
};

//Latest Experince SJU
var formattedWorkEmployerOne = HTMLworkEmployer.replace("%data%",work.SJU.employer);
var formatedWorkTitleOne = HTMLworkTitle.replace("%data%", work.SJU.position);
var formatedDateOne = HTMLworkDates.replace("%data%", work.SJU.dates);
var formatedCityOne = HTMLworkLocation.replace("%data%", work.SJU.city);
var formatedDecOne = HTMLworkDescription.replace("%data%", work.SJU.descreption);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployerOne);
$("#workExperience").append(formatedWorkTitleOne);
$("#workExperience").append(formatedDateOne);
$("#workExperience").append(formatedCityOne);
$("#workExperience").append(formatedDecOne);

//ARAMCO
var formattedWorkEmployerTwo = HTMLworkEmployer.replace("%data%",work.ARAMCO.employer);
var formatedWorkTitleTwo = HTMLworkTitle.replace("%data%", work.ARAMCO.position);
var formatedDateTwo = HTMLworkDates.replace("%data%", work.ARAMCO.dates);
var formatedCityTwo = HTMLworkLocation.replace("%data%", work.ARAMCO.city);
var formatedDecTwo = HTMLworkDescription.replace("%data%", work.ARAMCO.descreption);
$("#workExperience").append(formattedWorkEmployerTwo);
$("#workExperience").append(formatedWorkTitleTwo);
$("#workExperience").append(formatedDateTwo);
$("#workExperience").append(formatedCityTwo);
$("#workExperience").append(formatedDecTwo);



// -------------------- END WORK PART -----------------------

/*  -------------------- PROJECT PART -----------------------
	Project Section
	Consists of Project Title, Date, Descreption and Images !
*/
var project = {
	"title" : "Figi-Watcher",
	"date": "Dec, 2016",
	"descreption": "",
	"image": ""
};
//Latest Experince
var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.title);
$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedProjectTitle);

// -------------------- END PROJECT PART -----------------------


/*  -------------------- EDUCATION PART -----------------------
	Education Section
	Consists of school name, years attended, Years worked at and the city of the business !
*/
var education = {
	"name": ["Saint Joseph's University", "Arab Open University"],
	"years": 2,
	"city": "Philadelphia"
};
var formattedSchoolNameOne = HTMLschoolName.replace("%data%",education.name[0]);
var formattedSchoolNameTwo = HTMLschoolName.replace("%data%",education.name[1]);
$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolNameOne);
$("#education").append(formattedSchoolNameTwo);

// -------------------- END EDUCATION PART -----------------------


