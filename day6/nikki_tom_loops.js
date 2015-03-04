var sum = 0;
var counter = 1;

for (counter; counter < 1000; counter++) {
	if (counter % 3 == 0){
		sum = sum + counter;
	} else if (counter % 5 == 0){
		sum = sum + counter;
	} 
}
console.log (sum);
