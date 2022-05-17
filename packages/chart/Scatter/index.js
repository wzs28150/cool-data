import Scatter from "./index.vue";
// eslint-disable-next-line func-names
Scatter.name = "Scatter";
Scatter.install = function (app) {
  app.component(Scatter.name, Scatter);
};
export default Scatter;
