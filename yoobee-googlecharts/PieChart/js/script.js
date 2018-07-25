google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);


function drawChart(){
	console.log("Packages loaded");

	const studentData = [
		{
			food: "Cake",
			count: 6
		},
		{
			food: "Pie",
			count: 5
		},
		{
			food: "Pi",
			count: Math.PI
		}
	]

	const data = new google.visualization.DataTable();
	data.addColumn("string", "Food");
	data.addColumn("number", "Count");

	for(var i = 0; i < studentData.length; i++){
		data.addRow([
			studentData[i].food,
			studentData[i].count
		]);
	}

	const options = {
		// animation: {
		// 	duration: 1000,
		// 	easing: "inAndOut",
		// 	startup: true,
		// },
		// axisTitlesPosition: "out",
		// backgroundColor: "white",
		title: "Cake vs Pies",
		// subtitle: "From 2013 to 2016",
		// hAxis: {
		// 	title: "Number"
		// },
		// vAxis:{
		// 	title: "Year"
		// }
	};

	const chart = new google.visualization.PieChart(document.getElementById("chartContainer"));
	chart.draw(data, options);
}
