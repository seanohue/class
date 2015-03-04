var numberOne, numberTwo;

numberOne = -1;
numberTwo = 990;


if (numberOne == numberTwo) {
	console.log("Hey! Those are the same number");
}
else {
	if (numberOne >= 100 && numberTwo >= 100) {
		console.log("those are big numbers!");
	} else if (numberOne < 100 && numberTwo < 100) {
		console.log("those are small numbers!");
	}
	else {
		console.log("those numbers are different!")
	}
}
