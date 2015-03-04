var readline = require('readline');
var string = undefined;

var interface = readline.createInterface({	//create the interface
  input: process.stdin,						// determine input
  output: process.stdout					// determine output
});


/* -- Main function to run. 
   -- open an interface, with a question, pass in a callback function 
   -- callback function calls the */
function inquery(callback) {
	interface.question('What is your input?: (q to exit) ', function(answer) {
		string = switchScore(answer);
		callback();
	})
}

function output() {
	console.log(string);
	if (string == "exit") {
		exit();
	} else {
		inquery(output);
	}
}

/* --- Grading Function --- */

function switchScore (score){
	switch(true) {
		case (score == 'q'):
			exit();
			// return "exit";
			break;
		case(score<60):
			return "You Failed!";
			break;
		case(score<70):
			return "D";
			break;
		case(score<80):
			return "C";
			break;
		case(score<90):
			return "B";
			break;
		case(score<=100):
			return "A";
			break;
		default:
			return "Improper Input";
	}
}


function exit() {
	console.log("Exiting!");
	interface.close();		//Close the interface object
	process.exit(1);
}

inquery(output);