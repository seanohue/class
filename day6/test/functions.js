function switchScore (score){
	switch(true) {
		case(score<60):
			console.log("You Failed!");
			break;
		case(score<70):
			console.log("D");
			break;
		case(score<80):
			console.log("C");
			break;
		case(score<90):
			console.log("B");
			break;
		case(score<=100):
			console.log("A");
			break;
		default:
			console.log("Improper Input");
	}
}

function switchScore2 (score){
	switch(true) {
		case(score<=100):
			console.log("A");
			break;
		case(score<90):
			console.log("B");
			break;
		case(score<80):
			console.log("C");
			break;
		case(score<70):
			console.log("D");
			break;
		case(score<60):
			console.log("You Failed!");
			break;
		default:
			console.log("Improper Input");
	}
}

function switchScore3 (score){
	switch(true) {
		case(score<=100):
			console.log("A");
		case(score<90):
			console.log("B");
		case(score<80):
			console.log("C");
		case(score<70):
			console.log("D");
		case(score<60):
			console.log("You Failed!");
		default:
			console.log("Improper Input");
	}
	console.log("****")
}

function switchScore4 (score){
	switch(true) {
		case(score<60):
			console.log("You Failed!");
		case(score<70):
			console.log("D");
		case(score<80):
			console.log("C");
		case(score<90):
			console.log("B");
		case(score<=100):
			console.log("A");
		default:
			console.log("Improper Input");
	}
	console.log("++++")

}

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

var scoreOne=80, scoreTwo=73, scoreThree=37, scoreFour=92;

console.log("If-Else If")
gradeScore(scoreOne);
gradeScore(scoreTwo);
gradeScore(scoreThree);
gradeScore(scoreFour);
gradeScore(63);
gradeScore(102);
console.log("---------------------")
console.log("Switch, Ascending")
switchScore(scoreOne);
switchScore(scoreTwo);
switchScore(scoreThree);
switchScore(scoreFour);
switchScore(63);
switchScore(102);
console.log("---------------------")
console.log("Switch, Descending")
switchScore2(scoreOne);
switchScore2(scoreTwo);
switchScore2(scoreThree);
switchScore2(scoreFour);
switchScore2(63);
switchScore2(102);
console.log("---------------------")
console.log("Switch, Descending no Break")
switchScore3(scoreOne);
switchScore3(scoreTwo);
switchScore3(scoreThree);
switchScore3(scoreFour);
switchScore3(63);
switchScore3(102);

console.log("---------------------")
console.log("Switch, Ascending no Break")
switchScore4(scoreOne);
switchScore4(scoreTwo);
switchScore4(scoreThree);
switchScore4(scoreFour);
switchScore4(63);
switchScore4(102);