// @author - Shiv Bhagat : https://github.com/shivxbhagat/
("use strict");

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

function clearData() {
	document.getElementById("input-aurora").value = "";
	document.getElementById("input-banner").value = "";
	resetVariables();
}

let student = new Student(),
	hasStudentNumber = false,
	hasStudentName = false,
	hasProgram = false,
	inputBanner = "",
	effectiveTerm = "";
inputAurora = "";

function resetVariables() {
	(student = new Student()),
		(inputAurora = ""),
		(inputBanner = ""),
		(hasStudentNumber = false),
		(hasStudentName = false),
		(effectiveTerm = ""),
		(hasProgram = false);
}

function generateData() {
	resetVariables();
	inputAurora = document.getElementById("input-aurora").value;
	inputBanner = document.getElementById("input-banner").value;
	effectiveTerm = "202510";

	inputBanner = `
   X         Statement of Transfer Credit (SWASOTC)
 
Clear Form
Run Report - All Students
Select Faculty or College: * 
Generate Report
 
 
Enter Student ID or Names
 
Student ID: 
007929993
OR
Last Name: 
First Name: 
 
007929993
Wayngarten
Hannah
  Page 
1
 of 1   Per Page 
15
 Records Found: 1Refresh
Select Program
2
Faculty of Science - B.Sc.(Hons.)
  Page 
1
 of 1   Per Page 
5
 Records Found: 1Refresh
Courses With Credit Determined
  Page 
1
 of 0   Per Page 
24
 Records Found: 0Save Data Reload Data
Courses Pending Assessment
2
Univ Politecnica de Valencia (ES0004) 
202410
ISLS 13695 INTL. SEM. LIFE SCIENCES II 
LP PN
SCIE 9997 24/05/24 SENT TO DEPARTMENT
0.00
  Page 
1
 of 1   Per Page 
24
 Records Found: 1Save Data Reload Data
Courses Not Awarded Credit
2
Univ Politecnica de Valencia (ES0004) 
202410
ENG 89898 SOFT SKILLS/ ENGINEERS 
LP PN
ARTS 9999 NO CREDIT 123456789012345678901
0.00
2
Univ Politecnica de Valencia (ES0004) 
202410
ISLS 89899 ONLINE RESEARCH PROJ. LIFE SCI 
LP PN
BIOL 9999 NO CREDIT
0.00
2
Univ Politecnica de Valencia (ES0004) 
202410
ENG 89898 SOFT SKILLS/ ENGINEERS 
LP PN
ENG 9999 NO CREDIT
0.00
  Page 
1
 of 1   Per Page 
24
 Records Found: 3Save Data Reload Data
 
Clear Form
`;

	inputAurora = `
University of Manitoba - Aurora

Personal Information	Tab Corner Right	Enrolment & Academic Records	Tab Corner Right	Advisor Services	Tab Corner Right	Admission Services	Tab Corner Right	Student Reports	Tab Corner Right	Student Awards and Financial Aid	Tab Corner Right
Transparent Image
 
HELP | EXIT

Statement of Transfer Credit
 	

Nov 08, 2024 06:19 pm
Transparent Image

Student #: 007929993
Student Name: Hannah Wayngarten
Effective Term: Fall 2022
Program: Science-BSc Honours


The University of Manitoba evaluates external courses for possible transfer credit on a course-by-course basis. Credit is determined based on review of detailed course outlines/syllabi by the applicable department or teaching unit, and is subject to final approval by the program of admission.


Basis of Transfer Credit	U of M Transfer Credit Awarded
Course No.	Description	Grade	Course No.	Description	Cr Hrs	R	Grade	Applied
Courses Pending an Assessment Decision:
ES0004 - Univ Politecnica de Valencia
ISLS 13695	INTL. SEM. LIFE SCIENCES II	LP PN	SCIE 9997	24/05/24 SENT TO DEPARTMENT	0.0	 	 	LP IP	
Courses Not Awarded Credit:
ES0004 - Univ Politecnica de Valencia
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ES0032 - Univ Po de Valencia
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ARTS 9999	NO CREDIT 123456789012345678901	0.0	 	 	LP IP	
ISLS 89899	ONLINE RESEARCH PROJ. LIFE SCI	LP PN	BIOL 9999	NO CREDIT	0.0	 	 	LP IP	
ENG 89898	SOFT SKILLS/ ENGINEERS	LP PN	ENG 9999	NO CREDIT	0.0	 	 	LP IP	
Where sufficient overlap in course content does not exist, courses may be assigned unspecified (general) credit (e.g. PSYC 1XXX TRANSFER 1000 LVL).


Courses transferred from external institutions (other than Department of English courses) do not satisfy the University of Manitoba's Written English Requirement, or Engineering Written Requirement list (WE), except by individual assessment. Further information regarding individual assessment of the Written English Requirement can be obtained by contacting the Dean's Office, Faculty of Arts, 3rd Floor Fletcher Argue. See Section 2.2 General Academic Regulations and Requirements in the Undergraduate Calendar.


For current University of Manitoba students seeking external course study on a Letter of Permission, grade indicators are:
LP: Course has been approved for external studies on a Letter of Permission.
LP PN: Course is pending a program decision. Approval has not been granted.
LP DN: Course has been denied for use towards your program of study.


The R (Repeat) column is used to indicate courses that have been assessed against the University of Manitoba's Course Repeat regulations. External transfer courses with subsequent repeats prior to Fall 2016 should have an indicator of E (exclude) on all but the most recent attempt. An active course registration effective Fall 2016, forward, will have an A (include in GPA) repeat indicator applied to all but the highest attempt. M (manual) or S (system) simply identifies how the repeat indicator was applied.



Transparent Image

[ Select Another Program | Select Another ID | Select Another Student from the List ]

Release: 1.0

© 2024 Ellucian Company L.P. and its affiliates.
`;

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
	//setTimeout(resetVariables, 1.5 * 60 * 1000);
}

