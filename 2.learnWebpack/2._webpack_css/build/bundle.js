(()=>{var e={659:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".title {\n  background-color: pink;\n  text-decoration: underline;\n}\n",""]);const i=o},34:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".title {\n  font-size: 30px;\n  font-weight: 700;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(t[f].references++,t[f].updater(p)):t.push({identifier:d,updater:o(p,r),references:1}),s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},466:e=>{e.exports={priceFormat:function(){return"价格是98"}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),a=n(565),c=n.n(a),u=n(216),l=n.n(u),d=n(589),f=n.n(d),p=n(34),v={};v.styleTagTransform=f(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;var m=n(659),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const b=document.createElement("div");b.className="title",b.innerHTML="这是创建以后的div元素",document.body.appendChild(b);const{priceFormat:y}=n(466);console.log(30),console.log(y())})()})();