import Background from "./index.vue";
// import Background1 from './bg/1.jpg'

// eslint-disable-next-line func-names
export const localList = [];
export const webList = [];
for (let i = 0; i < 24; i++) {
  localList[i] = `/bg/${i + 1}.jpg`;
  webList[
    i
  ] = `https://gitee.com/harbin_kuchuang_network_wz666s/cool-data/raw/main/public/bg/${
    i + 1
  }.jpg`;
}
Background.install = function (Vue) {
  Vue.component(Background.name, Background);
};

export default Background;
