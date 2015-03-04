process.stdin.setEncoding('utf8');		// Set encoding to standard letters

process.stdin.on('readable', function() {	// turn on a stream
  var chunk = process.stdin.read();			// get input in 
  if (chunk !== null) {
  	var trimmed = chunk.substr(0, chunk.length - 1)
  	if (chunk.toString() == 'banana\n') { 
  		process.stdout.write('test\n');
  	}
    process.stdout.write('data: ' + chunk);
    console.log(typeof(chunk));
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});