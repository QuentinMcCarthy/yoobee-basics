// 1. Make 2 function declarations
// 2. Both function declarations will be inside an iife
// 3. Use private and global variables to demonstrate the rules of scope
// 4. Use the return statement to assign a private variable to a global variable
// Comment your code
//Push to git as "The rules of Variable Scope"
// Please use console.log() or console.dir() and/or alert()

// iife Function, immediately declares itself
(function() {
	// Create and declare globalVar as true
	var globalVar = true;

	console.log("globalVar created as "+globalVar);

	// Create returnVar
	var returnVar;

	console.log("returnVar created");

	// Blank console log for the purposes of readability
	console.log("");

	// Function
	function firstFunc(){
		// Create and declare privateVar as false
		var privateVar = false;

		console.log("privateVar created as "+privateVar);
	}

	// Function
	function secondFunc(){
		// Create and declare alsoPrivateVar as WAAAAAGH
		var alsoPrivateVar = "WAAAAAGH";

		console.log("alsoPrivateVar created as "+alsoPrivateVar);
		console.log("alsoPrivateVar promptly returned");

		// Blank console log for the purposes of readability
		console.log("");

		// Return alsoPrivateVar
		return alsoPrivateVar;
	}

	// Call firstFunc
	firstFunc()

	console.log("privateVar is in function scope and as such when called outside like now, is typeof "+typeof privateVar);

	// Blank console log for the purposes of readability
	console.log("");

	// declare returnVar as whatever is returned from secondFunc
	returnVar = secondFunc();

	console.log("alsoPrivateVar is in function scope and as such when called outside like now, is typeof "+typeof alsoPrivateVar);
	console.log("However, alsoPrivateVar was returned from the function into returnVar and returnVar is alsoPrivateVar = "+returnVar);
}());
