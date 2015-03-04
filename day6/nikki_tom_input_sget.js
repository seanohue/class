var sget = require('sget');	//Require external library

function gradeScore (score){
	if (score < 60) {
		console.log("You failed!");
	} else {
		if (score>100) {
			console.log("Cheater Cheater!");
		} else if (score >= 90) {
			console.log("A");
		} else if (score >= 80) {
			console.log("B");
		} else if (score >= 70) {
			console.log("C");
		} else if (score >= 60) {
			console.log("D");
		}
	}
}

function getInput() {
	var rawScore = 0;
	var rawScore = sget('Say something. I\'ll wait.');

	return rawScore;
}

gradeScore(getInput());