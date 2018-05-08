$(document).ready(function(){
	// Font size pulsing vars
	var pulseNum = 4;
	var maxPulse = 5;
	var minPulse = pulseNum;
	var pulseDir = true;

	// Font color var
	var currentColor = 0;

	// Rotation var
	var currentRot = 0;

	// Click event to begin firing main function
	$("body").click(function(){
		$("#fadeText").fadeOut(2500, function(){
			$("#fadeText").text("Like, really cool");

			// Adjustment to positioning to account for changed text
			$("#fadeText").css("left","44vw");
			setTimeout(beginTimer, 500);
		});
	});

	function beginTimer(){
		$("#fadeText").fadeIn(1250).fadeOut(2500, function(){
			// Fade in the other elements
			$(".spinDiv").fadeIn(100);

			// Fire the main function
			setTimeout(tickClk,100);
		});
	}

	// Main function, fires every tenth of a second.
	function tickClk(){
		// Font size pulsing detection.
		// True = up, false = down
		if(pulseDir==true){
			// If the current font size is greater than or equal to the max
			if(pulseNum>=maxPulse){
				// Switch direction to down
				pulseDir = false;
			}
			else {
				pulseNum=pulseNum+0.1;
			}
		}
		if(pulseDir==false){
			// If the current font size is less than or equal to the max
			if(pulseNum<=minPulse){
				// Switch drection to up
				pulseDir = true;
			}
			else {
				pulseNum=pulseNum-0.1;
			}
		}

		// Temporary variable, turns the number into ems.
		var currentPulse = pulseNum+"em";

		// Increase the value for the current font color.
		currentColor++;

		// Ready a temporary string for the color
		var colorPicker = "";

		// If tree specifying the color based on number
		if(currentColor>=8){
			currentColor=1;
		}
		if(currentColor==1){
			colorPicker="red";
		}
		if(currentColor==2){
			colorPicker="orange";
		}
		if(currentColor==3){
			colorPicker="yellow";
		}
		if(currentColor==4){
			colorPicker="green";
		}
		if(currentColor==5){
			colorPicker="blue";
		}
		if(currentColor==6){
			colorPicker="indigo";
		}
		if(currentColor==7){
			colorPicker="violet";
		}

		// Increase the rotation value
		currentRot=currentRot+2;

		// Temporary variables to turn rotation into proper syntax
		var spinDivRot = "rotate("+currentRot+"deg)";
		var spinDivCounterRot = "rotate("+(-currentRot)+"deg)";

		// Setting the css properties defined by the given variables
		$("#name").css({"font-size":currentPulse,"color":colorPicker});
		$("#spinNorm").css("transform",spinDivRot);
		$("#spinCounter").css("transform",spinDivCounterRot);

		// Timer fires the main function every 10th of a second
		setTimeout(tickClk, 100);
	}
});
