import Candle1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Candle1.title = "基础K线图";
Candle1.name = "Candle1";
Candle1.type = "candle";
Candle1.config = defaultOption;
Candle1.install = function (app) {
  app.component(Candle1.name, Candle1);
};

export default Candle1;
