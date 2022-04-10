/*
 * @Title: Store 入口
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-10 12:30:17
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-10 12:30:18
 */
import { createStore } from 'vuex';
import { importAllStore } from '@/utils/store';

export default createStore({
  modules: importAllStore(),
  getters: {}
})
