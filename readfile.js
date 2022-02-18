var fs = require('fs'); 
fs.readFile('event.js', 'utf-8', function(err, data) { 
if (err) { 
 console.error(err); 
 } else { 
 console.log(data); 
 } 
}); 
console.log('end.');
var data = fs.readFileSync('file.txt', 'utf-8'); 
console.log(data); 
console.log('end.');