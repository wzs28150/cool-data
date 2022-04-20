import Legend from "./index.vue";
// eslint-disable-next-line func-names
Legend.name = "Legend";
Legend.install = function (app) {
  app.component(Legend.name, Legend);
};
export default Legend;
