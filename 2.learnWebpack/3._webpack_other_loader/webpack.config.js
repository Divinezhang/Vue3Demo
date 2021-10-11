const { name } = require('file-loader')
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ] 
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   // test: /\.(jpg|jpeg|png|gif|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // outputPath: 'img', // 图片打包以后存放的路径 // 也可以省略该路径配置，直接拼接到name中
      //       name:'img/[name]-[hash:3].[ext]' // 打包图片以后的名称  图片名称-hash值位数-文件原来的扩展名。 / 前面的是图片打包存放的文件夹名称
      //     }
      //   }
      // },
      /* {  // url-loader类似于file-loader ，将文件图片打包成64位的baseURl
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit:100 * 1024 , // 只打包100M以下的图片
            name:'img/[name]-[hash:3].[ext]' // 打包图片以后的名称  图片名称-hash值位数-文件原来的扩展名。 / 前面的是图片打包存放的文件夹名称
          }
        }
      }, */

      // 在webpack5中可以使用资源模块类型来代替file-loader和url-loader
      // 如果使用 asset module type 就不用安装上面的loader
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        // 有三个值
        // resource：发送方一个单独的文件并导出URL ，类似于file- loader
        // inline:导出一个资源的data URL，类似于url-loader
        // source：导出资源的源代码，类似于raw-loader
        // asset：在导出一个data URL和发送一个单独的文件之间自动选择，之前通过url-loader并配置资源体积限制实现
        generator: {
          filename:'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      // 打包字体文件
      {
        test: /\.(eot|ttf|woff2?)$/,
        /* use: {
          loader: 'file-loader',
          options: {
            name:'font/[name]_[hash:6][ext]'
          }
        } */
        type: 'asset/resource',
        generator: {
          filename:'font/[name]-[hash:6][ext]'
        }
      }
    ]
  }
}