import scrollRankingBar4 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
scrollRankingBar4.title = "滚动排序柱表3";
scrollRankingBar4.name = "scrollRankingBar4";
scrollRankingBar4.type = "rotation";
scrollRankingBar4.config = defaultOption;
scrollRankingBar4.install = function (app) {
  app.component(scrollRankingBar4.name, scrollRankingBar4);
};

export default scrollRankingBar4;
