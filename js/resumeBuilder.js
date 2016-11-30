var bio = {
    "name": "Athira Unni",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9446840878",
        "email": "athirau072@gmail.com",
        "github": "athiraunni",
        "location": "India"
    },
    "welcomeMessage": "Life is what we make. Make it a better one.",
    "skills": ["Programming", "Communication", "Leadership", "Management", "Flexible in a group"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBiopic);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedLocation);
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
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Systems Engineer",
        "dates": "January 2017 - Future",
        "description": "As a Systems Engineer",
        "location": "Mysore"
    }, {
        "employer": "Wipro",
        "title": "Project Engineer",
        "dates": "December 2015 - 2016",
        "description": "As a Project Engineer",
        "location": "Kochi"
    }]
};

work.display = function() {
    //$("#main").prepend(work);
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        //$("#main").append(formattedWorkEmployer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        //$("#main").append(formattedWorkTitle);
        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedWorkEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkDescription);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedWorkLocation);
    });
}
work.display();

var project = {
    "projects": [{
        "title": "HomeAutomation using IoT",
        "date": "2016",
        "description": "A hardware project that is ought to be controlled by an Android application for the purpose of Home Automation and security. The cheaper but efficient components selected as the building parts of this idea makes this project a success and relevant for the society including common people.",
        "images": "images/prj2.png"
    }, {
        "title": "Digital Notice Board",
        "date": "2015",
        "description": "A software project to help schools and colleges to display notices and other information to a mass audience. User friendly and easily upgradeable one. The language used was Java in the back end and PHP in front end. The project was submitted to my college and is going to be tsken up by the upcoming batches for improvement and some modifications attaching relevant hardware components.",
        "images": "images/prj1.jpg"
    }]
};

project.display = function() {
    project.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", project.date);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(formattedProjectImage);
    });
}
project.display();

var education = {
    "schools": [{
        "name": "GEC Sreekrishnapuram",
        "degree": "B-Tech",
        "date": "2016",
        "location": "Sreekrishnapuram",
        "majors": ["Computer Science"]
    }, {
        "name": "HSS Sreekrishnapuram",
        "degree": "High School",
        "date": "2011",
        "location": "Sreekrishnapuram",
        "majors": ["Biology"]
    }],
    "onlineClasses": [{
        "title": "Information Security",
        "school": "NPTEL",
        "year": "2014",
        "url": "http://www.nptel.ac.in"
    }, {
        "title": "Frontend Web Development",
        "school": "Udacity",
        "year": "2016",
        "url": "http://www.udacity.com/nanodegrees/nd001"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.date);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formatteduniinfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
        $(".education-entry:last").append(formatteduniinfo);
    });

    var formattedonlineHeader = HTMLonlineClasses;
    $(".education-entry:last").append(formattedonlineHeader);

    education.onlineClasses.forEach(function(onlineClass) {
        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineClass.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineClass.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineClass.year);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineClass.url);
        var formattedbiinfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
        $(".education-entry:last").append(formattedbiinfo);
    });
}
education.display();

/*$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});*/


$("#mapDiv").append(googleMap);
