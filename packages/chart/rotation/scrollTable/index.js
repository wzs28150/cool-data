/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-07 16:31:19
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-07 16:58:34
 */
import ScrollTable from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
ScrollTable.title = "滚动表格";
ScrollTable.name = "ScrollTable";
ScrollTable.type = "rotation";
ScrollTable.config = defaultOption;
ScrollTable.install = function (app) {
  app.component(ScrollTable.name, ScrollTable);
};

export default ScrollTable;
