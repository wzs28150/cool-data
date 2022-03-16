import Background from "./index.vue";
// import Background1 from './bg/1.jpg'

// eslint-disable-next-line func-names
export const list = [];
for (let i = 0; i < 24; i++) {
  list[i] = `/bg/${i + 1}.jpg`;
}
Background.install = function (Vue) {
  Vue.component(Background.name, Background);
};

export default Background;
