import scrollRankingBar3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
scrollRankingBar3.title = "滚动排序柱表3";
scrollRankingBar3.name = "scrollRankingBar3";
scrollRankingBar3.type = "rotation";
scrollRankingBar3.config = defaultOption;
scrollRankingBar3.install = function (app) {
  app.component(scrollRankingBar3.name, scrollRankingBar3);
};

export default scrollRankingBar3;
