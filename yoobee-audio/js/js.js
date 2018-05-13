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

	// Create variable for interval
	var tickTen;

	// Create variable to keep track of the current audio
	var currentTrack = 0;

	// Create variable to keep track of how much
	// Audio is listed
	var maxTracks = 3;

	// Function to create new audio
	function createAudio(hosted,id){
		// If statement declares if given id is a file name
		// Or a URL
		if(hosted){
			// Use audio constructor in audio var
			audio = new Audio(id);
		}
		else{
			// Use audio constructor in audio var
			audio = new Audio("audio/"+id+".mp3");
		}

		// Play the created audio
		// play();

		// Pause the created audio
		pause();

		// Set the volume of the created audio
		setVol($("#audioVol").v);

		// Keep track of the current audio track
		// currentTrack++

		// Run trackProgress every tenth of a second
		tickTen = setInterval(trackProgress, 100);
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
			if(typeof vol != "undefined"){
				audio.volume = vol;
			}
		}
	}

	function skipBackward(){
		if(currentTrack>1){
			audio.pause();

			currentTrack--;

			checkCurrentTrack();

			if(currentTrack<maxTracks){
				$("#skipButton").removeClass("disabled");
			}

			if(currentTrack==1){
				$("#backButton").addClass("disabled");
			}
		}
	}

	function skipForward(){
		if(currentTrack<maxTracks){
			audio.pause();

			currentTrack++

			checkCurrentTrack();

			if(currentTrack>1){
				$("#backButton").removeClass("disabled");
			}

			if(currentTrack==maxTracks){
				$("#skipButton").addClass("disabled");
			}
		}
	}

	function checkCurrentTrack(){
		// Play the next audio if the current audio is X
		if(currentTrack==2){
			// Play new audio
			setTimeout(function(){
				// Locally hosted
				// createAudio(false,"project_yi_(vicetone_remix)")

				// Dropbox hosted
				createAudio(true,"https://dl.dropboxusercontent.com/s/w9xs464amubfrkg/project_yi_%28vicetone_remix%29.mp3")
			}, 1000);
		}
		else if(currentTrack==3){
			// Play new audio
			setTimeout(function(){
				// Locally hosted
				// createAudio(false,"edge_of_infinity_(minnesota_remix)")

				// Dropbox hosted
				createAudio(true,"https://dl.dropboxusercontent.com/s/agya40507f4s3g5/edge_of_infinity_%28minnesota_remix%29.mp3")
			})
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

		// If the audio is finished
		if(audio.currentTime>=audio.duration){
			clearInterval(tickTen);

			// New track
			currentTrack++

			checkCurrentTrack();
		}
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
			"readOnly":true,
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
		setTimeout(function(){
			// Locally hosted
			// createAudio(false,"jackle_app__fortune_cookie")

			// New track
			currentTrack++

			// Dropbox hosted
			createAudio(true,"https://dl.dropboxusercontent.com/s/roy5ilvpiaoqav3/jackle_app__fortune_cookie.mp3")
		}, 1000)
	}

	// Click event for the play button
	$("#playButton").click(function(){
		play();
	});

	// Click event for the pause button
	$("#pauseButton").click(function(){
		pause();
	});

	$("#backButton").click(function(){
		skipBackward();
	});

	$("#skipButton").click(function(){
		skipForward();
	});

	// Call functions
	createKnobs();
});
