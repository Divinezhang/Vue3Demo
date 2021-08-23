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
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 使用正则表达式，表示以css结尾的都使用下面的loader
        // 此写法是语法糖的形式
        // loader:'css-loader'
        // 一般使用下面方式配置loader
        // use:'css-loader' 
        use: [
          'style-loader',
          'css-loader',
          // 可以在根目录下单独配置postcss-loader
          'postcss-loader'
          /* {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          } */
        ] /// use一般是一个数组，加载loader的顺序是从最后一个到第一个
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }  
    ]
  }
}