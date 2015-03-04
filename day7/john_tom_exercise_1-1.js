var weekDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for(var count = 0; count < weekDays.length; count++) {
	console.log(weekDays[count]);
}
console.log("---")
for(var count = 0; count < weekDays.length; count+=2) {
	console.log(weekDays[count]);
}