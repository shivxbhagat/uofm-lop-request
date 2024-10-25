// @author - Shiv Bhagat : https://github.com/shivxbhagat/

("use strict");

/*
for each line:
[0] : external course code
[1] : external course title
[2] : external grade
[3] : UM course code
[4] : UM course title
[5] : UM credit hours
[8] : UM grade

*/

class CourseEquivalency {
	constructor() {
		this.schoolCode = "";
		this.schoolName = "";
		this.term = "";
		this.exCourseCode = "";
		// this.exCourseNum = "";
		this.exCourseTitle = "";
		this.exGrade = "";
		this.umCourseCode = "";
		// this.umCourseNum = "";
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
	.addEventListener("click", generateData);
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

let student = new Student(),
	hasStudentNumber = false,
	hasStudentName = false,
	hasProgram = false;

function resetVariables() {
	student = new Student();
}

function generateData() {
	resetVariables();
	inputText = document.getElementById("input-textarea").value;

	if (inputText === "") {
		alert("Please enter valid data");
		location.reload();
		return;
	}

	// Split the input text into lines
	let splitText = inputText.split("\n");

	// Extract student details
	for (let i = 0; i < splitText.length; i++) {
		//get student #
		if (splitText[i].includes("Student #:") && hasStudentNumber == false) {
			student.studentNumber = splitText[i].split(":")[1].trim();
			hasStudentNumber = true;
		}
		//get student name
		if (splitText[i].includes("Student Name:") && hasStudentName == false) {
			student.name = splitText[i].split(":")[1].trim();
			hasStudentName = true;
		}
		//get program
		if (splitText[i].includes("Program:") && hasProgram == false) {
			student.program = splitText[i].split(":")[1].trim();
			hasProgram = true;
		}

		//get course data
		if (splitText[i].includes("Course No.")) {
			coursesData = splitText.slice(i + 1);
			break;
		}
	}

	let extSchoolName = "",
		extSchoolCode = "",
		line = [];

	for (let i = 0; i < coursesData.length; i++) {
		if (
			coursesData[i] != undefined &&
			!coursesData[i].includes("Attributes:") &&
			!coursesData[i].includes("Comments:") &&
			coursesData[i] != ""
		) {
			if (
				coursesData[i].includes(" - ") &&
				!coursesData[i].includes("\t")
			) {
				extSchoolName = coursesData[i].split(" - ")[0];
				extSchoolCode = coursesData[i].split(" - ")[1];
			} else {
				line = coursesData[i].split("\t");
				let course = new CourseEquivalency();
				course.schoolCode = extSchoolCode;
				course.schoolName = extSchoolName;
				course.exCourseCode = line[0];
				course.exCourseTitle = line[1];
				course.exGrade = line[2];
				course.umCourseCode = line[3];
				course.umCourseTitle = line[4];
				course.umCredits = line[5];
				course.umGrade = line[8];

				// Add course to student
				if (course.exGrade == "LP") {
					if (
						course.umCourseCode.includes("9996") ||
						course.umCourseCode.includes("9997") ||
						course.umCourseCode.includes("9993")
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
		} else if (
			coursesData[i].includes("Where sufficient") ||
			coursesData[i].includes("Courses transformed")
		) {
			break;
		}

		/*
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
			*/
	}

	console.log(student);

	document.getElementById("output-email").innerHTML = student.toString();

	// Clear after 1.5 minutes
	setTimeout(reload, 1.5 * 60 * 1000);
}

function reload() {
	document.getElementById("back-to-top").click();
}
