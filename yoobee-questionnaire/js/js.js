// 1. Create an input field in the document
// 2. Set up a general knowledge question in the dom/html
// above the input field with html
// 3. Create a Check Answer button in your html/dom
// 3. When a user inputs and answer and clicks Check Answer,
// have your js check the answer and update the dom/html with feedback.
//
// *Possible Example:*
// What is the capital of Thailand?
// Input: Sydney
// HTML updates the h1 tag/element in the dom to say: Wrong, please try again
// Input: Bangkok
// HTML updates the h1 tag/element in the dom to say: Excellent, Correct answer
//
// *Note:*
// ** Pls do not use alerts for feedback, update the document
// ** Use clear names in your code i.e. var inputValue = document.getElementById('inputVal');
// *** Remember to use an if statement if needed
// **** Try to use a function expression or function declaration in your code
// *****EXTRA**** Try to use window.prompt() to extend the user interaction to more
// than one question - combine this with an array to store answers by using the push() method.
// Present a combination of the array data at the final step. (edited)

$(document).ready(function(){
	// Ready an array for the answers
	var answers = [];

	// Function called to add answers to the above array
	function addAnswerToArray(answer,correct){
		// Temporary variable for the returned string
		var validate;

		// If the given answer equals the given correct value
		if(answer == correct){
			validate = "Correct";
		}
		else{
			validate = "Incorrect";
		}

		// Push the answer and whether it is correct or not to the array
		answers.push(answer+" - "+validate);
	}

	// When the button is pushed
	$("#checkAnswer").click(function(){
		// Get the value of the input, in lowercase to avoid errors with capitalisation.
		var getValue = $("#question1Input").val().toLowerCase();

		// Add the answer to the array, correct answer given.
		addAnswerToArray(getValue,"wellington");

		// Get the value that is returned from the window prompt, lowercase to avoid errors.
		getValue = window.prompt("What is the largest city in New Zealand?").toLowerCase();

		// Add the answer to the array, correct answer given.
		addAnswerToArray(getValue,"auckland");

		// Get the value that is returned from the window prompt, lowercase to avoid errors.
		getValue = window.prompt("What function is being used to do this?");

		// Add the answer to the array, correct answer given.
		addAnswerToArray(getValue,"window.prompt");

		// Temporary variables for the increment and a string
		var i;
		var dataString = "";

		// Loop through every item in the array
		for(i=0; i<answers.length; i++){
			// Add the string from the array to the dataString var, br to split lines
			dataString += answers[i] + "<br>";
		}

		// Put the string HTML into the HTML of the validateAnswer element
		$("#validateAnswer").html(dataString);
	});
});
