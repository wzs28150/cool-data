import SvgMapShow from "./index.vue";
SvgMapShow.demoData = {
  option: {}
}
SvgMapShow.install = function (Vue) {
  Vue.component(SvgMapShow.name, SvgMapShow);
};

export default SvgMapShow;
