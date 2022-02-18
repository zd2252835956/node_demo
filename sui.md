<!-- 抛开前言node的成长历程，大而宽泛的概念化的解释，深入了解node的语法以及api库，收益颇多。
node 有别与 JS 语言，它具备了一定的比肩PHP 等后端语言的能力。
1. node能基于内置的http 模块 构建简单的HTTP服务器，其区别于 PHP的 ‘浏览器-HTTP服务器-PHP-解释器‘结构，直接面向浏览器用户。
var http = require('http')
http.createServer(function(req, res) { 
 res.writeHead(200, {'Content-Type': 'text/html'}) 
 res.write('<h1>Node.js </h1>')
 res.end('<p>Hello World!!!!z</p>')
}).listen(3000)
2.作为后端语言的操作文档node也是不弱的。
var fs = require('fs')
var data = fs.readFileSync('file.txt', 'utf-8')
var data2 = fs.readFile('file.txt', 'utf-8')
3.Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。在开发者看来，事
件由 EventEmitter 对象提供
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
 console.log('some_event occured.'); 
}); 
setTimeout(function() { 
 event.emit('some_event'); 
}, 1000);
 -->