import YAxis from "./index.vue";
// eslint-disable-next-YAxis func-names
YAxis.name = "YAxis";
YAxis.install = function (app) {
  app.component(YAxis.name, YAxis);
};
export default YAxis;
