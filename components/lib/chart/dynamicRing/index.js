import DynamicRing from "./index.vue";

// eslint-disable-next-line func-names
DynamicRing.demoData = {
  option: {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      right: "center",
      textStyle: {
        color: '#eee'
      }
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          color: '#fff',
          fontSize: 12,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            color: '#fff',
            fontWeight: "bold",
            scaleSize: 20
          },
        },
        labelLine: {
          show: false,
        },
   
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  },
};
DynamicRing.install = function (Vue) {
  Vue.component(DynamicRing.name, DynamicRing);
};

export default DynamicRing;
