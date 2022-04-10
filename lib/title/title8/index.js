import{ref as o,getCurrentInstance as t,onMounted as e,onBeforeUnmount as r,reactive as l,openBlock as n,createElementBlock as i,unref as c,createElementVNode as a,normalizeStyle as f,toDisplayString as s}from"vue";function u(o){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},u(o)}function d(o,t){for(var e in t)o[e]&&"object"===u(o[e])?d(o[e],t[e]):"object"!==u(t[e])?o[e]=t[e]:o[e]=p(t[e],!0);return o}function p(o){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!o)return o;var e=JSON.parse,r=JSON.stringify;if(!t)return e(r(o));var l=o instanceof Array?[]:{};if(o&&"object"===u(o))for(var n in o)Object.getOwnPropertyDescriptor(o,n)&&(o[n]&&"object"===u(o[n])?l[n]=p(o[n],!0):l[n]=o[n]);return l}function x(l,n){var i=o(0),c=o(0),a=t(),f=function(){var o=a.refs[l];i.value=o?o.clientWidth:0,c.value=o?o.clientHeight:0,o?i.value&&c.value||console.warn("cool-data: Component width or height is 0px, rendering abnormality may occur!"):console.warn("cool-data: Failed to get dom node, component rendering may be abnormal!"),n&&n(i.value,c.value)},s=function(o,t){var e;return function(){clearTimeout(e);var r=this,l=arguments;e=setTimeout((function(){t&&t.apply(r,l)}),o)}}(100,f);return e((function(){f(),window.addEventListener("resize",s)})),r((function(){window.removeEventListener("resize",s)})),{width:i,height:c}}var y=["width","height"],h=["id"],g=a("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null,-1),m=a("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null,-1),v=["flood-color"],C=a("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1),b=a("feMerge",null,[a("feMergeNode",{in:"softGlowColored"}),a("feMergeNode",{in:"SourceGraphic"})],-1),w=["id"],S=[a("feOffset",{result:"offOut",in:"SourceGraphic",dx:"0",dy:"0"},null,-1),a("feGaussianBlur",{result:"blurOut",in:"offOut",stdDeviation:"10"},null,-1),a("feBlend",{in:"SourceGraphic",in2:"blurOut",mode:"multiply"},null,-1)],G=["id"],O=a("feComponentTransfer",{in:"SourceAlpha"},[a("feFuncA",{type:"table",tableValues:"1 0"})],-1),M=a("feGaussianBlur",{stdDeviation:"10"},null,-1),W=a("feOffset",{dx:"0",dy:"1",result:"offsetblur"},null,-1),k=["flood-color"],A=a("feComposite",{in2:"offsetblur",operator:"in"},null,-1),N=a("feComposite",{in2:"SourceAlpha",operator:"in"},null,-1),j=a("feMerge",null,[a("feMergeNode",{in:"SourceGraphic"}),a("feMergeNode")],-1),B=["id"],D=["stop-color"],F=["stop-color","stop-opacity"],L=["id"],T=["stop-color"],z=["stop-color","stop-opacity"],I=["stop-color","stop-opacity"],_=["id"],E=["stop-color"],J=["stop-color","stop-opacity"],H=["stop-color"],P=["id"],R=["stop-color"],V=["stop-color","stop-opacity"],q=["stop-color"],K=["x","y","fill"],Q=["d"],U={props:{color:{type:Array,default:function(){return[]}},title:{type:String}},setup:function(t){var r,u=t,U=(r?"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx":"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx").replace(/[xy]/g,(function(o){var t=16*Math.random()|0;return("x"==o?t:3&t|8).toString(16)})),X=o(),Y=l({ref:"title-7",filterId:"title-7-filterId-".concat(U),defaultColor:["#7fffff","#57fffc","#009caa","#00ffc5","#0090ff"],mergedColor:[],titleWidth:0}),Z=x(Y.ref),$=Z.width,oo=Z.height,to=function(){Y.mergedColor=d(p(Y.defaultColor,!0),u.color||[])};return e((function(){to(),Y.titleWidth=X.value.getBoundingClientRect().width})),function(o,e){return n(),i("div",{class:"title-7 title",ref:c(Y).ref},[(n(),i("svg",{class:"border-svg-container",width:c($),height:c(oo)},[a("defs",null,[a("filter",{id:c(Y).filterId,height:"150%",width:"150%",x:"-25%",y:"-25%"},[g,m,a("feFlood",{"flood-color":c(Y).mergedColor[1],result:"glowColor"},null,8,v),C,b],8,h),a("filter",{id:"f3-".concat(c(U)),x:"-120%",y:"-120%",width:"400%",height:"400%"},S,8,w),a("filter",{id:"inset-shadow-".concat(c(U)),x:"-50%",y:"-50%",width:"200%",height:"200%"},[O,M,W,a("feFlood",{"flood-color":c(Y).mergedColor[0],"flood-opacity":"0.5",result:"color"},null,8,k),A,N,j],8,G),a("linearGradient",{id:"linear-".concat(c(U)),x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[a("stop",{offset:"0%","stop-color":c(Y).mergedColor[0]},null,8,D),a("stop",{offset:"100%","stop-color":c(Y).mergedColor[0],"stop-opacity":.2},null,8,F)],8,B),a("linearGradient",{id:"linear-bg-".concat(c(U)),x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[a("stop",{offset:"0%","stop-color":c(Y).mergedColor[0],"stop-opacity":0},null,8,T),a("stop",{offset:"60%","stop-color":c(Y).mergedColor[0],"stop-opacity":.2},null,8,z),a("stop",{offset:"100%","stop-color":c(Y).mergedColor[0],"stop-opacity":.3},null,8,I)],8,L),a("linearGradient",{id:"linear-left-".concat(c(U)),x1:"0%",y1:"0%",x2:"100%",y2:"0%"},[a("stop",{offset:"0%","stop-color":c(Y).mergedColor[2],"stop-opacity":0},null,8,E),a("stop",{offset:"60%","stop-color":c(Y).mergedColor[2],"stop-opacity":.6},null,8,J),a("stop",{offset:"100%","stop-color":c(Y).mergedColor[2]},null,8,H)],8,_),a("linearGradient",{id:"linear-right-".concat(c(U)),x1:"0%",y1:"0%",x2:"100%",y2:"0%"},[a("stop",{offset:"0%","stop-color":c(Y).mergedColor[2]},null,8,R),a("stop",{offset:"60%","stop-color":c(Y).mergedColor[2],"stop-opacity":.6},null,8,V),a("stop",{offset:"100%","stop-color":c(Y).mergedColor[2],"stop-opacity":0},null,8,q)],8,P)]),a("text",{class:"title-7-title",x:"".concat(.03*c($)),y:"".concat(.2*c(oo)+20),fill:c(Y).mergedColor[1],"font-size":"36","font-weight":"bold","text-anchor":"left","dominant-baseline":"middle",ref_key:"text",ref:X,style:f("text-shadow: 0 0 5px ".concat(c(Y).mergedColor[1],";"))},s(t.title),13,K),a("path",{d:"M0 ".concat(.6*c(oo)+32," C ").concat(.01*c($)," ").concat(.5*c(oo)+32,",").concat(.01*c($)," ").concat(.4*c(oo)+32," , ").concat(.02*c($)," ").concat(.4*c(oo)+32," L").concat(c(Y).titleWidth+.03*c($)+.01*c($)," ").concat(.4*c(oo)+32," C ").concat(c(Y).titleWidth+.03*c($)+.02*c($)," ").concat(.4*c(oo)+32,",").concat(c(Y).titleWidth+.03*c($)+.02*c($)," ").concat(.2*c(oo)+16,",").concat(c(Y).titleWidth+.03*c($)+.03*c($)," ").concat(.2*c(oo)+16," L").concat(c($)," ").concat(.2*c(oo)+16),stroke:"#8aaafb","stroke-width":"1",fill:"none"},null,8,Q)],8,y))],512)}},__file:"packages/title/title8/index.vue",height:86,name:"Title8",install:function(o){o.component(U.name,U)}};export{U as default};