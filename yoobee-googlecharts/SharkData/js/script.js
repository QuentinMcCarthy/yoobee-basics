google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);


function drawChart(){
	console.log("Packages loaded");

	const barData = new google.visualization.DataTable();
	barData.addColumn("string", "Year");
	barData.addColumn("number", "Unprovoked");
	barData.addColumn("number", "Provoked");
	barData.addColumn("number", "Questionable");
	barData.addColumn("number", "Boat-related");
	barData.addColumn("number", "Disaster-related");

	barData.addRow(["2018",47,6,10,1,0]);
	barData.addRow(["2017",109,5,14,5,5]);
	barData.addRow(["2016",100,12,10,8,0]);
	barData.addRow(["2015",113,6,12,11,1]);
	barData.addRow(["2014",92,13,9,11,2]);
	barData.addRow(["2013",105,8,7,2,0]);
	barData.addRow(["2012",99,8,9,7,0]);
	barData.addRow(["2011",100,9,11,7,1]);
	barData.addRow(["2010",83,11,4,3,0]);

	const barOptions = {
		colors: [
			"#ecd9b7",
			"#ffcc99",
			"#99ccff",
			"#cfeecc",
			"#ffffc5"
		],
		hAxis: {
			title: "Shark Incident Count",
			ticks: [0,16,32,48,64,80,96,112,128,144]
		},
		isStacked: true,
		title: "Amount of Shark Incidents by Type per Year since 2010",
		vAxis: {
			title: "Year"
		}
	};

	const barChart = new google.visualization.BarChart(document.getElementById("barChartContainer"));
	barChart.draw(barData, barOptions);

	const pieData = new google.visualization.DataTable();
	pieData.addColumn("string", "Types")
	pieData.addColumn("number", "Unprovoked");
	pieData.addColumn("number", "Provoked");
	pieData.addColumn("number", "Questionable");
	pieData.addColumn("number", "Boat-related");
	pieData.addColumn("number", "Disaster-related");

	pieData.addRow(["Unprovoked","Provoked","Questionable","Boat-related","Disaster-related"])

	pieData.addRow([47,6,10,1,0]);
	pieData.addRow([109,5,14,5,5]);
	pieData.addRow([100,12,10,8,0]);
	pieData.addRow([113,6,12,11,1]);
	pieData.addRow([92,13,9,11,2]);
	pieData.addRow([105,8,7,2,0]);
	pieData.addRow([99,8,9,7,0]);
	pieData.addRow([100,9,11,7,1]);
	pieData.addRow([83,11,4,3,0]);

	const pieOptions = {
		colors: [
			"#ecd9b7",
			"#ffcc99",
			"#99ccff",
			"#cfeecc",
			"#ffffc5"
		],
		title: "Distribution of Shark Incident Types"
	}

	const pieChart = new google.visualization.PieChart(document.getElementById("pieChartContainer"));
	pieChart.draw(pieData, pieOptions);
}
