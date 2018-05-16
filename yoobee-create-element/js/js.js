(function() {
	function addElementToDOM(tag,location,id,style,text){
		// Define location to put element
		var htmlTarget = location;

		// Create the element
		var createdElement = document.createElement(tag);

		// If tree for where to put the element
		htmlTarget.prepend(createdElement);

		// Set the attributes of the element
		createdElement.setAttribute("id",id);
		createdElement.setAttribute("style",style);

		// Put text in the element if not empty
		if(text != ""){
			createdElement.innerText = text;
		}

		// Return the created element
		return createdElement;
	}

	// Variables for the various inputs for the function
	var tagName;
	var locationTarget;
	var idAttribute;
	var styleAttribute;
	var textInner;

	// Setting variables
	tagName = "div";
	locationTarget = document.body;
	idAttribute = "createdDiv";
	styleAttribute = "width:880px; height: 160px; border:1px solid lightblue; border-radius:10px; margin-top:50px;";
	textInner = "";

	// Sets the return from the function as a new variable
	var newTarget = addElementToDOM(tagName,locationTarget,idAttribute,styleAttribute,textInner);

	// Setting variables
	tagName = "p";
	locationTarget = newTarget
	idAttribute = "createdP";
	styleAttribute = "font-size:1.9em; margin:10px; font-family:sans-serif; color:#555";
	textInner = "I tried to find the rhythm of the world where I used to live. I followed the current. I was silent, attentive, I made a conscious effort to smile, nod, stand, and perform the millions of gestures that constitute life on earth.";

	// Calling the function with new variables
	addElementToDOM(tagName,locationTarget,idAttribute,styleAttribute,textInner);
}());
