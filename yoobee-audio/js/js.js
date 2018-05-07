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
// 	"thickness":0.35,
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
		audio = new Audio("music/"+id+".mpc")
		play();
	}

	function play(){
		audio.play();
	}

	function pause(){
		audio.pause();
	}

	$("#audioVol").knob({
		"angleOffset":-90,
		"angleArc":180,
		"displayPrevious":true
	});

	$("#audioProg").knob({
		"angleOffset":90,
		"angleArc":180
	})
});
