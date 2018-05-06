$(document).ready(function(){
	function objects(){
		var hotel1 = new Hotel('Quay', 40);
		var hotel2 = new Hotel('Park', 120);
		var hotel3 = {
			name:"Transylvania"
		}
		hotel3.rooms = 36;

		delete hotel1.rooms

		console.log(hotel1);
		console.log(hotel2);
		console.log(hotel3);
		console.log("hotel3 is an "+typeof hotel3);

		function Hotel(name, rooms){
			this.name = name;
			this.rooms = rooms;
		}
	}

	function arrays(){
		var roomKeys = [
			"Open",
			"Open",
			"Closed",
			"Open",
			"Closed",
			"Closed",
			"Open"
		]

		console.log(roomKeys);

		roomKeys.push("Closed");

		console.log(roomKeys);

		var storageArray = [];

		$("#trigger").click(function(){
			var getValue = document.getElementById("anInput").value;
			var getNumber = parseInt(getValue);

			console.log("#triggered");
			console.log(getValue);
			console.log("getValue is a "+typeof getValue);
			console.log(getNumber);
			console.log("getNumber is a "+typeof getNumber);

			if(getValue == "remove"){
				storageArray.pop()
			}
			else{
				storageArray.push(getValue);
			}

			console.log(storageArray);
		});
	}

	function ifStatements(){
		$("#trigger").click(function(){
			var trueVal = true;
			var falseVal = false;

			if(trueVal == true){
				console.log("It's true");
			}
			else{
				console.log("It's false");
			}
		});
	}

	function functions(){
		function aBasicFunctionDeclaration(){
			alert("I am a function declaration");
		}

		// aBasicFunctionDeclaration();

		var aFunctionExpression = function(){
			alert("I am a function expression");
		}(); // Casually calling itself

		// aFunctionExpression();

		()=>{}
	}

	// objects();
	// arrays();
	// ifStatements()
	functions();
});
