// Create one function that takes theArray as an argument then completes steps
// 1 - 2 - 3 and returns the result/processed array

var theArray = [false, 'adam', 'sam', 15, 'bob', 'john', 9000, 'tupac', 'biggie', 'george', 'tony', 22];

// 1. Clean array so only string values remain
// 2. Add one item 'billy' to the end of the array
// 3. Sort alphabetically from Z - A
// 4. Complete all this and console the result with 1 function


// *** Bonus
// Have the same function Punctuate the first letter of each name.


// Doing task

function taskB(){
	// Remove items that are not strings from the array
	for(var i = 0; i < theArray.length; i++){
		if(typeof theArray[i] != "string"){
			// Remove "1" items starting at index "i"
			theArray.splice(i,1);
		}
	}

	console.log("Task 1 - Strings only:");
	console.log(theArray);
	console.log("");

	// Push "billy" to end of the array
	theArray.push("billy");

	console.log("Task 2 - Add billy:");
	console.log(theArray);
	console.log("");

	// Sort the items alphabetically. Reverse the order.
	theArray.sort().reverse();

	console.log("Task 3 - Sort Z to A:");
	console.log(theArray);
	console.log("");


	for(var i = 0; i < theArray.length; i++){
		// For all the strings
		// get the first character
		// set it to uppercase
		// then add the rest of the string sans the first letter
		theArray[i] = theArray[i].charAt(0).toUpperCase() + theArray[i].slice(1);
	}

	console.log("Bonus Task - Capitalise:");
	console.log(theArray);
	console.log("");
}


taskB();
