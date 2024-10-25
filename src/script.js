// @author - Shiv Bhagat : https://github.com/shivxbhagat/

("use strict");

/*
[0] : faculty code
[1] : student number
[2] : student last name
[3] : student first name
[9] : external school code
[10] : external school name
[11] : effective term for that course
[12] : external course name
[13] : external course number
[14] : external course title
[15] : external credit hours
[16] : external grade
[17] : UM course code
[18] : UM course number
[19] : UM course title
[20] : UM credit hours
[21] : UM grade

*/

class CourseEquivalency {
	constructor() {
		this.schoolCode = "";
		this.schoolName = "";
		this.term = "";
		this.exCourseName = "";
		this.exCourseNum = "";
		this.exCourseTitle = "";
		this.exGrade = "";
		this.umCourseName = "";
		this.umCourseNum = "";
		this.umCourseTitle = "";
		this.umCredits = "";
		this.umGrade = "";
	}
}

class Student {
	constructor() {
		this.name = "";
		this.studentNumber = "";
		this.program = "";
		this.externalSchool = "";
		this.term = "";
		this.LP = {
			approved: [],
			pendingApprv: [],
			pendingDecision: [],
			denined: [],
			SS: [],
		};
	}

	// Add course to student
	pushApproved(course) {
		this.LP.approved.push(course);
	}

	pushPendingApprv(course) {
		this.LP.pendingApprv.push(course);
	}

	pushPendingDecision(course) {
		this.LP.pendingDecision.push(course);
	}

	pushDenied(course) {
		this.LP.denied.push(course);
	}

	pushSS(course) {
		this.LP.SS.push(course);
	}
}

document
	.getElementById("generate-button")
	.addEventListener("click", generateEmail);
document.getElementById("clear-button").addEventListener("click", clearData);

//hide back to top when its in the #input-section
window.onscroll = function () {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		document.getElementById("back-to-top").style.display = "block";
	} else {
		document.getElementById("back-to-top").style.display = "none";
	}
};

document.getElementById("back-to-top").addEventListener("click", clearData);

function clearData() {
	document.getElementById("input-textarea").value = "";
	document.getElementById("output-email").innerHTML = "";
	resetVariables();
}

let student = new Student();

function resetVariables() {
	student = new Student();
}

function generateEmail() {
	resetVariables();
	inputText = document.getElementById("input-textarea").value;

	if (inputText === "") {
		alert("Please enter valid data");
		location.reload();
		return;
	}

	// Split the input text into lines
	let lines = inputText.split("\n");
	console.log(lines[1]);

	// Extract student number
	primaryData = lines[1].split("\t");
	student.studentNumber = "00" + primaryData[1];

	// Extract student name
	if (primaryData[2] != "") {
		student.name = primaryData[2] + " ";
	}
	if (primaryData[3] != "") {
		student.name += primaryData[3];
	}

	//run through each lines
	for (let i = 1; i < lines.length; i++) {
		let data = lines[i].split("\t");
		let course = new CourseEquivalency();

		// Extract school code
		course.schoolCode = data[9];

		// Extract school name
		course.schoolName = data[10];

		// Extract course details
		course.term = data[11];
		course.exCourseName = data[12];
		course.exCourseNum = data[13];
		course.exCourseTitle = data[14];
		course.exGrade = data[16];
		course.umCourseName = data[17];
		course.umCourseNum = data[18];
		course.umCourseTitle = data[19];
		course.umCredits = data[20];
		course.umGrade = data[21];

		console.log(course.umCourseNum);

		// Add course to student
		if (course.exGrade === "LP") {
			if (
				course.umCourseNum == "9996" ||
				course.umCourseNum == "9997" ||
				course.umCourseNum == "9993"
			) {
				student.pushPendingDecision(course);
			} else {
				student.pushApproved(course);
			}
		} else if (course.exGrade == "LP PN") {
			student.pushPendingApprv(course);
		} else if (course.exGrade == "LP DN") {
			student.pushDenied(course);
		} else if (course.exGrade == "LP SS") {
			student.pushSS(course);
		}
	}

	console.log(student);

	document.getElementById("output-email").innerHTML = student.toString();

	// Clear after 1.5 minutes
	setTimeout(reload, 1.5 * 60 * 1000);
}

function reload() {
	document.getElementById("back-to-top").click();
}
