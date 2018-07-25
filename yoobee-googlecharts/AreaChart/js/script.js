google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);


function drawChart(){
	console.log("Packages loaded");

	const data = google.visualization.arrayToDataTable([
		["Year","Births","Deaths","Marriages"],
		["2013",58719,29568,19237],
		["2014",57243,31062,20125],
		["2015",61038,31608,19947],
		["2016",59430,31179,20235]
	]);

	const options = {
		// animation: {
		// 	duration: 1000,
		// 	easing: "inAndOut",
		// 	startup: true,
		// },
		axisTitlesPosition: "out",
		backgroundColor: "white",
		title: "Births, Deaths and Marriages from New Zealand",
		subtitle: "From 2013 to 2016",
		hAxis: {
			title: "Year"
		},
		vAxis:{
			title: "Number"
		}
	};

	const chart = new google.visualization.AreaChart(document.getElementById("chartContainer"));
	chart.draw(data, options);
}
