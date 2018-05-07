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
	var answers = [];

	function addAnswerToArray(answer,correct){
		var validate;

		if(answer == correct){
			validate = "Correct";
		}
		else{
			validate = "Incorrect";
		}

		answers.push(answer+" - "+validate);
	}

	$("#checkAnswer").click(function(){
		var getValue = $("#question1Input").val().toLowerCase();

		addAnswerToArray(getValue,"wellington");

		getValue = window.prompt("What is the largest city in New Zealand?").toLowerCase();

		addAnswerToArray(getValue,"auckland");

		getValue = window.prompt("What function is being used to do this?");

		addAnswerToArray(getValue,"window.prompt");

		var i;
		var dataString = "";

		for(i=0; i<answers.length; i++){
			dataString += answers[i] + "<br>";
		}

		$("#validateAnswer").html(dataString);
	});
});
