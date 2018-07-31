google.charts.load("current", {packages: ["corechart", "gauge"]});
google.charts.setOnLoadCallback(function(){
	loadData();
	setInterval(loadData, 2500)
});

function loadData(){
	$.ajax({
		type: "GET",
		url: "https://dweet.io:443/get/dweets/for/bd1c5e00-832d-11e8-9a81-41f3940209b0",
		dataType: "json",
		success: function(data){
			console.log(data);

			if(data.this != "failed"){
				drawChart(data);
			}
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

function drawChart(data){
	var lineData = new google.visualization.DataTable();
	lineData.addColumn("number", "Count");
	lineData.addColumn("number", "Humidity");
	lineData.addColumn("number", "Temperature");

	for(var i = 0; i < data.with.length; i++){
		lineData.addRow([
			data.with[i].content.Count,
			data.with[i].content.Humidity,
			data.with[i].content.Temperature
		]);
	}

	const lineOptions = {
		title: "Humidity and Temperature over time",
		hAxis: {
			title: "Count"
		},
		vAxis:{
			title: "",
			ticks: [0,25,50,75,100]
		}
	};

	const lineChart = new google.visualization.LineChart(document.getElementById("lineContainer"));
	lineChart.draw(lineData, lineOptions);

	var gaugeData = new google.visualization.DataTable();
	gaugeData.addColumn("number", "Humidity");
	gaugeData.addColumn("number", "Temp");

	gaugeData.addRow([
		data.with[0].content.Humidity,
		data.with[0].content.Temperature
	]);

	const gaugeOptions = {
		// greenFrom: 0,
		// greenTo: 60,
		majorTicks: [
			"0",
			"",
			"20",
			"",
			"40",
			"",
			"60",
			"",
			"80",
			"",
			"100"
		],
		minorTicks: 2,
		redFrom: 90,
		redTo: 100,
		yellowFrom: 70,
		yellowTo: 90
	};

	// const chart = new google.visualization.LineChart(document.getElementById("chartContainer"));
	const gaugeChart = new google.visualization.Gauge(document.getElementById("gaugeContainer"));
	gaugeChart.draw(gaugeData, gaugeOptions);
}
