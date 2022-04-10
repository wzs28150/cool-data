/*
 * @Title: 公共全局store
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-10 12:18:31
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-10 16:21:28
 */
const initState = {

};

const StoreModel = {
  namespaced: true,
  name: 'global',
  state: {
    ...initState
  },
  mutations: {
    // changeLayoutCollapsed(state, payload) {
    //   state.collapsed = payload;
    // },
  },
  actions: {
    // async getMenuList({ commit }) {
    //   try {
    //     const response = await queryMenu();
    //     const { data } = response;
    //     commit('setMenuList', data);
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
  }
}



export default StoreModel;