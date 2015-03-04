// to use the filesystem module
var fs = require('fs');

var path = process.argv[2];	// grab the file

// to read a file
var buf = fs.readFileSync(path);	// Drops file into a buffer object
var str = buf.toString();			// convert buffer object into string
var strArray = str.split('\n');	// split a string into an arry, on the newline character
var newLineCount = (strArray.length - 1);
console.log(newLineCount);

/* --- Official Answer --- 
var fs = require('fs')

// Open a file, that file being the file found in the path listed by the open arguements
var contents = fs.readFileSync(process.argv[2])
// convert that fil to a string, split the string, and grab the length. Subtracting by one
var lines = contents.toString().split('\n').length - 1
console.log(lines)

--- Official Answer --- */