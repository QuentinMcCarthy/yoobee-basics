function taskOneInitialCode(){
	// Create three variables to store the information needed.
	var price;
	var quantity;
	var total;

	// Assign values to the price and quantity variables.
	price = 5;
	quantity = 14;
	// Calculate the total by multiplying the price by quantity.
	total = price * quantity;

	// Get the element with an id of cost.
	var el = document.getElementById('oldCost');
	el.textContent = '$' + total;

	// 1. Pls make this work in html
	// 2. Re-code the above using an object and a function declaration


	// NOTE: textContent does not work in IE8 or earlier
	// You can use innerHTML, but note the security issues on p228-231
	// el.innerHTML = '$' + total;
}

function taskOneNewCode(){
	var totalPrice = {
		price: 5,
		quantity: 14
	}

	totalPrice.total = totalPrice.price * totalPrice.quantity;

	function getCost(){
		var el = document.getElementById("newCost");
		el.textContent = "$" + totalPrice.total;
	}

	getCost();
}

// taskOneInitialCode();
// taskOneNewCode();

function taskTwoInitialCode(){
	// Create a variable to hold a random number between 1 and 10
	var randomNum = Math.floor((Math.random() * 10) + 1);

	// Create a variable called el to hold the element whose id attribute has a value of info
	var el = document.getElementById('oldInfo');
	// Write the number into that element
	el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';

	// 1. Please use the random code to print the random number to the console
	// 2. Please use the random code to print the random number to the dom/html
	// 3. Use some css and jquery to make the radom number appear in a more interesting
	// way. I.e Casino style, colors or anything you like
}

function taskTwoNewCode(){
	var randInt = (1+Math.floor(Math.random()*10));

	console.log(randInt);

	var el = document.getElementById("newInfo");
	el.innerHTML = "<h1>Random Number:<br><span id='randInt'>"+randInt+"</span>";
}

// taskTwoInitialCode();
taskTwoNewCode();
