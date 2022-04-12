import scrollRankingBar from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
scrollRankingBar.title = "滚动排序柱表1";
scrollRankingBar.name = "scrollRankingBar";
scrollRankingBar.type = "rotation";
scrollRankingBar.config = defaultOption;
scrollRankingBar.install = function (app) {
  app.component(scrollRankingBar.name, scrollRankingBar);
};

export default scrollRankingBar;
