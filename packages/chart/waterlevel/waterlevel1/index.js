import WaterLevel1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
WaterLevel1.title = "水位图1";
WaterLevel1.name = "WaterLevel1";
WaterLevel1.type = "waterlevel";
WaterLevel1.config = defaultOption;
WaterLevel1.install = function (app) {
  app.component(WaterLevel1.name, WaterLevel1);
};

export default WaterLevel1;
