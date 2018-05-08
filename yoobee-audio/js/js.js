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
		trackProgress();
	}

	// Play the music
	function play(){
		audio.play();
		$("#playButton").addClass("activeControl");
		$("#pauseButton").removeClass("activeControl");
	}

	// Pause the music
	function pause(){
		audio.pause();
		$("#playButton").removeClass("activeControl");
		$("#pauseButton").addClass("activeControl");
	}

	function setVol(vol){
		if(typeof audio != "undefined"){
			audio.volume = vol;
		}
	}

	function trackProgress(){
		// console.log(audio.currentTime);
		// console.log(audio.duration);

		$("#audioProg")
			.trigger("configure",{"max":audio.duration})
			.val(audio.currentTime)
			.trigger("change");

		var currentArc = ((audio.currentTime / audio.duration)*360)-5

		if(currentArc<0){
			currentArc=0
		}

		$("#audioProg-style")
			.trigger(
				"configure",
				{
					"angleArc":currentArc,
					"max":(audio.currentTime)
				}
			)
			.val(audio.currentTime)
			.trigger("change");

		$("#audioProgLabel").text(Math.round(audio.currentTime).toString());

		setTimeout(trackProgress,100);
	}

	// Function to create the knobs on the page
	function createKnobs(){
		// Audio volume knob
		$("#audioVol").knob({
			"angleOffset":-90,
			"angleArc":180,
			"displayInput":false,
			"displayPrevious":true,
			"width":"250",
			"min":0,
			"max":1,
			"step":0.01,
			"draw":function(){ setVol(this.v)}
		});

		// Audio progress knob
		$("#audioProg").knob({
			"thickness":.2,
			"width":"150",
			"readOnly":false,
			"cursor":"2.5",
			"draw":function(){
				$(this.i).css("font-size","1.5em")
			}
		});

		$("#audioProg-style").knob({
			"thickness":.2,
			"width":"150",
			"readOnly":true,
			"displayInput":false,
			"angleArc":0
		});

		setTimeout(function(){createAudio("jackle_app__fortune_cookie")}, 1000)
	}

	$("#playButton").click(function(){
		play();
	});

	$("#pauseButton").click(function(){
		pause();
	});

	// Call functions
	createKnobs();
});
