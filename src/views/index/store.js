import { getLeftMenu } from './service';
const useIndexStore = defineStore('Index', {
  state: () => ({
    drawerFlag: false,
    drawerInfo: {
      title: '',
      size: 250,
      type: '',
    },
    menu: {
      top: [],
      bottom: [
        {
          title: '快捷键',
          icon: 'keybord',
          type: 'keybord',
          size: 250,
        },
      ],
    },
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
  }),
  actions: {
    async addChartData(payload) {
      try {
        // let chart = this.projectData[payload.pageIndex].chart;
        this.projectData[payload.pageIndex].chart =
          this.projectData[payload.pageIndex].chart.concat(payload);
        return true;
      } catch (error) {
        return false;
      }
    },
    async setDrawerFlag(payload) {
      try {
        this.drawerFlag = payload;
        return true;
      } catch (error) {
        return false;
      }
    },
    async setDrawerInfo(payload) {
      try {
        this.drawerInfo = payload;
        return true;
      } catch (error) {
        return false;
      }
    },
    async getLeftMenuList(payload) {
      try {
        const { data } = await getLeftMenu();
        // console.log(data.list);
        this.menu.top = data.list;
      } catch (error) {}
    },
  },
});

export default useIndexStore;
