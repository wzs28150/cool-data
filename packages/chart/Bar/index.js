import Bar from "./index.vue";
// eslint-disable-next-line func-names
Bar.name = "Bar";
Bar.install = function (app) {
  app.component(Bar.name, Bar);
};
export default Bar;
