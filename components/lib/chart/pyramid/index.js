import Pyramid from "./index.vue";

Pyramid.demoData = {
  option: {
    title: "企业培育",
    // 主体离边框距离
    distance: [50, 10],
    // 主体偏移值 (x,y)
    offset: [-30, 0],
    // 排序(max , min)优先
    sort: "max",
    // 颜色
    color: [
      "rgba(112, 245, 100, 0.8)",
      "rgba(84, 155, 180, 1.000)",
      "rgba(59, 94, 185, 1.000)",
      "rgba(31, 63, 144, 1.000)",
      "rgba(13, 34, 103, 1.000)",
    ],
    lMouseClick: true,
    lMouseMove: true,
    // 格式化字体输出
    fontFormatter: (val) => {
      return ` ${val.name}   ${val.value}%`;
    },
    tooltip: {
      show: true,

    },
    // 样式
    infoStyle: {
      stroke: true,
      color: "rgba(189, 192, 214, 1.000)",
      setLineDash: [4, 4], // 虚线值
      size: 12, // 字体大小
      width: 70, // 设置多少 就会在基础上加上设置的值
      dotSize: 2, //点大小
    },
    data: [
      { name: "示例1", value: 10 },
      { name: "示例2", value: 10 },
      { name: "示例3", value: 20 },
      { name: "示例4", value: 30 },
      { name: "示例5", value: 30 },
    ]
  },
};
// eslint-disable-next-line func-names
Pyramid.install = function (Vue) {
  Vue.component(Pyramid.name, Pyramid);
};

export default Pyramid;
