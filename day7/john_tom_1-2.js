var readline = require('readline');
var prompt = readline.createInterface({input: process.stdin, output: process.stdout});

function exitProgram() {
	console.log("Thank you! Goodbye!");
	process.exit(0);
}

function calculateAreaRect(height, width) {
	return height * width;
}

function calculateAreaTri(base, height) {
	return 0.5 * base * height;
}

function mainMenu(accountBalance) {
	console.log("------------------------")
	console.log("1)Rectangle\n2)Triange\n3)Quit ")

	prompt.question("Please select a polygon: ", function(answer) {
			
			if (answer == 1) {
				areaRect();
			} else if (answer == 2) {
				areaTri();
			} else if (answer == 3) {
				exitProgram();
			} else {
				console.log("Bad input, please try again!");
				mainMenu();
			}
		});
}

function areaRect() {
	var width, height, area;
	prompt.question("Please enter the width: ", function(answer) {
		width = answer;
		prompt.question("Please enter the height: ", function(answer) {
			height = answer;
			area = calculateAreaRect(height, width);
			console.log("Your Area is: " + area);
			mainMenu();
		});
	});
}
function areaTri() {
	var base, height, area;
	prompt.question("Please enter the base: ", function(answer) {
		base = answer;
		prompt.question("Please enter the height: ", function(answer) {
			height = answer;
			area = calculateAreaTri(base, height);
			console.log("Your Area is: " + area);
			mainMenu();
		});
	});
}

mainMenu();