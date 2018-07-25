google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	console.log("Packages loaded");

	const surveyData = [
		{
			title: "Age",
			data: [
				"21 to 23",
				"21 to 23",
				"21 to 23",
				"18 to 20",
				"24 to 26",
				"24 to 26",
				"18 to 20",
				"18 to 20",
				"30 to 32",
				"24 to 26",
				"21 to 23"
			],
			headings: ["18 to 20","21 to 23","24 to 26","30 to 32"],
			altData: [2,4,3,1]
		},
		{
			title: "Gender",
			data: [
				"Male",
				"Female",
				"Female",
				"Male",
				"Female",
				"Male",
				"Female",
				"Female",
				"Female",
				"Non-binary",
				"Male"
			],
			headings: ["Male","Female","Non-binary"],
			altData: [4,6,1]
		},
		{
			title: "Visited Countries",
			data: [
				"New Zealand",
				"0",
				"Fiji, Dubai, Kenya, Tanzania",
				"Australia, New Zealand",
				"United States Of America, Japan , New Zealand",
				"New Zealand, Australia, England, America, France, Italy, Netherlands, Czech Republic, Japan, China, Malaysia, Germany, Poland, Switzerland, Hungary, Austria, Slovakia, Fiji, Hong Kong",
				"Aotearoa, Australia, Thailand, Laos, Vietnam, Portugal, Spain, France, Italy, Croatia, Slovenia, Austria, Switzerland, England, Whales, Scotland, Ireland, Hong Kong, Germany, Belgium, The Netherlands",
				"India",
				"Australia, Thailand, Bali, New Zealand",
				"Aotearoa,Australia",
				"South Africa, Zimbabwe, fiji, Australia, United States, Samoa, Dubai"
			],
			headings: [
				"Fiji",
				"Dubai",
				"Kenya",
				"Tanzania",
				"Australia",
				"New Zealand / Aotearoa",
				"USA / America",
				"Japan",
				"England",
				"France",
				"Italy",
				"Netherlands",
				"Czech Republic",
				"China",
				"Malaysia",
				"Germany",
				"Poland",
				"Switzerland",
				"Hungary",
				"Austria",
				"Slovakia",
				"Hong Kong",
				"Thailand",
				"Laos",
				"Vietnam",
				"Portugal",
				"Spain",
				"Croatia",
				"Slovenia",
				"Whales",
				"Scotland",
				"Ireland",
				"Belgium",
				"India",
				"Bali",
				"South Africa",
				"Zimbabwe",
				"Samoa"
			],
			altData: [3,2,1,1,6,7,2,2,2,2,2,2,1,1,1,2,1,2,1,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		},
		{
			title: "Number of people in household",
			data: [5,5,2,4,4,2,3,4,4,5,5],
			headings: ["2","3","4","5"],
			altData: [2,1,4,4]
		},
		{
			title: "Occupation",
			data: [
				"Student",
				"Retail",
				"Student",
				"N/A",
				"Student",
				"Tutor",
				"Student",
				"Student",
				"Student",
				"Student",
				"Student"
			],
			headings: ["Student","Retail","Tutor"],
			altData: [9,1,1]
		},
		{
			title: "Cake v Pie",
			data: [
				"Cake",
				"Pie",
				"Pie",
				"Cake",
				"Cake",
				"Cake",
				"Cake",
				"Cake",
				"Pie",
				"Pie",
				"Pie"
			],
			headings: ["Cake","Pie"],
			altData: [6,5]
		},
		{
			title: "Favourite Animal",
			data: [
				"Monkey",
				"Meercat",
				"Dog",
				"Fennec Fox",
				"Dog",
				"Cat",
				"Pidgeon",
				"Rabbit",
				"Horse",
				"Sun bear",
				"Meerkat"
			],
			headings: [
				"Monkey",
				"Meerkat",
				"Dog",
				"Fennec Fox",
				"Cat",
				"Pidgeon",
				"Rabbit",
				"Horse",
				"Sun Bear"
			],
			altData: [1,2,2,1,1,1,1,1,1]
		},
		{
			title: "Favourite Colour",
			data: [
				"Orange",
				"Blue",
				"Blue",
				"Blue",
				"Blue",
				"Red",
				"yellow",
				"Pink",
				"Black",
				"Pink",
				"Blue"
			],
			headings: [
				"Orange",
				"Blue",
				"Red",
				"Yellow",
				"Pink",
				"Black"
			],
			altData: [1,5,1,1,2,1]
		},
		{
			title: "Type of Shark you'd be",
			data: [
				"Great White",
				"Nice one",
				"Cookiecutter Shark",
				"Megalodon",
				"Blue shark",
				"Hamerhead Shark",
				"Wobbegong",
				"Angelshark",
				"Great white",
				"Goblin",
				"Hammerhead"
			],
			headings: [
				"Great White",
				"Nice One",
				"Cookiecutter",
				"Megalodon",
				"Blue",
				"Hammerhead",
				"Wobbegong",
				"Angelshark",
				"Goblin"
			],
			altData: [2,1,1,1,1,2,1,1,1]
		},
		{
			title: "Favourite Coding Language",
			data: [
				"CSS",
				"CSS",
				"JavaScript",
				"JavaScript",
				"CSS",
				"PHP",
				"JavaScript",
				"CSS",
				"CSS",
				"JavaScript",
				"JavaScript"
			],
			headings: ["CSS","JavaScript","PHP"],
			altData: [5,5,1]
		},
		{
			title: "Favourite Ice Cream",
			data: [
				"Cookies & Cream",
				"Mango",
				"Goody Goody Gum Drops",
				"Chocolate",
				"Vanilla",
				"goody goody gumdrops",
				"Hazlenut",
				"Sea salt caramel",
				"Yum",
				"Peanut butter",
				"Chocolate"
			],
			headings: [
				"Cookies & Cream",
				"Mango",
				"Goody Goody Gumdrops",
				"Chocolate",
				"Vanilla",
				"Hazelnut",
				"Sea Salt Caramel",
				"Yum",
				"Peanut Butter"
			],
			altData: [1,1,2,2,1,1,1,1,1]
		},
		{
			title: "Favourite NZ Travel Location",
			data: [
				"Tekapo",
				"Bay of Islands",
				"Picton",
				"Taupo",
				"Nelson",
				"coromandel",
				"Tongariro National Park",
				"Paekakariki",
				"Nelson",
				"Northland",
				"Mount Maunganui"
			],
			headings: [
				"Tekapo",
				"Bay of Islands",
				"Picton",
				"Taupo",
				"Nelson",
				"Coromandel",
				"Tongariro National Park",
				"Paekakariki",
				"Northland",
				"Mount Maunganui"
			],
			altData: [1,1,1,1,2,1,1,1,1,1]
		},
		{
			title: "Highest Education",
			data: [
				"Level 6 Diploma",
				"Level 6 Diploma",
				"Level 5 Diploma",
				"Level 5 Diploma",
				"Level 6 Diploma",
				"Bachelor Degree",
				"Level 5 Diploma",
				"Level 5 Diploma",
				"Level 5 Diploma",
				"Level 5 Diploma",
				"NCEA Level 3"
			],
			headings: [
				"Level 6 Diploma",
				"Level 5 Diploma",
				"Bachelor Degree",
				"NCEA Level 3"
			],
			altData: [3,6,1,1]
		},
		{
			title: "Desired Career",
			data: [
				"Graphic designer",
				"Developer",
				"Front End Devolopement",
				"Web Programmer (HTML,CSS,JS)",
				"A front-end web developer",
				"Freelance UX/UI Designer",
				"Front end developer",
				"Front-end Developer",
				"Make pretty things",
				"Front-end development",
				"Website Developer"
			],
			headings: [
				"Graphic Designer",
				"Developer",
				"Front End Developer",
				"Web Programmer (HTML,CSS,JS)",
				"Freelance UX/UI Designer",
				"Make pretty things",
				"Website Developer"
			],
			altData: [1,1,5,1,1,1,1]
		}
	]

	function newChart(chartData){
		const data = new google.visualization.DataTable();
		data.addColumn(chartData.col1.type, chartData.col1.name);
		data.addColumn(chartData.col2.type, chartData.col2.name);

		for(var i = 0; i < surveyData[chartData.surveyIndex].headings.length; i++){
			data.addRow([
				surveyData[chartData.surveyIndex].headings[i],
				surveyData[chartData.surveyIndex].altData[i]
			]);
		}

		function createChart(){
			var chart;

			switch(chartData.type){
				case "bar":
					chart = new google.visualization.BarChart(document.getElementById(chartData.containerId));

					break;
				case "pie":
					chart = new google.visualization.PieChart(document.getElementById(chartData.containerId));

					break;
			}

			return chart;
		}

		createChart().draw(data, chartData.options);
	}

	function ageChart(){
		newChart({
			col1: {
				type: "string",
				name: "Age"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 0,
			options: {
				title: "Age of Students",
				vAxis: {
					title: "Age"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "ageChartContainer"
		});
	}

	function genderChart(){
		newChart({
			col1: {
				type: "string",
				name: "Gender"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 1,
			options: {
				title: "Gender of Students",
				hAxis: {
					title: "Gender"
				},
				vAxis: {
					title: "Count"
				}
			},
			type: "pie",
			containerId: "genderChartContainer"
		});
	}

	function countryChart(){
		newChart({
			col1: {
				type: "string",
				name: "Country"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 2,
			options: {
				title: "Desired Countries",
				hAxis: {
					title: "Count",
					ticks: [0,1,2,3,4,5,6,7]
				},
				vAxis: {
					title: "Country"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "countryChartContainer"
		});
	}

	function householdChart(){
		newChart({
			col1: {
				type: "string",
				name: "Headings"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 3,
			options: {
				title: "Number of People in Students' Household",
				hAxis: {
					title: "Count"
				},
				vAxis: {
					title: "Headings"
				}
			},
			type: "pie",
			containerId: "householdChartContainer"
		});
	}

	function occupationChart(){
		newChart({
			col1: {
				type: "string",
				name: "Occupation"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 4,
			options: {
				title: "Number of Students in Occupation",
				hAxis: {
					title: "Number"
				},
				vAxis: {
					title: "Occupation"
				}
			},
			type: "pie",
			containerId: "occupationChartContainer"
		});
	}

	function foodChart(){
		newChart({
			col1: {
				type: "string",
				name: "Food"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 5,
			options: {
				title: "Student Preference of Cake v Pie",
				hAxis: {
					title: "Number"
				},
				vAxis: {
					title: "Food"
				}
			},
			type: "pie",
			containerId: "foodChartContainer"
		});
	}

	function animalChart(){
		newChart({
			col1: {
				type: "string",
				name: "Animal"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 6,
			options: {
				title: "Students Favourite Animals",
				hAxis: {
					title: "Count",
					ticks: [0,1,2]
				},
				vAxis: {
					title: "Animal"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "animalChartContainer"
		});
	}

	function colourChart(){
		newChart({
			col1: {
				type: "string",
				name: "Colour"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 7,
			options: {
				title: "Students Favourite Colours",
				hAxis: {
					title: "Count",
					ticks: [0,1,2,3,4,5]
				},
				vAxis: {
					title: "Colour"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "colourChartContainer"
		});
	}

	function sharkChart(){
		newChart({
			col1: {
				type: "string",
				name: "Shark"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 8,
			options: {
				title: "Students Shark-types",
				hAxis: {
					title: "Count",
					ticks: [0,1,2]
				},
				vAxis: {
					title: "Colour"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "sharkChartContainer"
		});
	}

	function codingChart(){
		newChart({
			col1: {
				type: "string",
				name: "Language"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 9,
			options: {
				title: "Students Favourite Coding Language",
				hAxis: {
					title: "Count"
				},
				vAxis: {
					title: "Language"
				}
			},
			type: "pie",
			containerId: "codingChartContainer"
		});
	}

	function dessertChart(){
		newChart({
			col1: {
				type: "string",
				name: "Ice Cream"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 10,
			options: {
				title: "Students Favourite Ice Cream",
				hAxis: {
					title: "Count",
					ticks: [0,1,2]
				},
				vAxis: {
					title: "Ice Cream"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "dessertChartContainer"
		});
	}

	function locationChart(){
		newChart({
			col1: {
				type: "string",
				name: "Location"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 11,
			options: {
				title: "Favourite Travel Location",
				hAxis: {
					title: "Count",
					ticks: [0,1,2]
				},
				vAxis: {
					title: "Location"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "locationChartContainer"
		});
	}

	function educationChart(){
		newChart({
			col1: {
				type: "string",
				name: "Highest Education"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 12,
			options: {
				title: "Highest Education",
				hAxis: {
					title: "Count"
				},
				vAxis: {
					title: "Education"
				}
			},
			type: "pie",
			containerId: "educationChartContainer"
		});
	}

	function careerChart(){
		newChart({
			col1: {
				type: "string",
				name: "Desired Career"
			},
			col2: {
				type: "number",
				name: "Count"
			},
			surveyIndex: 13,
			options: {
				title: "Desired Career",
				hAxis: {
					title: "Count",
					ticks: [0,1,2,3,4,5]
				},
				vAxis: {
					title: "Career"
				},
				legend: {
					position: "none"
				}
			},
			type: "bar",
			containerId: "careerChartContainer"
		});
	}

	ageChart();
	genderChart();
	countryChart();
	householdChart();
	occupationChart();
	foodChart();
	animalChart();
	colourChart();
	sharkChart();
	codingChart();
	dessertChart();
	locationChart();
	educationChart();
	careerChart();
}
