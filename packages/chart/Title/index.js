/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-18 12:23:40
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-18 12:28:20
 */
import Title from "./index.vue";
// eslint-disable-next-Title func-names
Title.name = "Title";
Title.install = function (app) {
  app.component(Title.name, Title);
};
export default Title;
