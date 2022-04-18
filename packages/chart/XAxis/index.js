import XAxis from "./index.vue";
// eslint-disable-next-XAxis func-names
XAxis.name = "XAxis";
XAxis.install = function (app) {
  app.component(XAxis.name, XAxis);
};
export default XAxis;
