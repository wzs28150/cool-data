import Area from "./index.vue";
// eslint-disable-next-line func-names
Area.name = "Area";
Area.install = function (app) {
  app.component(Area.name, Area);
};
export default Area;
