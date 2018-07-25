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
			headings: [
				"18 to 20",
				"21 to 23",
				"24 to 26",
				"30 to 32"
			],
			altData: [
				2,
				4,
				3,
				1
			]
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
			]
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
			]
		},
		{
			title: "Number of people in household",
			data: [
				5,
				5,
				2,
				4,
				4,
				2,
				3,
				4,
				4,
				5,
				5
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
		}
	]


	function ageChart(){
		let data = new google.visualization.DataTable();
		data.addColumn("string", "Age");
		data.addColumn("number", "Count");

		for(var i = 0; i < surveyData[0].headings.length; i++){
			data.addRow([
				surveyData[0].headings[i],
				surveyData[0].altData[i]
			]);
		}

		let options = {
			title: "Age",
			// hAxis: {
			// 	title: "Number"
			// },
			// vAxis:{
			// 	title: "Year"
			// }
		};

		let chart = new google.visualization.BarChart(document.getElementById("ageChartContainer"));
		chart.draw(data, options);
	}

	// const data = new google.visualization.DataTable();
	// data.addColumn("string", "Food");
	// data.addColumn("number", "Count");
	//
	// for(var i = 0; i < studentData.length; i++){
	// 	data.addRow([
	// 		studentData[i].food,
	// 		studentData[i].count
	// 	]);
	// }
	//
	//

	ageChart();
}
