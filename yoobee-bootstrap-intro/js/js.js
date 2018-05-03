$(document).ready(function(){
	// On click of any of the buttons
	$(".btn").click(function(){
		// Set the target as the text value of the btn
		var targ = $(this).text();

		// Select the target class
		$("."+targ).fadeOut(3000, function(){
			// Calculate random RGB values between 1 and 255, converting to strings
			var r = (1+Math.floor(Math.random()*255)).toString();
			var g = (1+Math.floor(Math.random()*255)).toString();
			var b = (1+Math.floor(Math.random()*255)).toString();

			// Combine RGB values in CSS property
			var randColor = "rgb("+r+","+g+","+b+")";

			// Set the background color of the div to the randomised rgb value
			$(this).css("background-color",randColor);
		}).fadeIn(3000); // fadeOut
	}); // Button click event
}); // Document ready
