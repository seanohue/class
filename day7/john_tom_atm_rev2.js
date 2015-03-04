var readline = require('readline');
var prompt = readline.createInterface({input: process.stdin, output: process.stdout});

function mainMenu(accountBalance) {
	console.log("------------------------")
	console.log("1)View Account Balance\n2)Deposit Money\n3)Withdraw Money\n4)Quit ")

	prompt.question("Please select a function (1-4): ", function(answer) {
			
			if (answer == 1) {					//works
				viewBalance(accountBalance);
			} else if (answer == 2) {
				accountBalance = transaction(accountBalance, "Deposit");
			} else if (answer == 3) {
				accountBalance = transaction(accountBalance, "Withdraw");
			} else if (answer == 4) {
				exitProgram();
			} else {
				console.log("Bad input, please try again!");
				mainMenu(accountBalance);
			}
		});
}

function exitProgram() {
	console.log("Thank you! Goodbye!");
	process.exit(0);
}

function viewBalance(accountBalance) {		//works
	console.log("Your Balance is: " + accountBalance);
	mainMenu(accountBalance);
}

function transaction(accountBalance, transactionType) {
	prompt.question("Please enter amount to "+transactionType+ " (q to abort): ",function(answer) {
		if (isNaN(answer) == true) {
			if (answer == 'q') {
				mainMenu(accountBalance);
			} else {
				console.log("Bad Input, please try again!");
				mainMenu(accountBalance);
			}
		} else {
			if (transactionType == "Withdraw") {
				mainMenu(parseInt(accountBalance) - parseInt(answer)); 

			} else if (transactionType == "Deposit") {
				mainMenu(parseInt(accountBalance) + parseInt(answer)); 
			}
		}
	});
	
}
mainMenu(50);