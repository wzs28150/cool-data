import Pie9 from './index.vue';
import defaultOption from './config';
// eslint-disable-next-line func-names
Pie9.title = '斑马条状环形图';
Pie9.name = 'Pie9';
Pie9.type = 'pie';
Pie9.config = defaultOption;
Pie9.install = function (app) {
  app.component(Pie9.name, Pie9);
};

export default Pie9;
