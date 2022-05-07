import Ring2 from './index.vue';
import defaultOption from './config';
// eslint-disable-next-line func-names
Ring2.title = '斑马条状环形图';
Ring2.name = 'Ring2';
Ring2.type = 'ring';
Ring2.config = defaultOption;
Ring2.install = function (app) {
  app.component(Ring2.name, Ring2);
};

export default Ring2;
