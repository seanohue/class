var fs = require('fs');
var myNumber = undefined;

function addOne(callback) {		//Takes a function as an arguement
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents);
    myNumber++;
    callback();					// Runs logMyNumber when ready
  })
}

function logMyNumber() {		// Callback function
  console.log(myNumber);
}

addOne(logMyNumber);			