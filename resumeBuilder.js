var bio = {
    "name" : "Athira Unni",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "9446840878",
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

var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%" , bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$('#header').append(formattedBioPic);
$('#topContacts').append(formattedMobile);
//$('#footerContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
//$('#footerContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
//$('#footerContacts').append(formattedGithub);
$('#topContacts').append(formattedLocation);
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

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

        return name[0] +" "+ name[1];
}

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
};

function displayWork(){
//$("#main").prepend(work);
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

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
}
displayWork();
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
            "date" : "2016",
           "description" : "A hardware project that is ought to be controlled by an Android application for the purpose of Home Automation and security. The cheaper but efficient components selected as the building parts of this idea makes this project a success and relevant for the society including common people.",
            "images" : "images/prj2.png"
       },
       {
            "title" : "Digital Notice Board",
            "date" : "2015",
            "description" : "A software project to help schools and colleges to display notices and other information to a mass audience. User friendly and easily upgradeable one. The language used was Java in the back end and PHP in front end. The project was submitted to my college and is going to be tsken up by the upcoming batches for improvement and some modifications attaching relevant hardware components.",
            "images" : "images/prj1.jpg"
       }
    ]
};

$("#projects").append(HTMLprojectStart);

var title = project.projects[0].title;
var formattedProjectTitle = HTMLprojectTitle.replace("%data%",title);
$(".project-entry:last").append(formattedProjectTitle);
var date = project.projects[0].date;
var formattedProjectDate = HTMLprojectDates.replace("%data%",date);
$(".project-entry:last").append(formattedProjectDate);
var description = project.projects[0].description;
var formattedProjectDescription = HTMLprojectDescription.replace("%data%",description);
$(".project-entry:last").append(formattedProjectDescription);
var images = project.projects[0].images;
var formattedProjectImage = HTMLprojectImage.replace("%data%",images);
$(".project-entry:last").append(formattedProjectImage);

var title = project.projects[1].title;
var formattedProjectTitle = HTMLprojectTitle.replace("%data%",title);
$(".project-entry:last").append(formattedProjectTitle);
var date = project.projects[1].date;
var formattedProjectDate = HTMLprojectDates.replace("%data%",date);
$(".project-entry:last").append(formattedProjectDate);
var description = project.projects[1].description;
var formattedProjectDescription = HTMLprojectDescription.replace("%data%",description);
$(".project-entry:last").append(formattedProjectDescription);
var images = project.projects[1].images;
var formattedProjectImage = HTMLprojectImage.replace("%data%",images);
$(".project-entry:last").append(formattedProjectImage);

/*$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});*/

$("#mapDiv").append(googleMap);