import scrollRankingBar2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
scrollRankingBar2.title = "滚动排序柱表2";
scrollRankingBar2.name = "scrollRankingBar2";
scrollRankingBar2.type = "rotation";
scrollRankingBar2.config = defaultOption;
scrollRankingBar2.install = function (app) {
  app.component(scrollRankingBar2.name, scrollRankingBar2);
};

export default scrollRankingBar2;
