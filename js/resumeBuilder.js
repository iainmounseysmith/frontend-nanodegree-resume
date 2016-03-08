/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append(["Iain Mounsey-Smith"]);
/*var awesomethoughts="we are coool";
console.log(awesomethoughts);
var fun=awesomethoughts.replace("coool","fun");
console.log(fun);
console.log(fun.replace("fun","funfunnnnnny!"));
$("#main").append(fun); */
var name="Iain Mounsey-Smith";
var formattedName=HTMLheaderName.replace("%data%",name);
var myRole="Test Automation Analyst";
var formattedRole=HTMLheaderRole.replace("%data%",myRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
/*var audacity="audacity";
var Udacity="Udacity";
console.log(audacity.replace("au","Ud"));*/
var bio ={
        "name":"Iain Mounsey-Smith",
    "role":"Automation Test Analyst",
	"contacts":{
		"email":"iain.mounseysmith@gmail.com",
		"mobile":"021 0254 506",
		"github":"https://github.com/iainmounseysmith",
		"linkedIn":"https://nz.linkedin.com/in/iain-mounsey-smith-01351020",
		"location":"Wellington"
	},
	"welcomeMessage":"Gidday",
	"skills":["Selenium WebDriver","JMeter", "SoapUI", "LoadUI"],
	"TestTypes":["Functionality Automation","Performance Automation","System Automation","Manual Functionality","Infrastructure"
],
"bioPic":"images/spurs.jpg"};

	var work = {
	"jobs": [{
		"position": "Test Analyst1",
		"employer": "Westpac Banking Corporation1",
		"years": "5",
		"workLocation": "Wellington, New Zealand"
	}, {
		"position": "Test Analyst2",
		"employer": "Westpac Banking Corporation2",
		"years": "5",
		"workLocation": "Wellington, New Zealand"
	}]
}
	var projects={
		"projects":[
		{"title":"project1",
		"date":"date",
		"description":"desc",
		"images":["images/spurs.jpg"]
					},
		{
			"title":"project1",
		"date":"date",
		"description":"desc",
		"images":["images/spurs.jpg"]
		}
				]
	}
	projects.display=function(){
		for(proj in projects.projects){
		$("#projects").append(HTMLprojectStart);	
		//var formattedHTMLprojectTitle=HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
		//$("#projects").append(formattedHTMLprojectTitle);	
		$("#projects").append(HTMLprojectTitle.replace("%data%",projects.projects[proj].title));
		$("#projects").append(HTMLprojectDates.replace("%data%",projects.projects[proj].date));
		$("#projects").append(HTMLprojectDescription.replace("%data%",projects.projects[proj].description));
console.log("length "+ projects.projects[proj].images.length);
		if (projects.projects[proj].images.length>0){
			console.log("length inside"+ projects.projects[proj].images.length);
			for (image in projects.projects[proj].images){
				$("#projects").append(HTMLprojectImage.replace("%data%",projects.projects[proj].images[image]));
			}
		}
		}
			}
projects.display();

			console.log(projects.projects[0].title);
//javascript object literal notation ie json

var education={
	"schools":[
	{
		"name":"Wellington College",
		"city":"Wellington",
		"qualifications":["School Certificate","Sixth Form Certificate"]
	},
	{
		"name":"Wellington Polytechnic",
		"city":"Wellington",
		"qualifications":["NZCE"]
	}
	],
	"onlineCourses":[{
		"title":"GitHub",
		"school":"Udacity",
		"dates":"",
		"url":""
	}]
	}
//$("#main").append(bio.role);
//$("#main").append(bio.contacts.email);
//$("#main").append(work.position);
//$("#main").append(education["name"]);
var biopic=HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(biopic);

////for {(positionItem in bio.contacts){
/* if (bio.contacts.length > 0) {
		var formattedContact=HTMLcontactGeneric.replace("%contact%","RGGGRGRG");
		$("#header").append(formattedContact);
	//$("#skills-h3").append(formattedContact);
	//var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	//$("#skills-h3").append(formattedMobile);
//}
} */
for (contactItem in bio.contacts){//property=key:value
	    console.log(contactItem);
		var formattedContact=HTMLcontactGeneric.replace("%contact%",contactItem).replace("%data%",bio.contacts[contactItem]);
		//var formattedContact=HTMLcontactGeneric.replace("%data%",bio.contacts[contactItem]);
		$("#header").append(formattedContact);
		//console.log(contactItem); //all keys - email mobile github etc etc
   		//console.log(bio.contacts);//all properties/keys
    	//console.log(bio.contacts[contactItem]);//outputs values - iain.mounseysmith@gmail.com,021 0254 506 etc etc
    	//console.log(contactItem + " - " + bio.contacts[contactItem]); //all key:value pairs
}

if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	}

//console.log(bio.contacts.mobile);
/* for(job in work){
	console.log(work.job)
var formattedjob=HTMLworkStart.append(work[job]); 
}*/
$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});
console.log(locationizer(work));
function locationizer(work_obj){
	var locationarray=[];
	for (item in work_obj.jobs){
	var location = work_obj.jobs[item].workLocation;
	locationarray.push(location);
	}
	return locationarray;
};
$("#main").append(internationalizeButton);
displaywork();

function displaywork(){
for (positionItem in work.jobs){
	$("#workExperience").append(HTMLworkStart);
    if (work.jobs.hasOwnProperty(positionItem)) {// a conditional statement that tests if the key is part of the object:
        //var theemployer = work.jobs[positionItem].employer;
        //formattedEmployer=HTMLworkEmployer.replace("%data%",theemployer);
		formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[positionItem].employer);
		//var thePosition=work.jobs[positionItem].position;
		//formattedPosition=HTMLworkTitle.replace("%data%",thePosition);
		formattedPosition=HTMLworkTitle.replace("%data%",work.jobs[positionItem].position);
		$("#workExperience").append(formattedEmployer.concat(formattedPosition));
		//var theLocation=work.jobs[positionItem].workLocation;
		//formattedtheLocation=HTMLworkLocation.replace("%data%",theLocation);
		formattedtheLocation=HTMLworkLocation.replace("%data%",work.jobs[positionItem].workLocation);
		$("#workExperience").append(formattedtheLocation);
}}
}
console.log(inName(name));
//var inernationalizedName;
function inName(){
		var newNameArray=name.split(" ");
		var internationalizedName=(newNameArray[0].trim().slice(0,1).toUpperCase() + newNameArray[0].trim().slice(1)+ " " + newNameArray[1].toUpperCase());
		return internationalizedName;
}