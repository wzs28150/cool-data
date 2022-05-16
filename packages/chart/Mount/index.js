import Mount from './index.vue';
// eslint-disable-next-line func-names
Mount.name = 'Mount';
Mount.install = function (app) {
  app.component(Mount.name, Mount);
};
export default Mount;
