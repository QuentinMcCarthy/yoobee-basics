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

	// Volume variable
	var audioVol = 1;

	// Array of audio
	var audioArray = [
		{
			localFile:"jackle_app__fortune_cookie",
			hostedFile:"https://dl.dropboxusercontent.com/s/roy5ilvpiaoqav3/jackle_app__fortune_cookie.mp3"
		},
		{
			localFile:"project_yi_(vicetone_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/w9xs464amubfrkg/project_yi_%28vicetone_remix%29.mp3"
		},
		{
			localFile:"edge_of_infinity_(minnesota_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/agya40507f4s3g5/edge_of_infinity_%28minnesota_remix%29.mp3"
		},
		{
			localFile:"flash_funk_(marshmello_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/4h8sxxsu7u2rd0d/flash_funk_%28marshmello_remix%29.mp3"
		},
		{
			localFile:"let_the_games_begin_(hyper_potions_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/iw058ae68kfoa3a/let_the_games_begin_%28hyper_potions_remix%29.mp3"
		},
		{
			localFile:"lucidity_(dan_negovan_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/6q80d9o0hbrmozf/lucidity_%28dan_negovan_remix%29.mp3"
		},
		{
			localFile:"silver_scrapes_(protoshredanoid_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/e4na3iu3qcdvn1k/silver_scrapes_%28protoshredanoid_remix%29.mp3"
		},
		{
			localFile:"the_glory_(james_egbert_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/f9c43zdc0g3a9ok/the_glory_%28james_egbert_remix%29.mp3"
		},
		{
			localFile:"welcome_to_planet_urf_(jauz_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/mbh524zux40yxyk/welcome_to_planet_urf_%28jauz_remix%29.mp3"
		},
		{
			localFile:"worlds_collide_(arty_remix)",
			hostedFile:"https://dl.dropboxusercontent.com/s/uw4rwd4iqpgdst4/worlds_collide_%28arty_remix%29.mp3"
		}
	];

	// Create variable for interval
	var tickTen;

	// Create variable to keep track of the current audio
	var currentTrack = -1;

	// Create variable to keep track of how much
	// Audio is listed
	var maxTracks = (audioArray.length - 1);

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

		// Audio function for if the file is not returned
		audio.onerror = function(){
			if(hosted){
				audio = new Audio("audio/"+audioArray[currentTrack].localFile+".mp3");

				hosted = 0;
				console.log("Loading file failed. Attempting to load local file.");
			}
		}


		// Play the created audio
		// play();

		// Pause the created audio
		pause();

		// Set the volume of the created audio
		setVol(audioVol);

		// Keep track of the current audio track
		// currentTrack++

		// Run trackProgress every tenth of a second
		tickTen = setInterval(trackProgress, 100);
	}

	// Play the audio
	function play(){
		audio.play();

		// These classes control the background on the play/pause
		// buttons to show which one is active
		$("#playButton").addClass("activeControl");
		$("#pauseButton").removeClass("activeControl");
	}

	// Pause the audio
	function pause(){
		audio.pause();

		// These classes control the background on the play/pause
		// buttons to show which one is active
		$("#playButton").removeClass("activeControl");
		$("#pauseButton").addClass("activeControl");
	}

	// Set the volume of the audio
	function setVol(vol){
		// If the audio exists
		if(typeof audio != "undefined"){
			// If the given volume is a number
			if(typeof vol == "number"){
				// If the volume is within the valid range
				if(vol <= 1 && vol >= 0){
					audio.volume = vol;
					audioVol = vol;
				}
			}
		}
	}

	function skipBackward(){
		if(currentTrack>0){
			audio.pause();

			currentTrack--;

			checkCurrentTrack();
		}
	}

	function skipForward(){
		if(currentTrack<maxTracks){
			audio.pause();

			currentTrack++

			checkCurrentTrack();
		}
	}

	function checkCurrentTrack(){
		// Set button disabled or not
		if(currentTrack>0){
			$("#backButton").removeClass("disabled");
		}
		else{
			$("#backButton").addClass("disabled");
		}

		if(currentTrack<maxTracks){
			$("#skipButton").removeClass("disabled");
		}
		else{
			$("#skipButton").addClass("disabled");
		}

		// Play the audio based on the current track
		createAudio(true,audioArray[currentTrack].hostedFile);
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
		if(audio.ended){
			// Stop looping
			clearInterval(tickTen);

			// New track
			currentTrack++

			// Check the current track
			checkCurrentTrack();
		}
	}

	function updatePlaylist(){
		// Create and declare htmlString as an empty string
		var htmlString = "";

		// For every item in the array
		// Create HTML for the item
		audioArray.forEach(function(currentValue, index){
			htmlString += "<div class='playlistItem'><p>";
			htmlString += "<strong>localFile:</strong>";
			htmlString += "<br>"+currentValue.localFile+"<br>";
			htmlString += "<strong>hostedFile:</strong>";
			htmlString += "<br>"+currentValue.hostedFile+"";
			htmlString += "</p></div>";
			htmlString += "<div class='playlistBtnPos'>";
			htmlString += "<div class='playlistBtn' data-remove='"+index+"'>";
			htmlString += "<i class='fas fa-trash'></i>";
			htmlString += "</div>";
			htmlString += "</div>";
			htmlString += "<hr>";
		});

		// Put the created HTML into the DOM
		$("#playlistView").html(htmlString);

		// This click event is in here instead of down with the others
		// Because the elements it targets are created here
		// And do not exist otherwise
		// Click event for the remove from playlist button
		$(".playlistBtn").click(function(){
			console.log("Click");
			// removeFromPlaylist(this.attr("data-remove"))
		});
	}

	function addToPlaylist(newFile){
		// If the given string is not blank
		if(newFile != ""){
			// Create variable to hold the split string
			var splitInput = newFile.split("");

			// Create variable to hold the first four letters of the split string
			var checkHTTP = ""+splitInput[0]+splitInput[1]+splitInput[2]+splitInput[3];

			// If the first four letters of the string
			// are "http" then it is a hosted file
			if(checkHTTP == "http"){
				// Push an object to the array containing the file
				audioArray.push({
					localFile:"",
					hostedFile:newFile
				});
			}
			else{
				// Push an object to the array containing the file
				audioArray.push({
					localFile:newFile,
					hostedFile:""
				});
			}

			// Update the DOM to reflect the updated playlist
			updatePlaylist();
		}
	}

	function removeFromPlaylist(toRemove){
		console.log(toRemove);
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
			"angleArc":0,
			"fgColor":"black",
		});

		updatePlaylist();

		// Creates the audio after a delay
		// This allows the knobs to initialise beforehand
		setTimeout(function(){
			// New track
			currentTrack++

			// Locally hosted
			// createAudio(false,"jackle_app__fortune_cookie")

			// Dropbox hosted
			// createAudio(true,"https://dl.dropboxusercontent.com/s/roy5ilvpiaoqav3/jackle_app__fortune_cookie.mp3")

			checkCurrentTrack();
		}, 250)
	}

	// Click event for the play button
	$("#playButton").click(function(){
		play();
	});

	// Click event for the pause button
	$("#pauseButton").click(function(){
		pause();
	});

	// Click event for the back button
	$("#backButton").click(function(){
		skipBackward();
	});

	// Click event for the forward button
	$("#skipButton").click(function(){
		skipForward();
	});

	// Click event for the add to playlist button
	$("#audioInputBtn").click(function(){
		addToPlaylist($("#audioInput").val());
	});

	// Call functions
	createKnobs();
});
