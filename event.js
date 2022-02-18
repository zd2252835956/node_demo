// // var EventEmitters = require('events').EventEmitter; 
// var EventEmitters = require('events'); 
// // console.log(EventEmitter)
// var event = new EventEmitters.EventEmitter(); 
// event.on('some_event', function() { 
//  console.log('some_event occured.'); 
// }); 
// setTimeout(function() { 
//  event.emit('some_event'); 
// }, 1000);
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error');