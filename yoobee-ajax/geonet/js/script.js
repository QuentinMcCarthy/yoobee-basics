// google.charts.load("current", {packages: ["corechart", "gauge", "geochart"]});
// google.charts.setOnLoadCallback(function(){
// 	loadData();
// 	// setInterval(loadData, 60000)
// });
//
// function loadData(){
// 	$.ajax({
// 		type: "GET",
// 		url: "https://api.geonet.org.nz/intensity?type=measured",
// 		dataType: "json",
// 		success: function(data){
// 			console.log(data);
//
// 			drawChart(data);
// 		},
// 		error: function(err){
// 			console.log("Error "+err.status);
// 			console.log(err);
// 		}
// 	});
// }
//
// function drawChart(data){
// 	const geoData = new google.visualization.DataTable();
// 	geoData.addColumn("number", "Latitude");
// 	geoData.addColumn("number", "Longitude");
// 	geoData.addColumn("number", "MMI");
//
// 	for(var i = 0; i < data.features.length; i++){
// 		geoData.addRow([
// 			data.features[i].geometry.coordinates[0],	// Latitude
// 			data.features[i].geometry.coordinates[1],	// Longitude
// 			data.features[i].properties.mmi
// 		]);
// 	}
//
// 	console.log(geoData);
//
// 	const geoOptions = {
// 		region: "NZ",
// 		resolution: "provinces"
// 	}
//
// 	const geoChart = new google.visualization.GeoChart(document.getElementById("geoContainer"));
// 	geoChart.draw(geoData, geoOptions);
// }

$(document).ready(function(){
	google.charts.load("current", {packages: ["corechart"]});
	google.charts.setOnLoadCallback(loadGeoData);

	$.ajax({
		type: "GET",
		url: "https://api.geonet.org.nz/news/geonet",
		dataType: "json",
		success: function(data){
			console.log(data);

			const newsContainer = $("#newsData");

			for(var i = 0; i < data.feed.length; i++){
				$(newsContainer).append(
					$("<div class='newsData'>").append(
						$("<h4>").append(
							$("<a href='"+data.feed[i].link+"'>")
								.text(data.feed[i].title)
						)
					)
				);
			}
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});

	function loadGeoData(){
		console.log("GCharts Packages Loaded");


	}
});
