// import { graphic } from "echarts/core";
const defaultOption = {
  legend: {
    show: true,
    textStyle: { color: "#fff" },
    top: "5%",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "10%",
    right: "15%",
    bottom: "10%",
    containLabel: true,
  },
  // dataset: [
  //   {
  //     dimensions: ["product", "系列1", "系列2"],
  //     source: [
  //       { product: "类别1", 系列1: 43.3, 系列2: 143.3 },
  //       { product: "类别2", 系列1: 83.1 },
  //       { product: "类别3", 系列1: 86.4 },
  //       { product: "类别4", 系列1: 72.4 },
  //     ],
  //   },
  //   {
  //     transform: {
  //       type: 'filter',
  //       config: { dimension: '系列1', '>': 0}
  //     }
  //   }
  // ],
  // dataset: {
  //   dimensions: ["product", "系列1"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3 },
  //     { product: "类别2", 系列1: 83.1 },
  //     { product: "类别3", 系列1: 86.4 },
  //     { product: "类别4", 系列1: 72.4 },
  //   ],
  // },
  // dataset: {
  //   dimensions: ["product", "系列1", "系列2", "系列3"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3, 系列2: 143.3 , 系列3: 43.3},
  //     { product: "类别2", 系列1: 83.1, 系列2: 243.3 , 系列3: 343.3 },
  //     { product: "类别3", 系列1: 86.4, 系列2: 43.3  , 系列3: 143.3},
  //     { product: "类别4", 系列1: 72.4, 系列2: 343.3  , 系列3: 43.3},
  //   ],
  // },
  dataset: {
    dimensions: ["product", "系列1", "系列2"],
    source: [
      { product: "类别1", 系列1: 43.3, 系列2: 43.3 },
      { product: "类别2", 系列1: 83.1, 系列2: 243.3 },
      { product: "类别3", 系列1: 86.4, 系列2: 143.3 },
      { product: "类别4", 系列1: 72.4, 系列2: 343.3 },
    ],
  },
  xAxis: {
    type: "category",
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
      },
    },
  },
  series: [
    {
      //柱体
      type: "bar",
      barWidth: 10,
      z: -12,
    },

    // {
    //   //柱体
    //   type: "bar",
    //   barWidth: 10,
    //   barGap: "0%",
    //   z: -12,
    // },
    {
      //柱底圆片
      type: "pictorialBar",
      symbolSize: [10, 6],
      symbolOffset: [0, 3],
      z: 12,
      // itemStyle: {
      //   normal: {
      //     color: graphic.LinearGradient(0, 0, 0, 1, [
      //       {
      //         offset: 0,
      //         color: "rgba(89,211,255,1)",
      //       },
      //       {
      //         offset: 1,
      //         color: "rgba(23,237,194,1)",
      //       },
      //     ]),
      //   },
      // },
    },
    {
      //柱顶圆片
      type: "pictorialBar",
      symbolSize: [10, 6],
      symbolOffset: [0, -3],
      z: 12,
      symbolPosition: "end",
      // itemStyle: {
      //   normal: {
      //     color: graphic.LinearGradient(0, 0, 0, 1, [
      //       {
      //         offset: 0,
      //         color: "rgba(89,211,255,1)",
      //       },
      //       {
      //         offset: 1,
      //         color: "rgba(23,237,194,1)",
      //       },
      //     ]),
      //   },
      // },
    },
  ],
};
export default defaultOption;
