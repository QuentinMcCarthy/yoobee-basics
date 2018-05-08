// .knob call:
// $("").knob({
// 	"min":0,
// 	"max":100,
// 	"step":1,
// 	"angleOffset":0,
// 	"angleArc":360,
// 	"stopper":true,
// 	"readOnly":false,
// 	"rotation":clockwise,
// 	"cursor":false,
// 	"thickness":.35,
// 	"displayInput":true,
// 	"displayPrevious":false,
// 	"release":function(){},
// 	"change":function(){},
// 	"draw":function(){},
// 	"cancel":function(){},
// 	"format":function(){}
// })

$(document).ready(function(){
	var audio;

	function createAudio(id){
		audio = new Audio("audio/"+id+".mp3");
		console.dir(audio);
		play();
	}

	function play(){
		audio.play();
	}

	function pause(){
		audio.pause();
	}

	function createKnobs(){
		$("#audioVol").knob({
			"angleOffset":-90,
			"angleArc":180,
			"displayInput":false,
			"displayPrevious":true,
			"width":"200"
		});

		$("#audioProg").knob({
			"angleOffset":90,
			"angleArc":180,
			"rotation":"anticlockwise",
			"readOnly":true,
			"thickness":.2
		})
	}

	createKnobs();
});
