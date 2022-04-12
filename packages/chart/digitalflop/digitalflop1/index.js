/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-07 16:31:19
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-11 15:45:05
 */
import digitalflop1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
digitalflop1.title = "数字翻牌器1";
digitalflop1.name = "digitalflop1";
digitalflop1.type = "digitalflop";
digitalflop1.config = defaultOption;
digitalflop1.install = function (app) {
  app.component(digitalflop1.name, digitalflop1);
};

export default digitalflop1;
