function welcomeMessage(){
	var today = new Date();
	var hourNow = today.getHours();
	var greeting;

	if(hourNow>18){
		greeting = "Good evening";
	}
	else if(hourNow>12){
		greeting = "Good afternoon";
	}
	else if(hourNow>0){
		greeting = "Good morning";
	}
	else{
		greeting = "Welcome";
	}

	console.log("'"+today+"' set '"+hourNow+"' set '"+greeting+"'")

	document.write(greeting);
}

function arrayThings(){
	var o = $("h1")
	var array = [
		"How",
		[
			"Deep",
			[
				"Does",
				[
					"This",
					[
						"Rabbit",
						[
							"Hole",
							[
								"Go?"
							]
						]
					]
				]
			]
		]
	];

	console.log(array);
	console.log(array[1]);
	console.log(array[1][1]);
	console.log(array[1][1][1]);
	console.log(array[1][1][1][1]);
	console.log(array[1][1][1][1][1]);
	console.log(array[1][1][1][1][1][1]);
	console.log(array[1][1][1][1][1][1][1]);
	console.dir(Array);

	console.log(array.length);
}

welcomeMessage();
arrayThings();
