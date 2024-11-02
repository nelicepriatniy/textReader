(function(){"use strict";var t={544:function(t,e,r){var n=r(751),i=r(641);const s={class:"app"};function o(t,e,r,n,o,a){const d=(0,i.g2)("FronBlock");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)(d,{msg:"Welcome to Your Vue.js App"})])}var a=r(33);const d={class:"text-reader"},c={class:"text-reader-text"},h={class:"text-reader-button"},l={for:"",class:"speedInputLabel"},u={key:0,class:"error"},p={key:1,class:"noterror"},x={class:"speedInfo"};function f(t,e,r,n,s,o){return(0,i.uX)(),(0,i.CE)("div",d,[(0,i.Lk)("p",c,(0,a.v_)(s.text),1),(0,i.Lk)("textarea",{onClick:e[0]||(e[0]=(...t)=>o.wordIndexChange&&o.wordIndexChange(...t)),onInput:e[1]||(e[1]=(...t)=>o.changeActiveText&&o.changeActiveText(...t)),name:"",id:"",class:"text-reader-input",placeholder:"Введите ваш текст"},null,32),(0,i.Lk)("div",h,[s.isStarted?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("button",{key:0,class:"go",onClick:e[2]||(e[2]=t=>o.start())}," начало")),s.isStarted?((0,i.uX)(),(0,i.CE)("button",{key:1,class:"go",onClick:e[3]||(e[3]=t=>o.stop())}," стоп")):(0,i.Q3)("",!0),(0,i.Lk)("label",l,[s.isNormalSpeed?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("p",u,"введите скорость больше нуля")),s.isNormalSpeed?((0,i.uX)(),(0,i.CE)("p",p,"скорость слов/минута")):(0,i.Q3)("",!0),(0,i.Lk)("input",{type:"number",class:"speed",placeholder:"слов в минуту",onInput:e[4]||(e[4]=(...t)=>o.changeSpeed&&o.changeSpeed(...t)),value:"300"},null,32)]),(0,i.Lk)("div",x,"времени на чтение: "+(0,a.v_)(s.timeForRead)+" секунд",1)])])}var v={mounted(){document.addEventListener("keydown",this.keyDown)},data(){return{text:"Ожидание текста",currentText:"",currentTextNotReady:"",textArr:[],wordIndex:0,speed:200,timeForRead:0,speedInfo:300,isNormalSpeed:!0,isStarted:!1,intervalId:""}},methods:{changeActiveText(t){this.currentTextNotReady=t.target.value.replace(/\n/g," "),this.currentText=this.currentTextNotReady,this.textArr=this.currentText.split(" "),this.text=this.currentText.split(" ")[0];for(let e=0;this.textArr.length>e;e++)"−"!==this.textArr[e]&&"–"!==this.textArr[e]&&"-"!==this.textArr[e]||this.textArr.splice(e,1);this.timeForRead=Math.round(this.speed*this.textArr.length/1e3)},keyDown(t){if("Backspace"!==t.key)return 0;""==this.text&&(this.text="Ожидание текста")},start(){this.isStarted=!0,""!=this.currentText&&(this.intervalId=setInterval((()=>{this.wordIndex<this.textArr.length?(this.text=this.textArr[this.wordIndex],this.wordIndex++):(clearInterval(this.intervalId),this.isStarted=!1,this.wordIndex=0)}),this.speed))},stop(){this.isStarted=!1,clearInterval(this.intervalId)},changeText(t){this.text=t},changeSpeed(t){t.target.value>0?(this.isNormalSpeed=!0,this.speedInfo=t.target.value,this.speed=Math.round(6e4/this.speedInfo)):this.isNormalSpeed=!1,this.timeForRead=Math.round(this.speed*this.textArr.length/60)},wordIndexChange(t){let e=t.target.selectionStart,r="",n=t.target.value;if(" "!=n[e-1]&&void 0!=n[e-1])while(" "!=n[e-1]&&void 0!=n[e-1])e--;for(let i=e;n.length>i;i++)if(" "!=n[e])r+=n[e],e++;else if(" "==n[e-1]||void 0==n[e+1])return r;for(let i=0;this.textArr.length>i;i++)this.textArr[i]==r&&(this.wordIndex=i);""==r&&(r="Ожидание текста"),this.text=r}}},g=r(262);const k=(0,g.A)(v,[["render",f],["__scopeId","data-v-03aee8ba"]]);var I=k,m={name:"App",components:{FronBlock:I}};const b=(0,g.A)(m,[["render",o]]);var w=b;(0,n.Ef)(w).mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,s){if(!n){var o=1/0;for(h=0;h<t.length;h++){n=t[h][0],i=t[h][1],s=t[h][2];for(var a=!0,d=0;d<n.length;d++)(!1&s||o>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[d])}))?n.splice(d--,1):(a=!1,s<o&&(o=s));if(a){t.splice(h--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[n,i,s]}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,o=n[0],a=n[1],d=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(d)var h=d(r)}for(e&&e(n);c<o.length;c++)s=o[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(h)},n=self["webpackChunktextreader"]=self["webpackChunktextreader"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(544)}));n=r.O(n)})();
//# sourceMappingURL=app.212cee53.js.map