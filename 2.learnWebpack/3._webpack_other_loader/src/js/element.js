// 引入css样式
// 1.引入loader的第一种方式，内联方式
// import 'css-loader!../css/elemen.css'  
// 2.配置loader的第三种方式是，是在webpack.config.js中的module中配置 
import '../css/title.css'
import '../css/element.less'
import '../css/img.css'
import imageData from '../img/nhlt.jpg'
import '../font/iconfont.css'
// 1.创建一个div元素
const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '这是创建以后的div元素'
document.body.appendChild(divEl)


// 2.创建一个图片元素
const bgDivEl = document.createElement('div')
bgDivEl.className = 'bg-img'
document.body.appendChild(bgDivEl)

// 3.创建一个图片元素
const imgEl = document.createElement('img')
imgEl.src = imageData
document.body.appendChild(imgEl)

// 4.创建一个i元素
const iEl = document.createElement('i')
iEl.className = 'iconfont icon-ashbin',
document.body.appendChild(iEl)