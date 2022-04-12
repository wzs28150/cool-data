import{ref as e,getCurrentInstance as t,onMounted as n,onBeforeUnmount as r,reactive as a,openBlock as o,createElementBlock as i,unref as f,createElementVNode as u,renderSlot as l,createStaticVNode as c}from"vue";function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function d(e,t){for(var n in t)e[n]&&"object"===s(e[n])?d(e[n],t[n]):"object"!==s(t[n])?e[n]=t[n]:e[n]=m(t[n],!0);return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return e;var n=JSON.parse,r=JSON.stringify;if(!t)return n(r(e));var a=e instanceof Array?[]:{};if(e&&"object"===s(e))for(var o in e)Object.getOwnPropertyDescriptor(e,o)&&(e[o]&&"object"===s(e[o])?a[o]=m(e[o],!0):a[o]=e[o]);return a}function p(a,o){var i=e(0),f=e(0),u=t(),l=function(){var e=u.refs[a];i.value=e?e.clientWidth:0,f.value=e?e.clientHeight:0,e?i.value&&f.value||console.warn("cool-data: Component width or height is 0px, rendering abnormality may occur!"):console.warn("cool-data: Failed to get dom node, component rendering may be abnormal!"),o&&o(i.value,f.value)},c=function(e,t){var n;return function(){clearTimeout(n);var r=this,a=arguments;n=setTimeout((function(){t&&t.apply(r,a)}),e)}}(100,l);return n((function(){l(),window.addEventListener("resize",c)})),r((function(){window.removeEventListener("resize",c)})),{width:i,height:f}}var g=["width","height"],y=[c('<rect x="38" y="40" width="4" height="10" fill="#fff"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform></rect><rect x="48" y="40" width="4" height="10" fill="#fff"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform></rect><rect x="58" y="40" width="4" height="10" fill="#fff"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform></rect>',3)],h={props:{color:{type:Array,default:function(){return[]}}},setup:function(t){var r=t,c=e(),s=a({ref:"loading-3",defaultColor:["#8aaafb","#8aaafb"],mergedColor:[],textHeight:0}),h=p(s.ref),v=h.width,b=h.height,x=function(){s.mergedColor=d(m(s.defaultColor,!0),r.color||[])};return n((function(){x(),s.textHeight=c.value.offsetHeight})),function(e,t){return o(),i("div",{class:"loading-3 data-loading",ref:f(s).ref},[(o(),i("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve",width:f(v),height:f(b)?f(b)-f(s).textHeight:0},y,8,g)),u("div",{class:"loading-text",ref_key:"text",ref:c},[l(e.$slots,"default")],512)],512)}},__file:"packages/loading/loading3/index.vue",name:"Loading3",install:function(e){e.component(h.name,h)}};export{h as default};