async function generatePDF(student) {
	let date = new Date();
	let dd = String(date.getDate()).padStart(2, "0");
	let mm = date.toLocaleString("default", { month: "long" });
	let yyyy = date.getFullYear();

	date = mm + " " + dd + ", " + yyyy;

	console.log(date);

	const { PDFDocument, rgb } = PDFLib;

	const pdfDoc = await PDFDocument.create();
	const form = pdfDoc.getForm();
	let page = pdfDoc.addPage([612, 792]);

	const margin = 25;
	const fontSize = 8;

	const font = await pdfDoc.embedFont("Helvetica");
	const fontBold = await pdfDoc.embedFont("Helvetica-Bold");

	const logoUrl = "img/logo.png"; // Path to your local PNG logo
	const logoImageBytes = await fetch(logoUrl).then((res) =>
		res.arrayBuffer()
	);
	const logoImage = await pdfDoc.embedPng(logoImageBytes);
	const logoWidth = 100;
	const logoHeight = 50;
	page.drawImage(logoImage, {
		x: margin + 50,
		y: page.getHeight() - logoHeight - margin - 10,
		width: logoWidth,
		height: logoHeight,
	});

	// Draw text next to the logo
	const text = "REQUEST FOR LOP APPROVAL";
	page.drawText(text, {
		x: margin + logoWidth + 50 + 10 + 40 - 10,
		y: page.getHeight() - logoHeight - margin + 15 - 10,
		size: 15,
		font: fontBold,
		color: rgb(32 / 255, 8 / 255, 0 / 255),
	});

	//date

	const textMargin = margin + 20;
	page.drawText(date, {
		x: textMargin,
		y: page.getHeight() - margin - 130,
		size: fontSize,
		font: font,
		color: rgb(0, 0, 0),
	});

	//student details
	const studentDetails = [
		["Student Name:", student.name],
		["Student Number:", student.studentNumber],
		["Program:", student.program],
		["External School:", student.LP.pendingApprv[0].schoolName],
		["Effective Term:", ""],
	];

	console.log(studentDetails);

	let y = page.getHeight() - margin - 180;

	for (let i = 0; i < studentDetails.length; i++) {
		page.drawText(studentDetails[i][0], {
			x: textMargin,
			y: y,
			size: fontSize,
			font: fontBold,
			color: rgb(0, 0, 0),
		});

		page.drawText(studentDetails[i][1], {
			x: textMargin + 90,
			y: y,
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		y -= 15;
	}

	//some comment text
	let commentText =
		"Please note that the following courses have been approved for transfer credit by the Faculty of Science. Please review \nthe courses and approve them for the effective term.";
	y -= 5;

	//prevent the overflow of commentText
	page.drawText(commentText, {
		x: textMargin,
		y: y,
		size: fontSize,
		font: font,
		color: rgb(0, 0, 0),
		lineHeight: 12,
	});

	// Table configuration
	y -= 40;
	const externalCol = (page.getWidth() - 2 * textMargin) / 2 - 30;
	const umCol = (page.getWidth() - 2 * textMargin) / 2 + 30;
	const tableRow = 11;
	const table = {
		x: textMargin, // Starting X position
		y: y, // Starting Y position
		rowHeight: tableRow,
		columnWidths: [externalCol, umCol], // Width of each column
		headers: ["Basis of Transfer Credit", "UofM Transfer Credit Awarded"],
	};

	let currentY = table.y;

	// Draw headers with borders
	table.headers.forEach((header, index) => {
		const x =
			table.x +
			table.columnWidths.slice(0, index).reduce((a, b) => a + b, 0);

		// Calculate text width for horizontal centering
		const textWidth = fontBold.widthOfTextAtSize(header, fontSize);
		const cellWidth = table.columnWidths[index];

		// Draw header text (centered horizontally and vertically)
		page.drawText(header, {
			x: x + (cellWidth - textWidth) / 2, // Center horizontally
			y: currentY - table.rowHeight / 2 - fontSize / 2 + 2, // Center vertically
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		// Draw border for the header cell
		page.drawRectangle({
			x: x, // Match the text position
			y: currentY, // Start at the current Y position
			width: cellWidth, // Width of the column
			height: -table.rowHeight, // Negative for downward rendering
			borderColor: rgb(0, 0, 0),
			borderWidth: 1,
		});
	});

	// Move Y position for content rows
	currentY -= table.rowHeight;

	const tableMain = {
		x: textMargin, // Starting X position
		y: currentY, // Starting Y position
		rowHeight: tableRow,
		columnWidths: [
			externalCol * 0.15,
			externalCol * 0.72,
			externalCol * 0.13,
			umCol * 0.65,
			umCol * 0.05,
			umCol * 0.1,
			umCol * 0.1,
			umCol * 0.1,
		], // Width of each column
		headers: [
			"Term",
			"External Course",
			"Grade",
			"UM Course",
			"Cr",
			"Grade",
			"Aprv",
			"Deny",
		],
	};
	tableMain.headers.forEach((header, index) => {
		// Calculate X position for the current column
		const x =
			tableMain.x +
			tableMain.columnWidths.slice(0, index).reduce((a, b) => a + b, 0);

		// Calculate text width for horizontal centering
		const textWidth = fontBold.widthOfTextAtSize(header, fontSize);
		const cellWidth = tableMain.columnWidths[index];

		// Draw header text (centered horizontally and vertically)
		page.drawText(header, {
			x: x + (cellWidth - textWidth) / 2, // Center horizontally
			y: currentY - tableMain.rowHeight / 2 - fontSize / 2 + 2, // Center vertically
			size: fontSize,
			font: font, // Ensure bold font is used if needed
			color: rgb(0, 0, 0),
		});

		// Draw border for the header cell
		page.drawRectangle({
			x: x, // X position matches header text
			y: currentY, // Y position matches the current row
			width: cellWidth, // Cell width
			height: -tableMain.rowHeight, // Negative for downward rendering
			borderColor: rgb(0, 0, 0), // Black border
			borderWidth: 1, // Border thickness
		});
	});

	// Move Y position for content rows
	currentY -= tableMain.rowHeight * 2.5;

	//go through each pending approval course and draw it in the table with max width for each column
	let ext1Max = externalCol * 0.15 - 1;
	let ext21Max = externalCol * 0.72 * 0.2 - 1;
	let ext22Max = externalCol * 0.72 * 0.8 - 1;
	let ext3Max = externalCol * 0.13 - 1;

	let um11Max = umCol * 0.65 * 0.2 - 1;
	let um12Max = umCol * 0.65 * 0.8 - 1;
	let um2Max = umCol * 0.05 - 1;
	let um3Max = umCol * 0.1 - 1;
	let um4Max = umCol * 0.1 - 1;

	const tableBody = {
		x: textMargin, // Starting X position
		y: currentY, // Starting Y position
		rowHeight: tableRow,
		columnWidths: [
			externalCol * 0.15, //0
			externalCol * 0.72 * 0.2, //1
			externalCol * 0.72 * 0.8, //2
			externalCol * 0.13, //3
			umCol * 0.65 * 0.2, //4
			umCol * 0.65 * 0.8, //5
			umCol * 0.05, //6
			umCol * 0.1, //7
			umCol * 0.1, //8
			umCol * 0.1, //9
		],
	};

	let heading = "";
	let result = [];
	if (student.LP.approved.length > 0) {
		heading = "Courses Approved for Letter of Permission";

		result = drawBody(
			pdfDoc,
			page,
			student.LP.approved,
			tableMain,
			tableBody,
			currentY,
			heading,
			externalCol,
			umCol,
			textMargin,
			margin,
			font,
			fontBold,
			fontSize,
			false
		);

		currentY = result[0];
		page = result[1];
	}

	if (student.LP.pendingApprv.length > 0) {
		heading = "Courses Pending Program Approval ";

		result = drawBody(
			pdfDoc,
			page,
			student.LP.pendingApprv,
			tableMain,
			tableBody,
			currentY,
			heading,
			externalCol,
			umCol,
			textMargin,
			margin,
			font,
			fontBold,
			fontSize,
			true
		);

		currentY = result[0];
		page = result[1];
	}

	if (student.LP.pendingDecision.length > 0) {
		let heading = "Courses Pending an Assessment Decision ";

		result = drawBody(
			pdfDoc,
			page,
			student.LP.pendingDecision,
			tableMain,
			tableBody,
			currentY,
			heading,
			externalCol,
			umCol,
			textMargin,
			margin,
			font,
			fontBold,
			fontSize,
			false,
			margin
		);

		currentY = result[0];
		page = result[1];
	}

	if (student.LP.denied.length > 0) {
		let heading = "Courses Denied for Letter of Permission";

		result = drawBody(
			pdfDoc,
			page,
			student.LP.denied,
			tableMain,
			tableBody,
			currentY,
			heading,
			externalCol,
			umCol,
			textMargin,
			margin,
			font,
			fontBold,
			fontSize,
			false
		);

		currentY = result[0];
		page = result[1];
	}

	if (student.LP.SS.length > 0) {
		heading = "Courses External to Current Program of Study";

		result = drawBody(
			pdfDoc,
			page,
			student.LP.SS,
			tableMain,
			tableBody,
			currentY,
			heading,
			externalCol,
			umCol,
			textMargin,
			margin,
			font,
			fontBold,
			fontSize,
			false
		);

		currentY = result[0];
		page = result[1];
	}

	// if (student.LP.pendingApprv.length > 0) {
	// 	let heading = "Courses Pending Program Approval";

	// 	// Draw heading text
	// 	page.drawText(heading, {
	// 		x: textMargin + 1,
	// 		y: currentY,
	// 		size: fontSize,
	// 		font: fontBold,
	// 		color: rgb(0, 0, 0),
	// 	});

	// 	const textWidth = fontBold.widthOfTextAtSize(heading, fontSize);

	// 	page.drawLine({
	// 		start: { x: textMargin + 1, y: currentY - 2 }, // Adjust Y for the underline's position
	// 		end: { x: textMargin + 1 + textWidth, y: currentY - 2 },
	// 		color: rgb(0, 0, 0),
	// 		thickness: 1, // Thickness of the underline
	// 	});
	// 	currentY -= 15;
	// }

	// let str = "";

	// for (let i = 0; i < student.LP.pendingApprv.length; i++) {
	// 	let course = student.LP.pendingApprv[i];
	// 	if (!str.includes(course.schoolCode)) {
	// 		let extSC = course.schoolCode;
	// 		let extSN = course.schoolName;
	// 		str = extSC + " - " + extSN;
	// 		console.log(str);
	// 		page.drawText(str, {
	// 			x: textMargin + tableBody.columnWidths[0] + 1,
	// 			y: currentY,
	// 			size: fontSize,
	// 			font: font,
	// 			color: rgb(0, 0, 0),
	// 		});
	// 		currentY -= tableMain.rowHeight + 5;
	// 	}

	// 	let maxY = currentY;
	// 	let startY = currentY;

	// 	let ext1 = course.term;
	// 	let ext21 = course.exCourseCode;
	// 	let ext22 = course.exCourseTitle;
	// 	let ext3 = course.exGrade;
	// 	let um11 = course.umCourseCode;
	// 	let um12 = course.umCourseTitle;
	// 	let um2 = course.umCredits;
	// 	let um3 = course.umGrade;

	// 	page.drawText(ext1, {
	// 		x: textMargin + 1,
	// 		y: currentY,
	// 		size: fontSize,
	// 		font: font,
	// 		color: rgb(0, 0, 0),
	// 	});

	// 	let textWidth = font.widthOfTextAtSize(ext21, fontSize);

	// 	if (textWidth > ext21Max) {
	// 		let lines = ext21.split(" ");
	// 		for (let j = 0; j < lines.length; j++) {
	// 			page.drawText(lines[j], {
	// 				x: textMargin + tableBody.columnWidths[0] + 1,
	// 				y: currentY,
	// 				size: fontSize,
	// 				font: font,
	// 				color: rgb(0, 0, 0),
	// 			});
	// 			currentY -= tableMain.rowHeight;
	// 		}
	// 		maxY = currentY;
	// 		currentY = startY;
	// 	} else {
	// 		page.drawText(ext21, {
	// 			x: textMargin + tableBody.columnWidths[0] + 1,
	// 			y: currentY,
	// 			size: fontSize,
	// 			font: font,
	// 			color: rgb(0, 0, 0),
	// 		});
	// 	}

	// 	textWidth = font.widthOfTextAtSize(ext22, fontSize);

	// 	if (textWidth > ext22Max) {
	// 		ext22 = ext22.substring(0, 25);
	// 	}

	// 	page.drawText(ext22, {
	// 		x:
	// 			textMargin +
	// 			tableBody.columnWidths[0] +
	// 			tableBody.columnWidths[1] +
	// 			1,
	// 		y: currentY,
	// 		size: fontSize,
	// 		font: font,
	// 		color: rgb(0, 0, 0),
	// 	});

	// 	page.drawText(ext3, {
	// 		x:
	// 			textMargin +
	// 			tableBody.columnWidths[0] +
	// 			tableBody.columnWidths[1] +
	// 			tableBody.columnWidths[2] +
	// 			1,
	// 		y: currentY,
	// 		size: fontSize,
	// 		font: font,
	// 		color: rgb(0, 0, 0),
	// 	});

	// 	textWidth = font.widthOfTextAtSize(um11, fontSize);

	// 	if (textWidth > um11Max) {
	// 		let lines = um11.split(" ");
	// 		for (let j = 0; j < lines.length; j++) {
	// 			page.drawText(lines[j], {
	// 				x:
	// 					textMargin +
	// 					tableBody.columnWidths[0] +
	// 					tableBody.columnWidths[1] +
	// 					tableBody.columnWidths[2] +
	// 					tableBody.columnWidths[3] +
	// 					+1,
	// 				y: currentY,
	// 				size: fontSize,
	// 				font: font,
	// 				color: rgb(0, 0, 0),
	// 			});
	// 			currentY -= tableMain.rowHeight;
	// 		}
	// 		maxY = currentY;
	// 		currentY = startY;
	// 	} else {
	// 		page.drawText(um11, {
	// 			x:
	// 				textMargin +
	// 				tableBody.columnWidths[0] +
	// 				tableBody.columnWidths[1] +
	// 				tableBody.columnWidths[2] +
	// 				tableBody.columnWidths[3] +
	// 				+1,
	// 			y: currentY,
	// 			size: fontSize,
	// 			font: font,
	// 			color: rgb(0, 0, 0),
	// 		});
	// 	}

	// 	textWidth = font.widthOfTextAtSize(um12, fontSize);

	// 	if (textWidth > um12Max) {
	// 		um12 = um12.substring(0, 25);
	// 	}

	// 	page.drawText(um12, {
	// 		x:
	// 			textMargin +
	// 			tableBody.columnWidths[0] +
	// 			tableBody.columnWidths[1] +
	// 			tableBody.columnWidths[2] +
	// 			tableBody.columnWidths[3] +
	// 			tableBody.columnWidths[4] +
	// 			+1,
	// 		y: currentY,
	// 		size: fontSize,
	// 		font: font,
	// 		color: rgb(0, 0, 0),
	// 	});

	// 	page.drawText(um2, {
	// 		x:
	// 			textMargin +
	// 			tableBody.columnWidths[0] +
	// 			tableBody.columnWidths[1] +
	// 			tableBody.columnWidths[2] +
	// 			tableBody.columnWidths[3] +
	// 			tableBody.columnWidths[4] +
	// 			tableBody.columnWidths[5] +
	// 			+1,
	// 		y: currentY,
	// 		size: fontSize,
	// 		font: font,
	// 		color: rgb(0, 0, 0),
	// 	});

	// 	page.drawText(um3, {
	// 		x:
	// 			textMargin +
	// 			tableBody.columnWidths[0] +
	// 			tableBody.columnWidths[1] +
	// 			tableBody.columnWidths[2] +
	// 			tableBody.columnWidths[3] +
	// 			tableBody.columnWidths[4] +
	// 			tableBody.columnWidths[5] +
	// 			tableBody.columnWidths[6] +
	// 			+1,
	// 		y: currentY,
	// 		size: fontSize,
	// 		font: font,
	// 		color: rgb(0, 0, 0),
	// 	});

	// 	// Create a radio group
	// 	const radioGroup = form.createRadioGroup(`${currentY}`);

	// 	// Create the first radio button (Approve)
	// 	radioGroup.addOptionToPage("Approve", page, {
	// 		x:
	// 			textMargin +
	// 			tableBody.columnWidths[0] +
	// 			tableBody.columnWidths[1] +
	// 			tableBody.columnWidths[2] +
	// 			tableBody.columnWidths[3] +
	// 			tableBody.columnWidths[4] +
	// 			tableBody.columnWidths[5] +
	// 			tableBody.columnWidths[6] +
	// 			tableBody.columnWidths[7] +
	// 			+5,
	// 		y: currentY - 2,
	// 		width: 10,
	// 		height: 10,
	// 	});

	// 	// Create the second radio button (Deny)
	// 	radioGroup.addOptionToPage("Deny", page, {
	// 		x:
	// 			textMargin +
	// 			tableBody.columnWidths[0] +
	// 			tableBody.columnWidths[1] +
	// 			tableBody.columnWidths[2] +
	// 			tableBody.columnWidths[3] +
	// 			tableBody.columnWidths[4] +
	// 			tableBody.columnWidths[5] +
	// 			tableBody.columnWidths[6] +
	// 			tableBody.columnWidths[7] +
	// 			tableBody.columnWidths[8] +
	// 			+5,
	// 		y: currentY - 2,
	// 		width: 10,
	// 		height: 10,
	// 	});

	// 	currentY = maxY;
	// 	currentY -= tableMain.rowHeight;
	// }

	//draw dotted line
	page.drawLine({
		start: { x: textMargin, y: currentY },
		end: { x: page.getWidth() - textMargin, y: currentY },
		color: rgb(0, 0, 0),
		dashArray: [5, 5],
	});

	// currentY -= 10;

	// if (currentY <= margin + 15 * 3 + 10) {
	// 	page = pdfDoc.addPage([612, 792]);
	// 	currentY = page.getHeight() - margin;
	// }

	// page.drawText("Comments:", {
	// 	x: textMargin,
	// 	y: currentY,
	// 	size: fontSize,
	// 	font: fontBold,
	// 	color: rgb(0, 0, 0),
	// });

	// currentY -= 15 + 40;

	// const textField = form.createTextField("inputField");
	// // textField.setFontSize(fontSize);
	// textField.addToPage(page, {
	// 	x: textMargin, // X position of the field
	// 	y: currentY, // Y position of the field
	// 	width: page.getWidth() - 2 * textMargin, // Width of the input field
	// 	height: 45, // Height of the input field
	// });
	// textField.setFont(font); // Set font for the text field
	// textField.setFontSize(fontSize);

	// currentY -= 45 + 5;

	// // Add fillable text fields for comments
	// const commentField1 = form.createTextField("comment1");
	// commentField1.setText("");
	// commentField1.addToPage(page, {
	// 	x: textMargin,
	// 	y: currentY,
	// 	width: page.getWidth() - 2 * textMargin,
	// 	height: 15,
	// 	font: font,
	// 	fontSize: fontSize,
	// 	borderColor: rgb(0, 0, 0),
	// 	borderWidth: 1,
	// });

	// currentY -= 15;

	// const commentField2 = form.createTextField("comment2");
	// commentField2.setText("");
	// commentField2.addToPage(page, {
	// 	x: textMargin,
	// 	y: currentY,
	// 	width: page.getWidth() - 2 * textMargin,
	// 	height: 15,
	// 	font: font,
	// 	fontSize: fontSize,
	// 	borderColor: rgb(0, 0, 0),
	// 	borderWidth: 1,
	// });

	// currentY -= 15;

	// const commentField3 = form.createTextField("comment3");
	// commentField3.setText("");
	// commentField3.addToPage(page, {
	// 	x: textMargin,
	// 	y: currentY,
	// 	width: page.getWidth() - 2 * textMargin,
	// 	height: 15,
	// 	font: font,
	// 	fontSize: fontSize,
	// 	borderColor: rgb(0, 0, 0),
	// 	borderWidth: 1,
	// });

	//download the pdf
	const pdfBytes = await pdfDoc.save();

	download(
		pdfBytes,
		`${student.studentNumber} LOP ${effectiveTerm}.pdf`,
		"application/pdf"
	);
}

function drawBody(
	pdfDoc,
	page,
	courses,
	tableMain,
	tableBody,
	currentY,
	heading,
	externalCol,
	umCol,
	textMargin,
	margin,
	font,
	fontBold,
	fontSize,
	drawRadio
) {
	let ext1Max = externalCol * 0.15 - 1;
	let ext21Max = externalCol * 0.72 * 0.2 - 1;
	let ext22Max = externalCol * 0.72 * 0.8 - 1;
	let ext3Max = externalCol * 0.13 - 1;

	let um11Max = umCol * 0.65 * 0.2 - 1;
	let um12Max = umCol * 0.65 * 0.8 - 1;
	let um2Max = umCol * 0.05 - 1;
	let um3Max = umCol * 0.1 - 1;
	let um4Max = umCol * 0.1 - 1;

	let countPage = 1;
	let group = `${countPage}-${currentY}-`;

	const { PDFDocument, rgb } = PDFLib;
	const form = pdfDoc.getForm();

	// Draw heading text
	page.drawText(heading, {
		x: textMargin + 1,
		y: currentY,
		size: fontSize,
		font: fontBold,
		color: rgb(0, 0, 0),
	});

	const textWidth = fontBold.widthOfTextAtSize(heading, fontSize);

	page.drawLine({
		start: { x: textMargin + 1, y: currentY - 2 }, // Adjust Y for the underline's position
		end: { x: textMargin + 1 + textWidth, y: currentY - 2 },
		color: rgb(0, 0, 0),
		thickness: 1, // Thickness of the underline
	});
	currentY -= 15;

	let str = "";

	for (let i = 0; i < courses.length; i++) {
		let course = courses[i];
		if (currentY <= margin + 12) {
			page = pdfDoc.addPage([612, 792]);
			currentY = page.getHeight() - margin;
			countPage++;
			group = `${countPage}-${currentY}-`;
		}
		if (!str.includes(course.schoolCode)) {
			let extSC = course.schoolCode;
			let extSN = course.schoolName;
			str = extSC + " - " + extSN;
			console.log(str);
			page.drawText(str, {
				x: textMargin + tableBody.columnWidths[0] + 1,
				y: currentY,
				size: fontSize,
				font: font,
				color: rgb(0, 0, 0),
			});
			currentY -= tableMain.rowHeight + 5;
		}

		let maxY = currentY;
		let startY = currentY;

		let ext1 = course.term;
		let ext21 = course.exCourseCode;
		let ext22 = course.exCourseTitle;
		let ext3 = course.exGrade;
		let um11 = course.umCourseCode;
		let um12 = course.umCourseTitle;
		let um2 = course.umCredits;
		let um3 = course.umGrade;

		page.drawText(ext1, {
			x: textMargin + 1,
			y: currentY,
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		let textWidth = font.widthOfTextAtSize(ext21, fontSize);

		if (textWidth > ext21Max) {
			let lines = ext21.split(" ");
			for (let j = 0; j < lines.length; j++) {
				page.drawText(lines[j], {
					x: textMargin + tableBody.columnWidths[0] + 1,
					y: currentY,
					size: fontSize,
					font: font,
					color: rgb(0, 0, 0),
				});
				currentY -= tableMain.rowHeight;
			}
			maxY = currentY;
			currentY = startY;
		} else {
			page.drawText(ext21, {
				x: textMargin + tableBody.columnWidths[0] + 1,
				y: currentY,
				size: fontSize,
				font: font,
				color: rgb(0, 0, 0),
			});
		}

		textWidth = font.widthOfTextAtSize(ext22, fontSize);

		if (textWidth > ext22Max) {
			ext22 = ext22.substring(0, 25);
		}

		page.drawText(ext22, {
			x:
				textMargin +
				tableBody.columnWidths[0] +
				tableBody.columnWidths[1] +
				1,
			y: currentY,
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		page.drawText(ext3, {
			x:
				textMargin +
				tableBody.columnWidths[0] +
				tableBody.columnWidths[1] +
				tableBody.columnWidths[2] +
				1,
			y: currentY,
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		textWidth = font.widthOfTextAtSize(um11, fontSize);

		if (textWidth > um11Max) {
			let lines = um11.split(" ");
			for (let j = 0; j < lines.length; j++) {
				page.drawText(lines[j], {
					x:
						textMargin +
						tableBody.columnWidths[0] +
						tableBody.columnWidths[1] +
						tableBody.columnWidths[2] +
						tableBody.columnWidths[3] +
						+1,
					y: currentY,
					size: fontSize,
					font: font,
					color: rgb(0, 0, 0),
				});
				currentY -= tableMain.rowHeight;
			}
			maxY = currentY;
			currentY = startY;
		} else {
			page.drawText(um11, {
				x:
					textMargin +
					tableBody.columnWidths[0] +
					tableBody.columnWidths[1] +
					tableBody.columnWidths[2] +
					tableBody.columnWidths[3] +
					+1,
				y: currentY,
				size: fontSize,
				font: font,
				color: rgb(0, 0, 0),
			});
		}

		textWidth = font.widthOfTextAtSize(um12, fontSize);

		if (textWidth > um12Max) {
			um12 = um12.substring(0, 25);
		}

		page.drawText(um12, {
			x:
				textMargin +
				tableBody.columnWidths[0] +
				tableBody.columnWidths[1] +
				tableBody.columnWidths[2] +
				tableBody.columnWidths[3] +
				tableBody.columnWidths[4] +
				+1,
			y: currentY,
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		page.drawText(um2, {
			x:
				textMargin +
				tableBody.columnWidths[0] +
				tableBody.columnWidths[1] +
				tableBody.columnWidths[2] +
				tableBody.columnWidths[3] +
				tableBody.columnWidths[4] +
				tableBody.columnWidths[5] +
				+1,
			y: currentY,
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		page.drawText(um3, {
			x:
				textMargin +
				tableBody.columnWidths[0] +
				tableBody.columnWidths[1] +
				tableBody.columnWidths[2] +
				tableBody.columnWidths[3] +
				tableBody.columnWidths[4] +
				tableBody.columnWidths[5] +
				tableBody.columnWidths[6] +
				+1,
			y: currentY,
			size: fontSize,
			font: font,
			color: rgb(0, 0, 0),
		});

		if (drawRadio) {
			// Create a radio group

			let radioGroup = form.createRadioGroup(`${group}${currentY}`);

			// Create the first radio button (Approve)
			radioGroup.addOptionToPage("Approve", page, {
				x:
					textMargin +
					tableBody.columnWidths[0] +
					tableBody.columnWidths[1] +
					tableBody.columnWidths[2] +
					tableBody.columnWidths[3] +
					tableBody.columnWidths[4] +
					tableBody.columnWidths[5] +
					tableBody.columnWidths[6] +
					tableBody.columnWidths[7] +
					+5,
				y: currentY - 2,
				width: 10,
				height: 10,
			});

			// Create the second radio button (Deny)
			radioGroup.addOptionToPage("Deny", page, {
				x:
					textMargin +
					tableBody.columnWidths[0] +
					tableBody.columnWidths[1] +
					tableBody.columnWidths[2] +
					tableBody.columnWidths[3] +
					tableBody.columnWidths[4] +
					tableBody.columnWidths[5] +
					tableBody.columnWidths[6] +
					tableBody.columnWidths[7] +
					tableBody.columnWidths[8] +
					+5,
				y: currentY - 2,
				width: 10,
				height: 10,
			});
		}
		currentY = maxY;
		currentY -= tableMain.rowHeight;
	}

	return [currentY, page];
}
