// @author - Shiv Bhagat : https://github.com/shivxbhagat/

"use strict";

/*
for each line - external transfer credit statement from Aurora
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
			denied: [],
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
	document.getElementById("input-aurora").value = "";
	document.getElementById("input-banner").value = "";
	document.getElementById("output-email").innerHTML = "";
	resetVariables();
}

let student = new Student(),
	hasStudentNumber = false,
	hasStudentName = false,
	hasProgram = false,
	inputBanner = "",
	inputAurora = "";

function resetVariables() {
	(student = new Student()),
		(inputAurora = ""),
		(inputBanner = ""),
		(hasStudentNumber = false),
		(hasStudentName = false),
		(hasProgram = false);
}

function generateData() {
	resetVariables();
	inputAurora = document.getElementById("input-aurora").value;
	inputBanner = document.getElementById("input-banner").value;

	if (
		inputAurora === "" ||
		inputAurora === undefined ||
		inputBanner === "" ||
		inputBanner === undefined
	) {
		alert("Please enter valid data");
		location.reload();
		return;
	}

	// Split the input text into lines
	let splitText = inputAurora.split("\n");

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
			var coursesData = splitText.slice(i + 1);
			break;
		}
	}

	/*
	for each line - external transfer credit statement from Aurora
	[0] : external course code
	[1] : external course title
	[2] : external grade
	[3] : UM course code
	[4] : UM course title
	[5] : UM credit hours
	[8] : UM grade
	*/

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
				extSchoolCode = coursesData[i].split(" - ")[0];
				extSchoolName = coursesData[i].split(" - ")[1];
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
					if (
						course.umCourseCode.includes("9996") ||
						course.umCourseCode.includes("9997") ||
						course.umCourseCode.includes("9993")
					) {
						student.pushPendingDecision(course);
					} else {
						student.pushPendingApprv(course);
					}
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
	}

	//add terms to student's courses
	//split inputBanner into lines
	let splitBanner = inputBanner.split("\n");

	let bannerCourseExtract = [[], [], []];
	let i = 0;
	let type = -1;
	let clearForm = 0;
	// 0 - LP
	// 1 - LP PN
	// 2 - LP DN && LP SS
	while (i < splitBanner.length) {
		if (splitBanner[i].includes("Student ID:")) {
			if (splitBanner[i + 6] != student.studentNumber) {
				alert("Student ID does not match. Please enter correct data.");
				location.reload();
			}
		}

		if (
			splitBanner[i].includes("Courses With Credit Determined") &&
			!splitBanner[i++].includes("Page")
		) {
			i++;
			type = 0;
		} else if (
			splitBanner[i].includes("Courses Pending Assessment") &&
			!splitBanner[i].includes("Page")
		) {
			type = 1;
		} else if (
			splitBanner[i].includes("Courses Not Awarded Credit") &&
			!splitBanner[i].includes("Page")
		) {
			type = 2;
		} else if (splitBanner[i].includes("Clear Form") && clearForm > 0) {
			break;
		} else if (splitBanner[i].includes("Clear Form")) {
			type = -1;
			clearForm++;
		}

		if (splitBanner[i].includes(" (") && splitBanner[i].includes(") ")) {
			let tempType = type;
			let arr = [];
			arr.push(splitBanner[i].split(" (")[0]); //school name
			arr.push(splitBanner[i++].split(" (")[1].split(") ")[0]); //school code
			arr.push(splitBanner[i++]); //term
			let course = splitBanner[i++].split(" ");
			arr.push(course[0] + " " + course[1]); //course code
			arr.push(course.slice(2).join(" ").trimEnd()); //course title
			if (
				splitBanner[i].includes("LP" || "LP PN" || "LP DN" || "LP SS")
			) {
				if (splitBanner[i] == "LP") {
					type = 0;
				} else if (splitBanner[i] == "LP PN") {
					type = 1;
				}
				arr.push(splitBanner[i++]); //ext grade
			} else {
				continue;
			}
			course = splitBanner[i++].split(" ");
			arr.push(course[0] + " " + course[1]); //um course code
			arr.push(course.slice(2).join(" ")); //um course title
			arr.push(splitBanner[i++]); //um credits
			bannerCourseExtract[type].push(arr);
			type = tempType;
		}

		i++;
	}

	//add terms to student's courses from bannerCourseExtract by comparing with student's courses
	for (let i = 0; i < student.LP.approved.length; i++) {
		for (let j = 0; j < bannerCourseExtract[0].length; j++) {
			if (
				student.LP.approved[i].exCourseCode ==
				bannerCourseExtract[0][j][3]
			) {
				student.LP.approved[i].term = bannerCourseExtract[0][j][2];
				break;
			}
		}
	}

	for (let i = 0; i < student.LP.pendingApprv.length; i++) {
		for (let j = 0; j < bannerCourseExtract[1].length; j++) {
			if (
				student.LP.pendingApprv[i].exCourseCode ==
				bannerCourseExtract[1][j][3]
			) {
				student.LP.pendingApprv[i].term = bannerCourseExtract[1][j][2];
				break;
			}
		}
	}

	//pending descision is from both LP and LP PN
	for (let i = 0; i < student.LP.pendingDecision.length; i++) {
		for (let j = 0; j < bannerCourseExtract[0].length; j++) {
			if (
				student.LP.pendingDecision[i].exCourseCode ==
				bannerCourseExtract[0][j][3]
			) {
				student.LP.pendingDecision[i].term =
					bannerCourseExtract[0][j][2];
				break;
			}
		}
		for (let j = 0; j < bannerCourseExtract[1].length; j++) {
			if (
				student.LP.pendingDecision[i].exCourseCode ==
				bannerCourseExtract[1][j][3]
			) {
				student.LP.pendingDecision[i].term =
					bannerCourseExtract[1][j][2];
				break;
			}
		}
	}

	for (let i = 0; i < student.LP.denied.length; i++) {
		for (let j = 0; j < bannerCourseExtract[2].length; j++) {
			if (
				student.LP.denied[i].exCourseCode ==
				bannerCourseExtract[2][j][3]
			) {
				student.LP.denied[i].term = bannerCourseExtract[2][j][2];
				break;
			}
		}
	}

	for (let i = 0; i < student.LP.SS.length; i++) {
		for (let j = 0; j < bannerCourseExtract[2].length; j++) {
			if (student.LP.SS[i].exCourseCode == bannerCourseExtract[2][j][3]) {
				student.LP.SS[i].term = bannerCourseExtract[2][j][2];
				break;
			}
		}
	}

	// Sort courses by school code and then by term
	function sortCourses(courses) {
		return courses.sort((a, b) => {
			if (a.schoolCode < b.schoolCode) return -1;
			if (a.schoolCode > b.schoolCode) return 1;
			if (a.term < b.term) return -1;
			if (a.term > b.term) return 1;
			return 0;
		});
	}

	student.LP.approved = sortCourses(student.LP.approved);
	student.LP.pendingApprv = sortCourses(student.LP.pendingApprv);
	student.LP.pendingDecision = sortCourses(student.LP.pendingDecision);
	student.LP.denied = sortCourses(student.LP.denied);
	student.LP.SS = sortCourses(student.LP.SS);

	console.log(student);

	generatePDF(student);

	// Clear after 1.5 minutes
	setTimeout(reload, 1.5 * 60 * 1000);
}

function generatePDF(student) {}

function reload() {
	document.getElementById("back-to-top").click();
}
