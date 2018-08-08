google.charts.load("current", {packages: ["gauge"]});
google.charts.setOnLoadCallback(drawCharts);

var second = (new Date().getSeconds()),
	minute = (new Date().getMinutes()),
	hour = (new Date().getHours());

function drawCharts(){
	console.log("Packages loaded");

	var hourData = google.visualization.arrayToDataTable([
		["Label","Value"],
		["Hour",hour]
	]);

	const hourOptions = {
		min: 0,
		max: 24
	}

	const hourChart = new google.visualization.Gauge(document.getElementById("hour"));
	hourChart.draw(hourData, hourOptions);


	var minuteData = google.visualization.arrayToDataTable([
		["Label","Value"],
		["Minute",minute]
	]);

	const minuteOptions = {
		min: 0,
		max: 60
	}

	const minuteChart = new google.visualization.Gauge(document.getElementById("minute"));
	minuteChart.draw(minuteData, minuteOptions);


	var secondData = google.visualization.arrayToDataTable([
		["Label","Value"],
		["Second",second]
	]);

	const secondOptions = {
		min: 0,
		max: 60
	}

	const secondChart = new google.visualization.Gauge(document.getElementById("second"));
	secondChart.draw(secondData, secondOptions);

	setInterval(function(){
		if(second < 59){
			second++;
		}else{
			second = 0;

			if(minute < 50){
				minute++;
			}else{
				minute = 0;

				if(hour < 24){
					hour++;
				}else{
					hour = 1;
				}
			}
		}

		secondData.setValue(0, 1, second);
		secondChart.draw(secondData, secondOptions);

		minuteData.setValue(0, 1, minute);
		minuteChart.draw(minuteData, minuteOptions);

		hourData.setValue(0, 1, hour);
		hourChart.draw(hourData, hourOptions);
	}, 1000);
}
