import{ref as g,openBlock as b,createElementBlock as n,normalizeClass as a,normalizeStyle as u}from"vue";var r={props:{img:{type:String},index:0},setup:function(r){var o=r,c=g(null);return o.img&&(c.value=o.img),function(g,o){return b(),n("div",{class:a("background ".concat(r.index?"background"+r.index:"")),style:u("".concat(c.value?"background-image: url("+c.value+")":""))},null,6)}},__file:"packages/background/background/index.vue"};r.list=["background/background/bg/1.jpg","background/background/bg/2.jpg","background/background/bg/3.jpg","background/background/bg/4.jpg","background/background/bg/5.jpg","background/background/bg/6.jpg","background/background/bg/7.jpg","background/background/bg/8.jpg","background/background/bg/9.jpg","background/background/bg/10.jpg","background/background/bg/11.jpg","background/background/bg/12.jpg","background/background/bg/13.jpg","background/background/bg/14.jpg","background/background/bg/15.jpg","background/background/bg/16.jpg","background/background/bg/17.jpg","background/background/bg/18.jpg","background/background/bg/19.jpg","background/background/bg/20.jpg","background/background/bg/21.jpg","background/background/bg/22.jpg","background/background/bg/23.jpg","background/background/bg/24.jpg"],r.name="Background",r.install=function(g){g.component(r.name,r)};export{r as default};