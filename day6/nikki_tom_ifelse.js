var score=0;
score = 10

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