var readline = require('readline');
var prompt = readline.createInterface({input: process.stdin, output: process.stdout});
var prompt2 = readline.createInterface({input: process.stdin, output: process.stdout});

function askForNumber() {
	prompt.question("Please enter your number: ", function(answer) {
			if (answer % 2 == 0) { console.log("Even!") }
			else {console.log("Odd")}
			
			console.log("Howdy!");
		});

		prompt2.question("Would you like to enter another (y/n)?", function(answer) {
				if (answer === "y") { askForNumber(); }
				else if (answer === "n") { exitProgram(); }
				else { 
					console.log("Bad input"); 
					exitProgram(); 
				}
				});
		
		console.log("Something Different");
}

function exitProgram() {
	console.log("Thank you! Goodbye!");
	process.exit(1);
}

askForNumber();