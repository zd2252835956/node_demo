// var util = require('util'); 
// function Base() { 
// this.name = 'base'; 
// this.base = 1991; 
// this.sayHello = function() { 
//  console.log('Hello ' + this.name); 
//  }; 
// } 
// Base.prototype.showName = function() { 
//  console.log(this.name); 
// }; 
// function Sub() { 
// this.name = 'sub'; 
// } 
// util.inherits(Sub, Base); 
// var objBase = new Base(); 
// objBase.showName(); 
// objBase.sayHello(); 
// console.log(objBase); 
// var objSub = new Sub(); 
// objSub.showName(); 
// objSub.sayHello(); 
// console.log(objSub);
var util = require('util'); 
function Person() { 
this.name = 'byvoid'; 
this.toString = function() { 
return this.name; 
 }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true, null, true));
/**.
util.inherits 合并 复制原型
util.inspect 展开 调试和错误输出
util.isArray()、util.isRegExp()、
util.isDate()、util.isError() 四个类型测试工具
 */