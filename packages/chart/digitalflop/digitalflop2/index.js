/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-07 16:31:19
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-12 10:18:45
 */
import digitalflop2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
digitalflop2.title = "数字翻牌器2";
digitalflop2.name = "digitalflop2";
digitalflop2.type = "digitalflop";
digitalflop2.config = defaultOption;
digitalflop2.install = function (app) {
  app.component(digitalflop2.name, digitalflop2);
};

export default digitalflop2;
