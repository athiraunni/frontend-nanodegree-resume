var bio = {
    "name" : "Athira Unni",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "1234567890",
        "email" : "athirau072@gmail.com",
        "github" : "athiraunni",
        "location" : "India"
    },
    "welcomeMessage" : "Life is what we make. Make it a better one.",
    "skills" : ["Programming", "Communication", "Leadership", "Management", "Flexible in a group"],
    "bioPic" : "images/fry.jpg"
};

bio.display = function() {

var formattedName = HTMLheaderName.replace("%data%" , bio.name);
var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%" , bio.bioPic);

//var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%" , bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%" , bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$('#header').append(formattedBioPic);
//$("#main").append(formattedContactGeneric);
/*$('#topContacts', '#footerContacts').append(formattedMobile);
$('#topContacts', '#footerContacts').append(formattedEmail);
$('#topContacts', '#footerContacts').append(formattedGithub);
$('#topContacts', '#footerContacts').append(formattedLocation);*/
$('#topContacts').append(formattedMobile);
$('#footerContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#footerContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
$('#footerContacts').append(formattedGithub);
$('#header').append(formattedWelcomeMsg);

//if (bio.skills.length > 0) {
//var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skills) {
    //console.log(skills);
    var formattedSkill = HTMLskills.replace("%data%", skills);
    $("#skills").append(formattedSkill);
    });
};

bio.display();

   /* var formattedSkills = HTMLskills.replace("%data%" , bio.skills[0]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%" , bio.skills[1]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%" , bio.skills[2]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%" , bio.skills[3]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%" , bio.skills[4]);
    $("#skills").append(formattedSkills); */



var education = {
    "schools" : [
        {
            "name" : "GEC Sreekrishnapuram",
            "city" : "Sreekrishnapuram",
            "degree" : "B-Tech",
            "subject" : "Computer Science",
            "year" : 2016,
            "url" : "http://example.com"
        },
        {
            "name" : "HSS Sreekrishnapuram",
            "city" : "Sreekrishnapuram",
            "degree" : "High School",
            "subject" : "Biology",
            "year" : 2011,
            "url" : "http://example.com"
        }
    ],
    "onlineCourses" : [
    {
        "name" : "Information Security",
        "school" : "NPTEL",
        "year" : 2014,
        "url" : "http://www.nptel.ac.in"
    },
    {
        "name" : "Frontend Web Development",
        "school" : "Udacity",
        "year" : 2016,
        "url" : "http://www.udacity.com/nanodegrees/nd001"
    }
    ]
}
//$("#main").prepend(education);

var work = {
    "jobs" : [
        {
            "employer" : "Infosys",
            "title" : "Systems Engineer",
            "dates" : "January 2017 - Future",
            "description" : "As a Systems Engineer",
            "location" : "Mysore"
        },
        {
            "employer" : "Wipro",
            "title" : "Project Engineer",
            "dates" : "December 2015 - 2016",
            "description" : "As a Project Engineer",
            "location" : "Kochi"
        }
    ]
}
//$("#main").prepend(work);
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

//var formattedWorkStart = HTMLworkStart.replace("%data%" , work.jobs);
//$("#main").append(formattedWorkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
//$("#main").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
//$("#main").append(formattedWorkTitle);
var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
$(".work-entry:last").append(formattedWorkEmployerTitle);

var formattedWorkDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
$(".work-entry:last").append(formattedWorkDates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
$(".work-entry:last").append(formattedWorkDescription);
var formattedWorkLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
$(".location-text:last").append(formattedWorkLocation);
}

/*var formattedWorkEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[1].employer);
$("#main").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%" , work.jobs[1].title);
$("#main").append(formattedWorkTitle);
var formattedWorkDates = HTMLworkDates.replace("%data%" , work.jobs[1].dates);
$("#main").append(formattedWorkDates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%" , work.jobs[1].description);
$("#main").append(formattedWorkDescription);
var formattedWorkLocation = HTMLworkLocation.replace("%data%" , work.jobs[1].location);
$("#main").append(formattedWorkLocation);*/

var project = {
    "projects" : [
        {
            "title" : "HomeAutomation using IoT",
            "year" : 2016,
            "description" : "",
            "url" : ""
       },
       {
            "title" : "Digital Notice Board",
            "year" : 2015,
            "description" : "",
            "url" : "https://github.com/athiraunni/DNB_Mini-Project.git"
       }
    ]
}
//$("#main").prepend(projects);
var formattedProjectStart = HTMLprojectStart.replace("%data%" , project.projects);
$("#main").append(formattedProjectStart);
var formattedProjectTitle = HTMLprojectTitle.replace("%data%" , project.projects[0].title);
$("#main").append(formattedProjectTitle);
var formattedProjectYear = HTMLprojectDates.replace("%data%" , project.projects[0].year);
$("#main").append(formattedProjectYear);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%" , project.projects[0].description);
$("#main").append(formattedProjectDescription);
var formattedProjectUrl = HTMLprojectUrl.replace("%data%" , project.projects[0].url);
$("#main").append(formattedProjectUrl);

var formattedProjectTitle = HTMLprojectTitle.replace("%data%" , project.projects[1].title);
$("#main").append(formattedProjectTitle);
var formattedProjectYear = HTMLprojectDates.replace("%data%" , project.projects[1].year);
$("#main").append(formattedProjectYear);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%" , project.projects[1].description);
$("#main").append(formattedProjectDescription);
var formattedProjectUrl = HTMLprojectUrl.replace("%data%" , project.projects[1].url);
$("#main").append(formattedProjectUrl);

var cameron = {};
cameron.job = "course dev";
var makeCourse = function() {
    //make a course
    console.log("Made a course");
}
 var courses = 0;
 while(cameron.job === "course dev") {
    makeCourse();
    courses = courses + 1;
    if(courses === 10){
        cameron.job = "learning specialist";
    }
 }

 console.log(cameron.job);

 for(var i = 0;i<9;i++){
    console.log(i);
 }
