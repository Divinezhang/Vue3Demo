// 引入css样式
// 1.引入loader的第一种方式，内联方式
// import 'css-loader!../css/elemen.css'  
// 2.配置loader的第三种方式是，是在webpack.config.js中的module中配置 
import '../css/title.css'
import '../css/element.less'
// 1.创建一个div元素
const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '这是创建以后的div元素'
document.body.appendChild(divEl)