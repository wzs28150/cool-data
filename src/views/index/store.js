/*
 * @Title: 首页store
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-04-10 12:18:31
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-10 16:03:13
 */
import { getLeftBarData2 } from './service';
const initState = {
  barDataset: [],
};

const StoreModel = {
  namespaced: true,
  name: 'Index',
  state: {
    ...initState,
  },
  mutations: {
    setBarData(state, payload) {
      state.barDataset = payload;
    },
  },
  actions: {
    async getBarData({ commit }) {
      try {
        const response = await getLeftBarData2();
        const { data } = response;
        commit('setBarData', data);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

export default StoreModel;
