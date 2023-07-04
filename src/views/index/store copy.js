/*
 * @Title: 首页store
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-04-10 12:18:31
 * @LastEditors: wzs
 * @LastEditTime: 2023-07-04 09:17:26
 */
import { getLeftMenu } from './service';
import { merge } from 'lodash';
const initState = {
  drawerFlag: false,
  drawerInfo: {
    title: '',
    size: 250,
    type: '',
  },
  menuList: [],
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
      console.log(payload);
      let chart = state.projectData[payload.pageIndex].chart;
      state.projectData[payload.pageIndex].chart =
        state.projectData[payload.pageIndex].chart.concat(payload);
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
      const { index, x, y, w, h, rotation, pageIndex } = payload;
      merge(state.projectData[pageIndex].chart[index], { x, y, w, h, rotation });
    },
    setDrawerFlag(state, payload) {
      state.drawerFlag = payload;
    },
    setDrawerInfo(state, payload) {
      state.drawerInfo = payload;
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
    async setDrawerFlag({ commit }, payload) {
      try {
        commit('setDrawerFlag', payload);
        return true;
      } catch (error) {
        return false;
      }
    },
    async setDrawerInfo({ commit }, payload) {
      try {
        commit('setDrawerInfo', payload);
        return true;
      } catch (error) {
        return false;
      }
    },
    async getLeftMenuList({commit}, payload) {}
  },
};

export default StoreModel;
