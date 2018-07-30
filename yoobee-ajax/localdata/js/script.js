// var data = [
// 	{
// 		name: "person1"
// 	},
// 	{
// 		name: "person2"
// 	}
// ];
//
// console.log(data);
//
// var jsonData = [
// 	{
// 		"name": "person1"
// 	},
// 	{
// 		"name": "person2"
// 	}
// ];
//
// console.log(jsonData);
//
// data = JSON.stringify(data);
//
// console.log(data);
//
// var newUser = {
// 	name: "John Doe",
// 	username: "johndoe",
// 	password: "securepass",
// 	email: "johndoe@emailsys.com"
// };
//
// console.log(newUser);
//
// newUser = JSON.stringify(newUser);
//
// console.log(newUser);
//
// newUser = JSON.parse(newUser);
//
// console.log(newUser);

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
// 	// xhttp.readyState
// 	// 	0- "Request not initialised",
// 	// 	1- "Server connection established",
// 	// 	2- "Request recieved",
// 	// 	3- "Processing the request",
// 	// 	4- "Request finished, response ready"
// 	// xhttp.status (https://en.wikipedia.org/wiki/list_of_HTTP_status_codes)
// 	// 	200- OK
// 	// 	403- Forbidden / need login
// 	// 	404- Not found
//
// 	if(this.status == 403){
// 		console.log("XHTTP Request: 403 - Forbidden");
// 		return;
// 	}else if(this.status == 404){
// 		console.log("XHTTP Request: 404 - Not Found");
// 		return;
// 	}
//
// 	if(this.status == 200 && this.readyState == 4){
// 		console.log("XHTTP Request: 200 - OK");
// 		console.log(this.responseText);
// 		var data = JSON.parse(this.responseText);
// 		console.log(data);
// 	}
// }
// xhttp.open("GET", "data/data.json", true);
// xhttp.send();
//
// console.log(xhttp);

// $.ajax({
// 	type: "GET",
// 	url: "data/data.json",
// 	dataType: "json",
// 	success: function(data){
// 		console.log(data);
// 	},
// 	error: function(err){
// 		console.log(err);
// 	}
// })

google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	console.log("Packages loaded");

	$.ajax({
		type: "GET",
		url: "data/colorbygender.json",
		dataType: "json",
		success: function(data){
			console.log("Data loaded");

			const dataTable = new google.visualization.DataTable();
			dataTable.addColumn("string", "Gender");

			var colorData = [];
			var colors = [];
			var maleCounts = [];
			var femaleCounts = [];

			for(var i = 0; i < data.length; i++){
				colorData.push(data[i].fave_color);
			}

			colors.push(colorData[0])

			colorData.forEach(function(currentValue,index){
				var exists = false;
				for(var i = 0; i < colors.length; i++){
					if(colors[i] == currentValue){
						exists = true;
						break;
					}
				}

				if(!exists){
					colors.push(currentValue);
				}
			});

			for(var i = 0; i < colors.length; i++){
				dataTable.addColumn("number", colors[i])

				maleCounts.push(0);
				femaleCounts.push(0);
			}

			data.forEach(function(currentValue,index){
				for(var i = 0; i < colors.length; i++){
					if(colors[i] == currentValue.fave_color){
						if(currentValue.gender == "Male"){
							maleCounts[i]++;
						}else{
							femaleCounts[i]++;
						}

						break;
					}
				}
			});

			var maleRow = ["Male"];
			var femaleRow = ["Female"];

			for(var i = 0; i < maleCounts.length; i++){
				maleRow.push(maleCounts[i]);
				femaleRow.push(femaleCounts[i]);
			}

			dataTable.addRow(maleRow);
			dataTable.addRow(femaleRow);

			const options = {
				animation: {
					duration: 1000,
					easing: "inAndOut",
					startup: true,
				},
				axisTitlesPosition: "out",
				backgroundColor: "white",
				colors: [
					"orange",
					"purple",
					"#b784a7",
					"maroon",
					"violet",
					"goldenrod",
					"blue",
					"teal",
					"red",
					"#f0f",
					"green",
					"crimson",
					"indigo",
					"pink",
					"#c89",
					"aquamarine",
					"#40e0d0",
					"khaki",
					"yellow"
				],
				title: "Favourite Color by Gender",
				hAxis: {
					title: "Colours",
					ticks: [16,18,20,22,24,26,28,30,32,34,36,38,40]
				},
				vAxis:{
					title: "Gender"
				}
			};

			const chart = new google.visualization.BarChart(document.getElementById("chartContainer"));
			chart.draw(dataTable, options);
		},
		error: function(err){

		}
	})
}
