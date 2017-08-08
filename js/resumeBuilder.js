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
	"contacts": { 
	  "mobile": "+966542551805", 
	  "email": "elham.m.j@gmail.com",
	  "github": "elhammj", 
	  "website": "http://www.elhammj.com" ,
	  "location": "Dammam, Saudi Arabia"
	 },
	"welcomeMessage": " Welcome To My Resume !",
		"skills": ["Attention to Detail","Fast Working", "Leadership", "Programming Languages"],
	"biopic": "images/personalPhoto.jpg;",
	display: function(){
		//Header (Name and Role)
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		//Contact Info
		var formattedContactPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedContactGit = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedContactWebsite = HTMLblog.replace("%data%", bio.contacts.website);
		var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var allContactInfo = formattedContactPhone + formattedContactEmail + formattedContactGit + formattedContactWebsite + formattedContactLocation;
		$("#topContacts").append(allContactInfo);
		$("#footerContacts").append(allContactInfo);

		//Personal Image
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPic);

		//Welcome Msg
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMsg);

		//Skills
		$("#header").append(HTMLskillsStart);
		for (var i=0; i< bio.skills.length;i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#header").append(formattedSkill);
		}
	}

};
//Call the function to display the bio
bio.display();

//Function to captilaize last name and make it as the international format 
function inName(name){
	//Split the name
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return (name[0]+ " " + name[1]);
}
//Append the international name format button
$("#main").append(internationalizeButton); 
//Append Map
$("#mapDiv").append(googleMap);
// -------------------- END HEADER PART -----------------------

/*  -------------------- WORK PART -----------------------
	Work Experince Section (4 Work Experinces)
	Consists of Job Position, Employer, Years worked at and the city of the business !
*/
var work = {
	"jobs":[{
		"employer": "Saint Joseph's University",
		"title": "Gradute Teaching Asisstant",
		"location": "Philadelphia, United States",
		"dates": "Jan 2016 - Dec 2016",
		"descreption": " Attended classes for the course(s) assigned, assisted in closed Lab, graded assignments and understood and studied course materials. Tutored, supervised open and close labs and reported on students progress. "
	},
	{
		"employer": "Saudi Aramco",
		"title": "Software Develop Intern",
		"location": "Dhahran, Saudi Arabia",
		"dates": "Jun 2015 - Jul 2015",
		"descreption": "Developed a complete web application (GPS Navigation Map Online Request) and Windows application (GPS Navigation Map Tracking System) for Geospatial Information Technology Unit in Geomatics Service Division. Collaborated with coworkers to learn procedures and divided work evenly."
	},
	{
		"employer": "Design Plus",
		"title": "IT Specialist - Project",
		"location": "Khobar, Saudi Arabia",
		"dates": "Nov 2013 - Feb 2014",
		"descreption": "Managed Live streaming of the (Global Knowledge Society Forum) through the internet. Created the E-Ticket and temporary website of the (Global Knowledge Society Forum).Designed and Developed (Tahado) website."
	},
	{
		"employer": "Mohammed Al Braidy Company",
		"title": "Accountant",
		"location": "Khobar, Saudi Arabia",
		"dates": "Oct 2010 - Oct 2013",
		"descreption": "Documented financial transactions by entering account information. Summarized current financial status by collecting information; preparing balance sheet, profit and loss statement, and other reports. Prepared payments by verifying documentation, and requesting disbursements. Managed employee issues and relation. Built a small financial system to manage payroll, sales and employee attendance." 
	}],
	display: function(){
		//Adding the work experince to the page
		for (var i=0;i<work.jobs.length; i++){
			//Replacing the data
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formatedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formatedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formatedCity = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formatedDec = HTMLworkDescription.replace("%data%", work.jobs[i].descreption);
			var allWorkInfo = formattedWorkEmployer + formatedWorkTitle + formatedDate + formatedCity + formatedDec;
			//Appending Data
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(allWorkInfo);
		}
	}
};
//To display work
work.display();
//Function to return all the work locations
function locationaizer(work){
	var arr1 = [];
    for (var i=0; i<work.jobs.length;i++){

    	arr1.push(work.jobs[i].location); 
    }
	return arr1;
}

