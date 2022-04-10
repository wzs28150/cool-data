import{ref as e,getCurrentInstance as t,onMounted as r,onBeforeUnmount as o,reactive as n,watch as a,computed as i,onUnmounted as l,openBlock as c,createElementBlock as u,unref as s,normalizeStyle as h,Fragment as f,renderList as d,createCommentVNode as p}from"vue";function y(e,t,r,o,n,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(o,n)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function b(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g,w,x=(g=function(e){var t=function(e){var t,r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var n=t&&t.prototype instanceof m?t:m,a=Object.create(n.prototype),i=new A(o||[]);return a._invoke=function(e,t,r){var o=h;return function(n,a){if(o===d)throw new Error("Generator is already running");if(o===p){if("throw"===n)throw a;return E()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var l=L(i,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var c=s(e,t,r);if("normal"===c.type){if(o=r.done?p:f,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=p,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",y={};function m(){}function v(){}function b(){}var g={};c(g,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==r&&o.call(x,a)&&(g=x);var S=b.prototype=m.prototype=Object.create(g);function C(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(n,a,i,l){var c=s(e[n],e,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&o.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var n;this._invoke=function(e,o){function a(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(a,a):a()}}function L(e,r){var o=e.iterator[r.method];if(o===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var n=s(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,y;var a=n.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:E}}function E(){return{value:t,done:!0}}return v.prototype=b,c(S,"constructor",b),c(b,"constructor",v),v.displayName=c(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,l,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},C(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new k(u(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(S),c(S,l,"Generator"),c(S,a,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return l.type="throw",l.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;j(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:T(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},g(w={exports:{}},w.exports),w.exports);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function C(e,t){for(var r in t)e[r]&&"object"===S(e[r])?C(e[r],t[r]):"object"!==S(t[r])?e[r]=t[r]:e[r]=k(t[r],!0);return e}function k(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return e;var r=JSON.parse,o=JSON.stringify;if(!t)return r(o(e));var n=e instanceof Array?[]:{};if(e&&"object"===S(e))for(var a in e)Object.getOwnPropertyDescriptor(e,a)&&(e[a]&&"object"===S(e[a])?n[a]=k(e[a],!0):n[a]=e[a]);return n}function L(n,a){var i=e(0),l=e(0),c=t(),u=function(){var e=c.refs[n];i.value=e?e.clientWidth:0,l.value=e?e.clientHeight:0,e?i.value&&l.value||console.warn("cool-data: Component width or height is 0px, rendering abnormality may occur!"):console.warn("cool-data: Failed to get dom node, component rendering may be abnormal!"),a&&a(i.value,l.value)},s=function(e,t){var r;return function(){clearTimeout(r);var o=this,n=arguments;r=setTimeout((function(){t&&t.apply(o,n)}),e)}}(100,u);return r((function(){u(),window.addEventListener("resize",s)})),o((function(){window.removeEventListener("resize",s)})),{width:i,height:l}}var O={header:[],data:[],dataset:{dimensions:["车牌号","里程数(km)"],source:[{"车牌号":"京A12341","里程数(km)":"134.2"},{"车牌号":"京A12342","里程数(km)":"134.2"},{"车牌号":"京A12343","里程数(km)":"134.2"},{"车牌号":"京A12344","里程数(km)":"134.2"},{"车牌号":"京A12345","里程数(km)":"134.2"},{"车牌号":"京A12341","里程数(km)":"134.2"},{"车牌号":"京A12342","里程数(km)":"134.2"},{"车牌号":"京A12343","里程数(km)":"134.2"},{"车牌号":"京A12344","里程数(km)":"134.2"},{"车牌号":"京A12345","里程数(km)":"134.2"}]},rowNum:5,headerBGC:"#00BAFF",oddRowBGC:"#003B51",evenRowBGC:"#0A2732",headerHeight:45,index:!0,indexHeader:"#",carousel:"single",columnWidth:[50],align:["center","left","center"],waitTime:3e3,hoverPause:!0},j=function(e,t){return j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},j(e,t)};var A=function(e){function t(t,r,o,n,a,i){var l=e.call(this,a)||this;return l.x=null==t?0:t,l.y=null==r?0:r,l.x2=null==o?1:o,l.y2=null==n?0:n,l.type="linear",l.global=i||!1,l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t}(function(){function e(e){this.colorStops=e||[]}return e.prototype.addColorStop=function(e,t){this.colorStops.push({offset:e,color:t})},e}()),T={version:1,themeName:"easyv",theme:{color:[new A(0,1,0,0,[{offset:0,color:"rgba(0,228,255,1)"},{offset:1,color:"rgba(0,155,255,0.6)"}]),new A(0,1,0,0,[{offset:0,color:"rgba(20,231,231,1)"},{offset:1,color:"rgba(20,201,231,0.6)"}]),new A(0,1,0,0,[{offset:0,color:"rgba(47,114,235,1)"},{offset:1,color:"rgba(47,84,235,0.6)"}]),new A(0,1,0,0,[{offset:0,color:"rgba(40,230,169,1)"},{offset:1,color:"rgba(40,201,169,0.6)"}]),"#00d68a"],backgroundColor:"",textStyle:{color:"#eeeeee"},title:{textStyle:{color:"#eeeeee"},subtextStyle:{color:"#aaaaaa"}},line:{itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"circle",smooth:!1},radar:{itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"circle",smooth:!1},bar:{itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},pie:{itemStyle:{borderWidth:0,borderColor:"#ccc"},label:{textBorderColor:"transparent",color:"#eee",fontSize:8,fontWeight:"lighter"}},scrollTable:{color:{headerBGC:"#00267b",oddRowBGC:"#01114c",evenRowBGC:"#060737"}},scatter:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},boxplot:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},parallel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},sankey:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},funnel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},gauge:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},candlestick:{itemStyle:{color:"#fd1050",color0:"#0cf49b",borderColor:"#fd1050",borderColor0:"#0cf49b",borderWidth:1}},graph:{itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaaaaa"},symbolSize:4,symbol:"circle",smooth:!1,color:["#1890ff","#1ee7e7","#2f54eb","#bae7ff","#00d68a"],label:{color:"#eeeeee"}},map:{itemStyle:{areaColor:"#eee",borderColor:"#444",borderWidth:.5},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},geo:{itemStyle:{areaColor:"#eee",borderColor:"#444",borderWidth:.5},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!1,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,color:"#eeeeee"},splitLine:{show:!1,lineStyle:{color:["#aaaaaa"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!1,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,color:"#ffffff"},splitLine:{show:!0,lineStyle:{type:"dashed",color:["#aaaaaa"],opacity:.5}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!0,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,color:"#ffffff"},splitLine:{show:!0,lineStyle:{color:["#aaaaaa"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!0,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,color:"#ffffff"},splitLine:{show:!0,lineStyle:{color:["#aaaaaa"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},toolbox:{iconStyle:{borderColor:"#999999"},emphasis:{iconStyle:{borderColor:"#666666"}}},legend:{textStyle:{color:"#eeeeee"}},tooltip:{axisPointer:{lineStyle:{color:"#eeeeee",width:"1"},crossStyle:{color:"#eeeeee",width:"1"}}},timeline:{lineStyle:{color:"#eeeeee",width:1},itemStyle:{color:"#dd6b66",borderWidth:1},controlStyle:{color:"#eeeeee",borderColor:"#eeeeee",borderWidth:.5},checkpointStyle:{color:"#e43c59",borderColor:"#c23531"},label:{color:"#eeeeee"},emphasis:{itemStyle:{color:"#a9334c"},controlStyle:{color:"#eeeeee",borderColor:"#eeeeee",borderWidth:.5},label:{color:"#eeeeee"}}},visualMap:{color:["#391ddc","#d88273","#f6efa6"]},dataZoom:{backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"rgba(255,255,255,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:"#eeeeee"}},markPoint:{label:{color:"#eeeeee"},emphasis:{label:{color:"#eeeeee"}}}}};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=["align","innerHTML"],G=["align","innerHTML","onClick","onMouseenter"],W={props:{option:{type:Object,default:function(){return{}}},dataset:{type:Object,default:function(){return{}}},theme:{type:Object}},emits:["click","mouseover"],setup:function(e,t){var o=this,m=t.expose,v=t.emit,g=e,w=T.theme,S=n({ref:"scroll-table",header:[],rowsData:[],rows:[],widths:[],heights:[],avgHeight:0,aligns:[],animationIndex:0,animationHandler:"",updater:0,needCalc:!1});a((function(){return g.option}),(function(){D(),S.animationIndex=0,J()}));var j=L(S.ref,(function(){z()})),A=j.width,E=j.height,W=i((function(){return C(k(O,!0),g.option||[])})),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e||(e=W.value.dataset),e.dimensions?(W.value.header=[],W.value.header=b(e.dimensions),e.source.map((function(t,r){W.value.data[r]=e.dimensions.map((function(e){return t[e]}))}))):e.source&&(W.value.header=[],W.value.header=b(e.source[0]),W.value.data=e.source.slice(1))},H=function(){var e=W.value,t=e.data,r=e.index,o=e.headerBGC,n=e.rowNum;r&&(t=t.map((function(e,t){e=b(e);var r='<span class="index" style="background-color: '.concat(o,';">').concat(t+1,"</span>");return e.unshift(r),e})));var a=(t=t.map((function(e,t){return{ceils:e,rowIndex:t}}))).length;a>n&&a<2*n&&(t=[].concat(b(t),b(t))),t=t.map((function(e,t){return P(P({},e),{},{scroll:t})})),S.rowsData=t,S.rows=t},I=function(){var e=S.rowsData,t=W.value,r=t.columnWidth,o=t.header,n=r.reduce((function(e,t){return e+t}),0),a=0;e[0]?a=e[0].ceils.length:o.length&&(a=o.length);var i=(A.value-n)/(a-r.length),l=new Array(a).fill(i);S.widths=C(l,r)},N=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=S.header,r=W.value,o=r.headerHeight,n=r.rowNum,a=r.data,i=E.value;t.length&&(i-=o);var l=i/n;S.avgHeight=l,e||(S.heights=new Array(a.length).fill(l))},R=function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){y(a,o,n,i,l,"next",e)}function l(e){y(a,o,n,i,l,"throw",e)}i(void 0)}))}}(x.mark((function e(){var t,r,o,n,a,i,l,c,u,s,h,f,d,p,y=arguments;return x.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y.length>0&&void 0!==y[0]&&y[0],S.needCalc&&(H(),N(),S.needCalc=!1),o=S.avgHeight,n=S.animationIndex,a=S.rowsData,i=S.updater,l=W.value,c=l.waitTime,u=l.carousel,s=l.rowNum,h=a.length,!(s>=h)){e.next=8;break}return e.abrupt("return");case 8:if(!r){e.next=13;break}return e.next=11,new Promise((function(e){return setTimeout(e,c)}));case 11:if(i===S.updater){e.next=13;break}return e.abrupt("return");case 13:return f="single"===u?1:s,(d=a.slice(n)).push.apply(d,b(a.slice(0,n))),S.rows=d.slice(0,"page"===u?2*s:s+1),S.heights=new Array(h).fill(o),e.next=20,new Promise((function(e){return setTimeout(e,300)}));case 20:if(i===S.updater){e.next=22;break}return e.abrupt("return");case 22:(t=S.heights).splice.apply(t,[0,f].concat(b(new Array(f).fill(0)))),(p=(n+=f)-h)>=0&&(n=p),S.animationIndex=n,S.animationHandler=setTimeout(R,c-300);case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=S.animationHandler,t=S.updater;S.updater=(t+1)%999999,e&&clearTimeout(e)},F=function(e,t,r,o,n){e&&M("mouseover",t,r,o,n),W.value.hoverPause&&(e?D():R(!0))},M=function(e,t,r,o,n){var a=o.ceils,i=o.rowIndex;v(e,{row:a,ceil:n,rowIndex:i,columnIndex:r})},z=function(){W.value&&(I(),N())},J=function(){var e,t,r,o,n,a,i;!function(){var e=g.dataset;e.dimensions&&(W.value.dataset=e);var t=null;(t=g.theme?g.theme:w).scrollTable&&(W.value.headerBGC=t.scrollTable.color.headerBGC,W.value.oddRowBGC=t.scrollTable.color.oddRowBGC,W.value.evenRowBGC=t.scrollTable.color.evenRowBGC)}(),B(),e=W.value,t=e.header,r=e.index,o=e.indexHeader,t.length?(t=b(t),r&&t.unshift(o),S.header=t):S.header=[],H(),I(),N(),n=S.header.length,a=new Array(n).fill("left"),i=W.value.align,S.aligns=C(a,i),R(!0)};return r((function(){J()})),l((function(){D()})),m({updateRows:function(e,t){var r=S.animationHandler;B(e),S.needCalc=!0,"number"==typeof t&&(o.animationIndex=t),r||R(!0)}}),function(e,t){return c(),u("div",{class:"scroll-table",ref:s(S).ref},[s(S).header.length&&s(W)?(c(),u("div",{key:0,class:"header",style:h("background-color: ".concat(s(W).headerBGC,";"))},[(c(!0),u(f,null,d(s(S).header,(function(e,t){return c(),u("div",{class:"header-item",key:"".concat(e).concat(t),style:h("\n          height: ".concat(s(W).headerHeight,"px;\n          line-height: ").concat(s(W).headerHeight,"px;\n          width: ").concat(s(S).widths[t],"px;\n        ")),align:s(S).aligns[t],innerHTML:e},null,12,_)})),128))],4)):p("v-if",!0),s(W)?(c(),u("div",{key:1,class:"rows",style:h("height: ".concat(s(E)-(s(S).header.length?s(W).headerHeight:0),"px;"))},[(c(!0),u(f,null,d(s(S).rows,(function(e,r){return c(),u("div",{class:"row-item",key:"".concat(e.toString()).concat(e.scroll),style:h("\n          height: ".concat(s(S).heights[r],"px;\n          line-height: ").concat(s(S).heights[r],"px;\n          background-color: ").concat(s(W)[e.rowIndex%2==0?"evenRowBGC":"oddRowBGC"],";\n        "))},[(c(!0),u(f,null,d(e.ceils,(function(o,n){return c(),u("div",{class:"ceil",key:"".concat(o).concat(r).concat(n),style:h("width: ".concat(s(S).widths[n],"px;")),align:s(S).aligns[n],innerHTML:o,onClick:function(t){return M("click",r,n,e,o)},onMouseenter:function(t){return F(!0,r,n,e,o)},onMouseleave:t[0]||(t[0]=function(e){return F(!1)})},null,44,G)})),128))],4)})),128))],4)):p("v-if",!0)],512)}},__file:"packages/chart/rotation/scrollTable/index.vue",title:"滚动表格",name:"ScrollTable",type:"rotation"};W.config=O,W.install=function(e){e.component(W.name,W)};export{W as default};