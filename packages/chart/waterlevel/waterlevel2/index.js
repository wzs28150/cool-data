import WaterLevel2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
WaterLevel2.title = "水位图2";
WaterLevel2.name = "WaterLevel2";
WaterLevel2.type = "waterlevel";
WaterLevel2.config = defaultOption;
WaterLevel2.install = function (app) {
  app.component(WaterLevel2.name, WaterLevel2);
};

export default WaterLevel2;
