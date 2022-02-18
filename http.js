// var http = require('http'); 
// var url = require('url'); 
// var util = require('util'); 
// http.createServer(function(req, res) { 
//  res.writeHead(200, {'Content-Type': 'text/plain'}); 
//  res.end(util.inspect(url.parse(req.url, true))); 
// }).listen(5000);




//httprequest.js 
var http = require('http'); 
var querystring = require('querystring'); 
var contents = querystring.stringify({ 
 name: 'byvoid', 
 email: 'byvoid@byvoid.com', 
 address: 'Zijing 2#, Tsinghua University', 
}); 
var options = { 
 host: '127.0.1.1', 
 port :'8881',
 path: '/', 
 method: 'POST', 
 headers: { 
 'Content-Type': 'application/x-www-form-urlencoded', 
 'Content-Length' : contents.length 
 } 
}; 
var req = http.request(options, function(res) { 
 res.setEncoding('utf8'); 
 res.on('data', function (data) { 
 console.log(data); 
 }); 
}); 
req.write(contents); 
req.end();