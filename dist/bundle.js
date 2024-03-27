(()=>{"use strict";var t={195:(t,n,e)=>{e.d(n,{A:()=>a});var i=e(601),r=e.n(i),s=e(314),o=e.n(s)()(r());o.push([t.id,"* {\n\tfont-family: 'Inter', sans-serif;\n}\n\n.container {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 50%;\n\tborder-radius: 20px;\n\tbackground: #2f60e9;\n\tmargin: 1%;\n\tpadding: 2rem;\n}\n.img-post {\n\twidth: 100%;\n\tmax-width: 400px;\n\theight: auto;\n\tborder-radius: 8px;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container img {\n\twidth: 30px;\n\theight: 30px;\n\tmargin-right: 10px;\n}\n\n.likes-count {\n\tfont-size: 1.2rem;\n\tmargin-bottom: 1rem;\n}\n\n.username {\n\tfont-weight: bold;\n\tmargin-bottom: 0.5rem;\n}\n\n.description {\n\tfont-style: italic;\n}\n",""]);const a=o},647:(t,n,e)=>{e.d(n,{A:()=>a});var i=e(601),r=e.n(i),s=e(314),o=e.n(s)()(r());o.push([t.id,".container-post {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 50%;\n\tborder-radius: 20px;\n\tbackground: #2f60e9;\n\tmargin: 1%;\n\tpadding: 2rem;\n}\n",""]);const a=o},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",i=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),i&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),i&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,i,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);i&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function i(t,i){for(var s={},o=[],a=0;a<t.length;a++){var c=t[a],l=i.base?c[0]+i.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=e(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,i);i.byIndex=a,n.splice(a,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var s=i(t=t||[],r=r||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var a=e(s[o]);n[a].references--}for(var c=i(t,r),l=0;l<s.length;l++){var d=e(s[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},659:t=>{var n={};t.exports=function(t,e){var i=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,r&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var s=e.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(i,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var s=n[i]={id:i,exports:{}};return t[i](s,s.exports,e),s.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=i[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.nc=void 0,(()=>{var t=e(72),n=e.n(t),i=e(825),r=e.n(i),s=e(659),o=e.n(s),a=e(56),c=e.n(a),l=e(540),d=e.n(l),u=e(113),p=e.n(u),m=e(647),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),n()(m.A,h);const f=m.A&&m.A.locals?m.A.locals:void 0;var g=e(195),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=o().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),n()(g.A,v);const b=g.A&&g.A.locals?g.A.locals:void 0;var y;!function(t){t.image="image",t.isliked="isliked",t.issaved="issaved",t.likescount="likescount",t.username="username",t.description="description"}(y||(y={}));class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,isliked:null,issaved:null,likescount:null,username:null,description:null})}attributeChangedCallback(t,n,e){this[t]=e,this.render()}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("style");t.textContent="\n\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 25%;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tbackground: #2f60e9;\n\t\t\t\tmargin: 1%;\n\t\t\t\tpadding: 2rem;\n\t\t}\n\t\t.img-container {\n\t\twidth: 20rem;\n    height: 20rem;\n    display: flex;\n    justify-content: center;\n    overflow: hidden; /* Previene que la imagen sobresalga del contenedor */\n    border-radius: 8px;\n\t\tmargin-bottom: 1rem;\n\t\t}\n\n\t\t.img-post {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tborder-radius: 8px;\n\t\t}\n\n\n\t\t.content-container{\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n      flex-direction: column;\n      align-items: flex-start;\n\n\t\t}\n\n\t\t.icon-container {\n\t\t\twidth: 2rem;\n    \theight: 1.7rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\t\t}\n\n\t\t.icon-container img {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tmargin-right: 1rem;\n\t\t}\n\n\t\t.likes-count, .username, .description{\n\t\t\twidth: 100%;\n\t\t\ttext-align: left;\n\t\t\tmargin-bottom: 0.5rem;\n\t\t}\n\t\t.likes-count{\n\t\t\tfont-size: 1.2rem;\n\t\t\tcolor: #CBF900;\n\t\t}\n\t\t.username {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1rem;\n\t\t\tcolor: white;\n\n\t\t}\n\t\t.description {\n\n\t\t\tfont-size: 1rem;\n\t\t\tcolor: white;\n\t\t\tfont-weight: normal;\n\t\t}\n\n            ",this.shadowRoot.appendChild(t),this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${b}</style>\n\n            <section class="container">\n\t\t\t\t\t\t\t\t<div class= "img-container">\n\t\t\t\t\t\t\t\t\t\t<img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t <div class= "content-container">\n\t\t\t\t\t\t\t\t \t\t<div class= "icon-container">\n\t\t\t\t\t\t\t\t\t\t\t<img class= "icon-container img" src="${this.isliked}" alt="Like icon">\n\t\t\t\t\t\t\t\t\t\t\t<img class= "icon-container img" src="${this.issaved}" alt="Save icon">\n\t\t\t\t\t\t\t\t </div>\n\n                    <h3 class= "likes-count">${this.likescount} likes</h3>\n\t\t\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\t\t\t<span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t</div>\n\n            </section>\n        `}}}customElements.define("post-image",w);const x=e.p+"assets/images/13c42b09bd85382f60650f26ecff8636.png",k=e.p+"assets/images/7fefe267955724a4df33b3f3d0c2e4e5.png",A=[{image:"https://images.unsplash.com/photo-1568454537842-d933259bb258",isLiked:x,isSaved:k,likesCount:"950",username:"@val0931",description:"I gave it all"},{image:"https://images.unsplash.com/photo-1568454537842-d933259bb258",isLiked:x,isSaved:k,likesCount:"590",username:"@alejah__",description:"Sweat today, smile tomorrow"},{image:"https://images.unsplash.com/photo-1568454537842-d933259bb258",isLiked:x,isSaved:k,likesCount:"1300",username:"@guti_santi",description:"Sweat, smile, repeat."},{image:"https://images.unsplash.com/photo-1568454537842-d933259bb258",isLiked:x,isSaved:k,likesCount:"480",username:"@juanesv08",description:"Exercise: self-love in motion."}];class C extends HTMLElement{constructor(){super(),this.PostImageList=[],this.attachShadow({mode:"open"}),A.forEach((t=>{const n=this.ownerDocument.createElement("post-image");n.setAttribute(y.image,t.image),n.setAttribute(y.isliked,t.isLiked),n.setAttribute(y.issaved,t.isSaved),n.setAttribute(y.likescount,t.likesCount),n.setAttribute(y.username,t.username),n.setAttribute(y.description,t.description),this.PostImageList.push(n),console.log("list",this.PostImageList)}))}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML+=`\n\t\t\t<style>${f}</style>\n\t\t\t<h3> Hola Mundo </h3>\n\n\t\t\t`);const n=this.ownerDocument.createElement("div");n.className="container-post",this.PostImageList.forEach((t=>{n.appendChild(t)})),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}}customElements.define("app-container",C)})()})();