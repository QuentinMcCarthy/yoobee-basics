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
	function createAudio(id, first){
		// Use audio constructor in audio var
		audio = new Audio("audio/"+id+".mp3");
		console.dir(audio);
		play();

		// Only run this function if 'first' is true
		if(first){
			trackProgress();
		}
	}

	// Play the audio
	function play(){
		audio.play();
		$("#playButton").addClass("activeControl");
		$("#pauseButton").removeClass("activeControl");
	}

	// Pause the audio
	function pause(){
		audio.pause();
		$("#playButton").removeClass("activeControl");
		$("#pauseButton").addClass("activeControl");
	}

	// Set the volume of the audio
	function setVol(vol){
		if(typeof audio != "undefined"){
			audio.volume = vol;
		}
	}

	function trackProgress(){
		// console.log(audio.currentTime);
		// console.log(audio.duration);

		// Set the audioProg knob's max and value to duration
		// and current time of audio
		$("#audioProg")
			.trigger("configure",{"max":audio.duration})
			.val(audio.currentTime)
			.trigger("change");

		// Create a temporary variable
		// Initialise variable with a 360deg percentage of
		// the audio's current time verse its duration
		var currentArc = ((audio.currentTime / audio.duration)*360)-5

		// If the arc is less than 0, set it to 0
		if(currentArc<0){
			currentArc=0
		}

		// Set the audioProgStyle knob's arc and max to
		// the currentTime with a delay
		$("#audioProgStyle")
			.trigger(
				"configure",
				{
					"angleArc":currentArc,
					"max":(audio.currentTime)
				}
			)
			.val(audio.currentTime)
			.trigger("change");

		// Set the label element to show the audio's currentTime
		// $("#audioProgLabel").text(Math.round(audio.currentTime).toString());

		if(audio.currentTime>=audio.duration){
			console.log("Yes");
		}

		// Repeat this function once every tenth of a second
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

		// Audio progress secondary knob
		$("#audioProgStyle").knob({
			"thickness":.2,
			"width":"150",
			"readOnly":true,
			"displayInput":false,
			"angleArc":0
		});

		// Play the audio after a second
		// This allows the knobs to initialise beforehand
		// 'true' argument specifies this is the first run
		setTimeout(function(){createAudio("jackle_app__fortune_cookie", true)}, 1000)
	}

	// Click event for the play button
	$("#playButton").click(function(){
		play();
	});

	// Click event for the pause button
	$("#pauseButton").click(function(){
		pause();
	});

	// Call functions
	createKnobs();
});
