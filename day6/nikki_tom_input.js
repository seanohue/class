var rl = require("readline");	//Require external library

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

	var rawScore = 0;
	var prompts = rl.n(process.stdin, process.stdout); //Setup prompt object

	prompts.question("What is the score to be graded? ", function (rawScore) {
		console.log("RAW: " + rawScore);
    process.exit();
	});
		return rawScore;
