$(document).ready(function(){
	// DOM elements
	var card = $(".card");
	var cardImage = $(".card > div > img")
	var cardBorder = $(".card > div:nth-child(2)");
	var cardText = $(".card > div > h1");

	$("#image").change(function(){
		// Get the value from the element
		var currentValue = this.value;

		// Switch the src, image taken from value of the element
		$(cardImage).attr("src","assets/"+currentValue+".jpg");
	});

	$("#background").change(function(){
		// Get the value from the element
		var currentValue = this.value;

		// Remove all the background classes
		$(card).removeClass("celadonBackground");
		$(card).removeClass("graphiteBackground");
		$(card).removeClass("roseBackground");

		// Add the background class, taken from value of the element
		$(card).addClass(currentValue+"Background");
	});

	$("#font").change(function(){
		// Get the value from the element
		var currentValue = this.value;

		// Remove all font classes
		$(cardText).removeClass("handwriting");
		$(cardText).removeClass("sketch");
		$(cardText).removeClass("print");

		// Add the font class, taken from the value of the element
		$(cardText).addClass(currentValue);
	});

	$("#border").change(function(){
		// Get the value from the element
		var currentValue = this.value;

		// Remove all font classes
		$(cardBorder).removeClass("noneBorder");
		$(cardBorder).removeClass("smallBorder");
		$(cardBorder).removeClass("bigBorder");
		$(cardBorder).removeClass("filledBorder");

		// Add the font class based on the value of the element
		switch(currentValue){
			case "none":
				$(cardBorder).addClass("noneBorder");
				break
			case "thin":
				$(cardBorder).addClass("smallBorder");
				break
			case "thick":
				$(cardBorder).addClass("bigBorder");
				break
			case "filled":
				$(cardBorder).addClass("filledBorder");
				break
		}
	});

	$("#message").change(function(){
		// Get the value from the element
		var currentValue = this.value;

		// Change the text to the value of the element
		$(cardText).text(currentValue);
	});
});
