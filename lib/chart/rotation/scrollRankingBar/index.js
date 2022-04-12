import{ref as t,getCurrentInstance as r,onMounted as e,onBeforeUnmount as n,watch as o,reactive as i,computed as a,onUnmounted as c,openBlock as u,createElementBlock as l,unref as s,createElementVNode as f,normalizeStyle as p,Fragment as h,renderList as v,toDisplayString as y}from"vue";function m(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function d(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function g(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function w(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b,x,O=(b=function(t){var r=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var u=s(t,r,e);if("normal"===u.type){if(n=e.done?v:p,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",v="completed",y={};function m(){}function d(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(A([])));x&&x!==e&&n.call(x,i)&&(w=x);var O=g.prototype=m.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}return d.prototype=g,u(O,"constructor",g),u(g,"constructor",d),d.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},j(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new k(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},b(x={exports:{}},x.exports),x.exports);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function k(t,r){for(var e in r)t[e]&&"object"===j(t[e])?k(t[e],r[e]):"object"!==j(r[e])?t[e]=r[e]:t[e]=L(r[e],!0);return t}function L(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t)return t;var e=JSON.parse,n=JSON.stringify;if(!r)return e(n(t));var o=t instanceof Array?[]:{};if(t&&"object"===j(t))for(var i in t)Object.getOwnPropertyDescriptor(t,i)&&(t[i]&&"object"===j(t[i])?o[i]=L(t[i],!0):o[i]=t[i]);return o}function E(o,i){var a=t(0),c=t(0),u=r(),l=function(){var t=u.refs[o];a.value=t?t.clientWidth:0,c.value=t?t.clientHeight:0,t?a.value&&c.value||console.warn("cool-data: Component width or height is 0px, rendering abnormality may occur!"):console.warn("cool-data: Failed to get dom node, component rendering may be abnormal!"),i&&i(a.value,c.value)},s=function(t,r){var e;return function(){clearTimeout(e);var n=this,o=arguments;e=setTimeout((function(){r&&r.apply(n,o)}),t)}}(100,l);return e((function(){l(),window.addEventListener("resize",s)})),n((function(){window.removeEventListener("resize",s)})),{width:a,height:c}}var S={data:[],dataset:{dimensions:["车牌号","里程数(km)"],source:[{"车牌号":"京A12341","里程数(km)":"80.2"},{"车牌号":"京A12342","里程数(km)":"134.2"},{"车牌号":"京A12343","里程数(km)":"60.2"},{"车牌号":"京A12344","里程数(km)":"30.2"},{"车牌号":"京A12345","里程数(km)":"20.2"},{"车牌号":"京A12341","里程数(km)":"90.2"},{"车牌号":"京A12342","里程数(km)":"55.2"},{"车牌号":"京A12343","里程数(km)":"100.2"},{"车牌号":"京A12344","里程数(km)":"120.2"},{"车牌号":"京A12345","里程数(km)":"15.2"}]},rowNum:5,waitTime:3e3,carousel:"single",unit:"",sort:!0,valueFormatter:null},_=function(t,r){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])},_(t,r)};var A=function(t){function r(r,e,n,o,i,a){var c=t.call(this,i)||this;return c.x=null==r?0:r,c.y=null==e?0:e,c.x2=null==n?1:n,c.y2=null==o?0:o,c.type="linear",c.global=a||!1,c}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}_(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}(r,t),r}(function(){function t(t){this.colorStops=t||[]}return t.prototype.addColorStop=function(t,r){this.colorStops.push({offset:t,color:r})},t}());function P(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function T(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?P(Object(e),!0).forEach((function(r){d(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}new A(0,1,0,0,[{offset:0,color:"rgba(0,228,255,1)"},{offset:1,color:"rgba(0,155,255,0.6)"}]),new A(0,1,0,0,[{offset:0,color:"rgba(20,231,231,1)"},{offset:1,color:"rgba(20,201,231,0.6)"}]),new A(0,1,0,0,[{offset:0,color:"rgba(47,114,235,1)"},{offset:1,color:"rgba(47,84,235,0.6)"}]),new A(0,1,0,0,[{offset:0,color:"rgba(40,230,169,1)"},{offset:1,color:"rgba(40,201,169,0.6)"}]);var I={class:"ranking-info"},N={class:"rank"},F=["innerHTML"],D={class:"ranking-value"},G={class:"ranking-column"},H=[f("div",{class:"shine"},null,-1)],M={props:{option:{type:Object,default:function(){return{}}},dataset:{type:Object,default:function(){return{}}},theme:{type:Object}},setup:function(t){var r=t;o((function(){return r.option}),(function(){_(),n.animationIndex=0,x()}));var n=i({ref:"scroll-ranking-bar",rowsData:[],rows:[],heights:[],animationIndex:0,animationHandler:"",updater:0}),d=E(n.ref,(function(){A()})).height,g=a((function(){return k(L(S,!0),r.option||[])})),b=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=g.value,e=r.rowNum,o=r.data,i=d.value/e;n.avgHeight=i,t||(n.heights=new Array(o.length).fill(i))},x=function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t||(t=g.value.dataset),t.dimensions){var r=[];t.source.map((function(e,n){r[n]={name:e[t.dimensions[0]],value:e[t.dimensions[1]]}})),g.value.data=r}}(),function(){var t=g.value,r=t.data,e=t.rowNum;t.sort&&r.sort((function(t,r){var e=t.value,n=r.value;return parseInt(e)>parseInt(n)?-1:parseInt(e)<parseInt(n)?1:parseInt(e)===parseInt(n)?0:void 0}));var o=r.map((function(t){return t.value})),i=Math.min.apply(Math,w(o))||0,a=Math.abs(i),c=(Math.max.apply(Math,w(o))||0)+a,u=(r=r.map((function(t,r){return T(T({},t),{},{ranking:r+1,percent:(parseInt(t.value)+a)/c*100})}))).length;u>e&&u<2*e&&(r=[].concat(w(r),w(r))),r=r.map((function(t,r){return T(T({},t),{},{scroll:r})})),n.rowsData=r,n.rows=r}(),b(),j(!0)},j=function(){var t=function(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){m(i,n,o,a,c,"next",t)}function c(t){m(i,n,o,a,c,"throw",t)}a(void 0)}))}}(O.mark((function t(){var r,e,o,i,a,c,u,l,s,f,p,h,v,y,m=arguments;return O.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=m.length>0&&void 0!==m[0]&&m[0],o=n.avgHeight,i=n.animationIndex,a=n.rowsData,c=n.updater,u=g.value,l=u.waitTime,s=u.carousel,f=u.rowNum,p=a.length,!(f>=p)){t.next=6;break}return t.abrupt("return");case 6:if(!e){t.next=11;break}return t.next=9,new Promise((function(t){return setTimeout(t,l)}));case 9:if(c===n.updater){t.next=11;break}return t.abrupt("return");case 11:return h="single"===s?1:f,(v=a.slice(i)).push.apply(v,w(a.slice(0,i))),n.rows=v.slice(0,f+1),n.heights=new Array(p).fill(o),t.next=18,new Promise((function(t){return setTimeout(t,300)}));case 18:if(c===n.updater){t.next=20;break}return t.abrupt("return");case 20:(r=n.heights).splice.apply(r,[0,h].concat(w(new Array(h).fill(0)))),(y=(i+=h)-p)>=0&&(i=y),n.animationIndex=i,n.animationHandler=setTimeout(j,l-300);case 26:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=n.animationHandler,r=n.updater;n.updater=(r+1)%999999,t&&clearTimeout(t)},A=function(){g.value&&b(!0)};return e((function(){x()})),c((function(){_()})),function(t,r){return u(),l("div",{class:"scroll-ranking-bar",ref:s(n).ref},[f("div",{class:"dv-scroll-ranking-board-inner",style:p("height: ".concat(s(d),"px;"))},[(u(!0),l(h,null,v(s(n).rows,(function(t,r){return u(),l("div",{class:"row-item",key:t.toString()+t.scroll,style:p("height: ".concat(s(n).heights[r],"px;"))},[f("div",I,[f("div",N,"No."+y(t.ranking),1),f("div",{class:"info-name",innerHTML:t.name},null,8,F),f("div",D,y(s(g).valueFormatter?s(g).valueFormatter(t):t.value+s(g).unit),1)]),f("div",G,[f("div",{class:"inside-column",style:p("width: ".concat(t.percent,"%;"))},H,4)])],4)})),128))],4)],512)}},__file:"packages/chart/rotation/scrollRankingBar/index.vue",title:"滚动排序柱表1",name:"scrollRankingBar",type:"rotation"};M.config=S,M.install=function(t){t.component(M.name,M)};export{M as default};