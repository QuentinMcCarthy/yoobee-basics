google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(ajaxLoad);

function ajaxLoad() {
	var key;

	$.ajax({
		type: "GET",
		url: "config.json",
		dataType: "json",
		success: function(data){
			key = data[0].api_key;

			getData(1, 100, 0, 2000);
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});

	function getData(minAge,maxAge,minIncome,maxIncome){
		$.ajax({
			type: "GET",
			url: "https://my.api.mockaroo.com/restdata.json?min_age="+minAge+"&max_age="+maxAge+"&min_income="+minIncome+"&max_income="+maxIncome+"&key="+key,
			dataType: "json",
			success: function(data){
				console.log(data);

				drawChart(data);
			},
			error: function(err){
				console.log("Error "+err.status);
				console.log(err);
			}
		});
	}

	$("#filterForm").submit(function(){
		event.preventDefault();

		var minAge = $("input[name='minAge']").val();
		var maxAge = $("input[name='maxAge']").val();

		var minIncome = $("input[name='minIncome']").val();
		var maxIncome = $("input[name='maxIncome']").val();

		getData(minAge, maxAge, minIncome, maxIncome);
	});

	function drawChart(data){
		var parsedData = new google.visualization.DataTable();
		parsedData.addColumn("string", "ID");
		parsedData.addColumn("number", "Age");
		parsedData.addColumn("number", "Income");
		parsedData.addColumn("string", "Gender");
		parsedData.addColumn("number", "BubbleSize");

		for(var i = 0; i < data.length; i++){
			parsedData.addRow([
				data[i].id.stringify,
				data[i].age,
				data[i].income,
				data[i].gender,
				0.1
			]);
		}

		const options = {
			title: "Income by Age & Gender",
			hAxis: {
				title: "Age"
			},
			vAxis:{
				title: "Income"
			}
		};

		const chart = new google.visualization.BubbleChart(document.getElementById("chartContainer"));
		chart.draw(parsedData, options);
	}
}
