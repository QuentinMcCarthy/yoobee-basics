//alert("Javascript loaded");
//console.log("Javascript loaded");

/*
	Multi line comment
*/

// $ = jquery prefix

/* SELECTORS
	$("div")			Target Element
	$(".box")		Target Class
	$("#box1")		Target ID
	$("div#box1")	CSS selectors apply
	$("ul li")		CSS selectors apply
	$(this)			Targets the element that calls the function
*/

/* COMMON EVENTS
	click()			when target is clicked
	dblclick()		when target is double clicked
	mouseover()		when mouse enters target
	mouseleave()	when mouse leaves target
	hover()			is similar to mouseover except it constantly runs
	mousedown()		is similar to click except only targets the pressing of the button
	mouseup()		when the mouse button is let go
	keydown()		when a key on the keyboard is pressed
	keyup()			when a key on the keyboard is released
	focus()			when a form element is entered
	blur()			when a form element is clicked out of
	submit()			when a form is submitted
*/

/* COMMON EFFECTS
	event.preventDefault() prevents the default action
	hide()			sets the display of the element to none
	show()			sets the display of the element to initial
	toggle()			toggles between hide() and show(), can add a value for time
	fadeOut()		fades the element out, can add a value for time
	fadeIn()			fades the element in, can add a value for time
	addClass("class")			adds specified class to the element
	removeClass("class")		removes specified class from the element
	toggleClass("class")		toggles the class on and off
	css("property","value")	changes the specified CSS property
	css({"property":"value","property":"value"}) variation of the above with array
	append("text")		appends (adds to end)
	prepend("text")	prepends (adds to start)
	empty()				empties the element
	remove()				Removes element
	text()				Overwrites the text
*/

$(document).ready(function(){			// When the document is ready, run:

	$("#box1").click(function(){		// When target is clicked, run:
		// console.log("Green box clicked");
		// $("#box2").hide();
		// $("#box2").show();
		// $("#box2").toggle(5000);
		// $("#box2").fadeOut(5000);
		// $("#box2").toggleClass("wider");
		// $("#box2").css({"background-color":"pink","width":"500px"});
		// $("#box1").toggleClass("higher")
	});

	$("#box2").click(function(){
		// $("#box2").toggleClass("higher");
	});

	$("#box2").dblclick(function(){	// When target is double clicked, run:
		// console.log("Red box double clicked");
	});

	$(".box").click(function(){
		$(this).toggleClass("higher");
	});

	$("#button").click(function(){
		// $("#paragraph").append(" OMG!");
		// $("#paragraph").prepend("OMG! ");
		// $("#paragraph").empty()
		// $("#paragraph").remove()
		// $("#paragraph").text("New text owo");
		// $("#list1").append("<li class='listColor'>List item</li>");
		$("body").append("<div class='box blue'></div>")
	});

	/*
	$("#myForm").submit(function(){
		event.preventDefault();
		console.log("Value: "+$("#name").val());	// Return the value of the input
	});
	*/
});
