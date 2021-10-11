module.exports = {
  plugins: [
    require('postcss-preset-env')
    // 它可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环境 添加所需的polyfill；
    // 也内置了autoprefixer
  ]
}