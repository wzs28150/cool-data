import Background from "./index.vue";
// import Background1 from './bg/1.jpg'

// eslint-disable-next-line func-names
Background.list = []
const bgFile = import.meta.globEager('./bg/*.jpg')
Object.keys(bgFile).forEach((item)=>{
  const bgItem = bgFile[item].default
  Background.list.push(bgItem)
})
Background.name = 'Background'
Background.install = function (Vue) {
  Vue.component(Background.name, Background);
};

export default Background;
