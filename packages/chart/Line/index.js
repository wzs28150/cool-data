import Line from "./index.vue";
// eslint-disable-next-line func-names
Line.name = "Line";
Line.install = function (app) {
  app.component(Line.name, Line);
};
export default Line;
