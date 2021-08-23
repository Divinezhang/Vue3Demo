const path = require('path')
module.exports = {
  entry: './src/index.js', // 项目打包的入口文件，默认是进入src下面的index.js文件，但是也可以修改成其它文件名称，比如:main.js
  output: {
    // 打包以后输出的文件
    // 打包以后存放的路径（必须是绝对路径:/otherDemo/vue3Video-demo/Vue3Demo/2.learnWebpack/1._basic_webpack）
    // 但是绝对路径太长，因此使用node中的resolve函数指定当前的绝对路径
    // 第一个参数是绝对路径，第二个参数是文件夹名称
    path: path.resolve(__dirname, './build'),
    // 打包以后的文件名称
    filename: 'bundle.js'
  }
}