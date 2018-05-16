(function() {
	// Target reference for inserted HTML
	var htmlTarget = document.getElementsByTagName("script")[0]

	// Create div element
	var div = document.createElement("div");

	// Insert div element before the target
	htmlTarget.before(div);

	// Set attributes of element
	div.setAttribute("id","createdDiv");
	div.setAttribute("style","width:880px; height: 160px; border:1px solid lightblue; border-radius:10px; margin-top:50px;")

	// Target reference for inserted HTML
	htmlTarget = div

	// Create p element
	var p = document.createElement("p");

	// Insert text into p element
	p.innerText = "I tried to find the rhythm of the world where I used to live. I followed the current. I was silent, attentive, I made a conscious effort to smile, nod, stand, and perform the millions of gestures that constitute life on earth."

	// Insert p element inside the target
	htmlTarget.appendChild(p);

	// Set attributes of element
	p.setAttribute("id","createdP");
	p.setAttribute("style", "font-size:1.9em; margin:10px; font-family:sans-serif; color:#555")
}());
