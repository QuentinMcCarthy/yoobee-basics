/*
.knob call:
$("").knob({
	"min":0,
	"max":100,
	"step":1,
	"angleOffset":0,
	"angleArc":360,
	"stopper":true,
	"readOnly":false,
	"rotation":clockwise,
	"cursor":false,
	"thickness":.35,
	"displayInput":true,
	"displayPrevious":false,
	"release":function(){},
	"change":function(){},
	"draw":function(){},
	"cancel":function(){},
	"format":function(){}
})
*/

$(document).ready(function(){
	// Create audio variable
	var audio;

	// Function to create new audio
	function createAudio(id){
		// Use audio constructor in audio var
		audio = new Audio("audio/"+id+".mp3");
		console.dir(audio);
		play();
	}

	// Play the music
	function play(){
		audio.play();
	}

	// Pause the music
	function pause(){
		audio.pause();
	}

	// Function to create the knobs on the page
	function createKnobs(){
		// Audio volume knob
		$("#audioVol").knob({
			"angleOffset":-90,
			"angleArc":180,
			"displayInput":false,
			"displayPrevious":true,
			"width":"250"
		});

		// Audio progress knob
		$("#audioProg").knob({
			"thickness":.2,
			"width":"150"
		})
	}

	// Call functions
	createKnobs();
});
