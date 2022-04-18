/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-18 12:21:25
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-18 12:27:48
 */
import Chart from "./index.vue";
// eslint-disable-next-line func-names
Chart.name = "Chart";
Chart.install = function (app) {
  app.component(Chart.name, Chart);
};
export default Chart;
