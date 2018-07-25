google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);


function drawChart(){
	console.log("Packages loaded");

	const data = google.visualization.arrayToDataTable([
		["Student", "Module1Mark", "Attendance", "Job", "Overall Grade"],
		["001",87,85,"Designer", 97],
		["002",66,69,"Developer", 70],
		["003",64,75,"Designer", 72],
		["004",70,60,"Front End Developer", 65],
		["005",68,80,"Front End Developer", 77],
		["006",81,80,"Graphic Designer", 90],
		["007",90,75,"Web Developer", 82],
		["008",77,60,"Graphic Designer", 67],
		["009",86,72,"Web Designer", 76]
	]);

	const options = {
		// animation: {
		// 	duration: 1000,
		// 	easing: "inAndOut",
		// 	startup: true,
		// },
		axisTitlesPosition: "out",
		backgroundColor: "white",
		title: "Student Marks, Attendance, Desired Job & Overall Grade",
		subtitle: "From 2013 to 2016",
		hAxis: {
			title: "Marks"
		},
		vAxis:{
			title: "Attendance"
		}
	};

	const chart = new google.visualization.BubbleChart(document.getElementById("chartContainer"));
	chart.draw(data, options);
}
