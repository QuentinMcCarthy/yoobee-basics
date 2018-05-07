$(document).ready(function(){
	function firstStuff(){
		// Function for getting a random number between specified min and max
		function randInt(min,max){
			return (min+Math.floor(Math.random()*max));
		}

		// Function for calculation area
		function getArea(width,height){
			return (width * height);
		}

		// Logs the area to the console
		console.log(getArea(randInt(1,10),randInt(1,10)));

		// Function with val parameter checks color values
		function checkColorVal(val){
			// If statement checks if the val is above 9
			if(val>9){
				// Run through numbers 10 - 15 and replace with appropriate HEX letter.
				if(val==10){
					return "A";
				}
				else if(val==11){
					return "B";
				}
				else if(val==12){
					return "C";
				}
				else if(val==13){
					return "D";
				}
				else if(val==14){
					return "E";
				}
				else if(val==15){
					return "F"
				}
			}
			else {
				return val.toString();
			}
		}

		// Variables calling for a random integer between 0 and 15
		var r1 = randInt(0,15);
		var r2 = randInt(0,15);
		var g1 = randInt(0,15);
		var g2 = randInt(0,15);
		var b1 = randInt(0,15);
		var b2 = randInt(0,15);

		// Initialise hex srting with #
		var hexString = "#";

		// Call the checkColorVal function to set the proper value, then add it to the hex string
		hexString += checkColorVal(r1);
		hexString += checkColorVal(r2);
		hexString += checkColorVal(g1);
		hexString += checkColorVal(g2);
		hexString += checkColorVal(b1);
		hexString += checkColorVal(b2);

		// Set the document body's background color as the created hex string
		document.body.style.backgroundColor = hexString;

		// Print the hex string to the console
		console.log(hexString);
	}

	function changeColor(id, color){
		var el = document.getElementById(id)
		el.style.color = color;
	}

	firstStuff()
	changeColor("one","purple");
});
