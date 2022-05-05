/*
 * @Title: 首页store
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-04-10 12:18:31
 * @LastEditors: wzs
 * @LastEditTime: 2022-05-05 16:19:59
 */
import { getLeftBarData2 } from './service';
import { merge } from 'lodash';
const initState = {
  projectData: [
    {
      background: {
        color: '#1d1d1d', // 背景颜色
        img: '', // 背景图片
        particle: '', // 背景粒子
      },
      chart: [
        // {}
      ],
    },
  ],
};

const StoreModel = {
  namespaced: true,
  name: 'Project',
  state: {
    ...initState,
  },
  mutations: {
    addChartData(state, payload) {
      let chart = state.projectData.chart;
      state.projectData.chart = state.projectData.chart.concat(payload);
    },
    setChartPosition(state, payload) {
      const { index, x, y, pageIndex } = payload;
      const chartItem = state.projectData[pageIndex].chart[index];
      chartItem.x = x;
      chartItem.y = y;
      chartItem.active = true;
      state.projectData[pageIndex].chart[index] = chartItem;
    },
    setChartParam(state, payload) {
      const { index, x, y, w, h, pageIndex } = payload;
      merge(state.projectData[pageIndex].chart[index], { x, y, w, h })
    },
  },
  actions: {
    async addChartData({ commit }, payload) {
      try {
        // const response = await getLeftBarData2();
        // const { data } = response;
        commit('addChartData', payload);
        return true;
      } catch (error) {
        return false;
      }
    },
    async setChartPosition({ commit }, payload) {
      try {
        commit('setChartPosition', payload);
        return true;
      } catch (error) {
        return false;
      }
    },
    async setChartParam({ commit }, payload) {
      try {
        commit('setChartParam', payload);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

export default StoreModel;
