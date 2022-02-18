// console.log(global, process)
// console.log(process.argv)
/**
process.argv
[
  '/usr/local/bin/node',
  '/Users/zhaodang/Desktop/other/node/global.js'
]
 */

/**
// process.stdout 输出流
process.stdout.write()
// process.stdin 输入流
process.stdin.resume()

process.stdin.resume();  //恢复流
process.stdin.on('data', function(data) { 
 process.stdout.write('read from console: ' + data.toString()); //打印
}); //定义事件
 */
function callback() {
console.log(1)
}
console.log(123)
process.nextTick(callback)
console.trace();