var animals = ["fish","tigers","llamas","cats","tigers","foxes","turtles"];

var found = false;

for(var i=0; i < animals.length; i++){
	if(animals[i] === "tigers"){
		found = true;
		console.log("run");
	}
}

// var sayWhat = animals.indexOf("tigers"); // = 1;
var sayWhat = animals.indexOf("tigers") != -1; // = true

console.log(sayWhat);