console.log(locationaizer(work));

// -------------------- END WORK PART -----------------------

/*  -------------------- PROJECT PART -----------------------
	Project Section
	Consists of Project Title, Date, Descreption and Images !
*/
var projects = {
	"projects": [{
		"title" : "Figi-Watcher",
		"dates": "August 2012 - May 2013",
		"descreption": "It is a windows-based application. The main goal of our smart software is to control and track products in a feasible way no matter how many products the user wants to store in it. The application is an embedded system where the software and hardware works together to accomplish its function by implementing some activitie.",
		"images": ["images/FigiWatcher.jpg"]
	},
		{"title" : "TogetherFit",
		"dates": "August 2016 - Dec 2016",
		"descreption": "It is a workout android application. This application connects people to others with similar goals and find trainers to help meet their goals. This application has two different parts: one for the students and the other for the trainers. In addition, It has a user registeration and log in parts and each user has its profile.",
		"images": ["images/TogetherFit.png"]
	}],
	display: function(){
		//Adding Project Data
		for (var i=0;i<projects.projects.length;i++)
		{
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
			var formattedProjectDes = HTMLprojectDescription.replace("%data%",projects.projects[i].descreption);
			var allProjectInfo = formattedProjectTitle + formattedProjectDate + formattedProjectDes;
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(allProjectInfo);
			if (projects.projects[i].images.length>0)
			{
				for (var j=0; j<projects.projects[i].images.length;j++){
					var formattedProjectImg = HTMLprojectImage.replace("%data%",projects.projects[i].images);
					$(".project-entry:last").append(formattedProjectImg);
				}
			}
		}
	}
};
//To display the projects
projects.display();


// -------------------- END PROJECT PART -----------------------

/*  -------------------- EDUCATION PART -----------------------
	Education and Online Courses Section
	Consists of school name, years attended, degree, major and the city of the school !
*/
var education = {
	"schools":[{
		"name": "Saint Joseph's University",
		"location": "Philadelphia, United States",
		"degree": "Master's of Computer Science",
		"majors": "Software Engineering",
		"dates": "Jan 2015 - Dec 2016"

	},
	{
		"name": "Arab Open University",
		"location": "Dammam, Saudi Arabia",
		"degree": "Bachelor of Science",
		"majors": "Information Technology and Computing",
		"dates": "Sep 2008 - Jul 2013"

	}],
	"course":[{
		"title": "Nanodegree Front-End Web Design",
		"school": "Udacity",
		"dates": "Jul 2017 - Oct 2017",
		"URL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	display: function(){
		//Adding the education to the page
		for (var i=0; i<education.schools.length;i++){
			//Replacing the data
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
			var allEducationInfo = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
			$("#education").append(HTMLschoolStart);
			//Appending Data
			$(".education-entry:last").append(allEducationInfo);
		}
		//Adding the course to the page
		$("#education").append(HTMLonlineClasses);
		for (var i=0;i<education.course.length;i++){
			//Replacing the data
			var formattedCourseTitle = HTMLonlineTitle.replace("%data%",education.course[i].title);
			var formattedCourseSchool = HTMLonlineSchool.replace("%data%",education.course[i].school);
			var formattedCourseDates = HTMLonlineDates.replace("%data%",education.course[i].dates);
			var formattedCourseURL = HTMLonlineURL.replace("%data%",education.course[i].URL);
			var allCourseInfo = formattedCourseTitle + formattedCourseSchool + formattedCourseDates + formattedCourseURL;
			//Appending Data
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(allCourseInfo);
		}
	}
};
//To display the education and online courses
education.display();
// -------------------- END EDUCATION PART -----------------------



