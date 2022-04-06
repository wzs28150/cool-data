import Background from "./index.vue";
import list from './bg';

// eslint-disable-next-line func-names
Background.list = list
Background.name = 'Background'
Background.install = function (Vue) {
  Vue.component(Background.name, Background);
};

export default Background;
