import Chart from "./index.vue";
import { graphic } from "echarts/core";
Chart.demoData = {
  // option: {
  //   legend: { textStyle: { color: "#fff" }, top: "8%" },
  //   tooltip: {},
  //   grid: {
  //     left: "10%",
  //     right: "10%",
  //     bottom: "10%",
  //     containLabel: true,
  //   },
  //   dataset: {
  //     source: [
  //       ["product", "2015", "2016", "2017"],
  //       ["Matcha Latte", 43.3, 85.8, 93.7],
  //       ["Milk Tea", 83.1, 73.4, 55.1],
  //       ["Cheese Cocoa", 86.4, 65.2, 82.5],
  //       ["Walnut Brownie", 72.4, 53.9, 39.1],
  //     ],
  //   },
  //   xAxis: {
  //     type: "category",
  //     axisLine: {
  //       lineStyle: {
  //         color: "#fff",
  //       },
  //     },
  //   },
  //   yAxis: {
  //     axisLine: {
  //       lineStyle: {
  //         color: "#fff",
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       type: "bar",
  //       itemStyle: {
  //         normal: {
  //           borderWidth: 1,
  //           borderColor: "#18CEE2",
  //           barBorderRadius: 28,
  //           color: 'rgba(218,170, 58, 0.7)',
  //         },
  //         emphasis: {
  //           barBorderRadius: 13,
  //           shadowBlur: 18,
  //           shadowColor: "rgba(218,170, 58, 0.7)",
  //         },
  //       },
  //     },
  //     {
  //       type: "bar",
  //       itemStyle: {
  //         normal: {
  //           borderWidth: 1,
  //           borderColor: "#18CEE2",
  //           barBorderRadius: 28,
  //           color: 'rgba(0,97,199, 0.7)',
  //         },
  //         emphasis: {
  //           barBorderRadius: 13,
  //           shadowBlur: 18,
  //           shadowColor: "rgba(218,170, 58, 0.7)",
  //         },
  //       },
  //     },
  //     {
  //       type: "bar",
  //       itemStyle: {
  //         normal: {
  //           borderWidth: 1,
  //           borderColor: "#18CEE2",
  //           barBorderRadius: 28,
  //           color: 'rgba(132,144,44, 0.7)',
  //         },
  //         emphasis: {
  //           barBorderRadius: 13,
  //           shadowBlur: 18,
  //           shadowColor: "rgba(218,170, 58, 0.7)",
  //         },
  //       },
  //     },

  //   ],
  // },
  //rgb(145,204,117)
  // rgb(84,112,198)
  //rgb(145,204,117)
  option: {
    xAxis: {
      data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },

    grid: {
      left: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true,
    },
    series: [
      {
        //柱底圆片
        name: "底部",
        type: "pictorialBar",
        symbolSize: [15, 10], //调整截面形状
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
          normal: {
            color: function (params) {
              var colorArr = [
                "rgba(193,35,43,0.6)",
                "#B5C334",
                "#FCCE10",
                "#E87C25",
                "#27727B",
                "#FE8463",
                "#9BCA63",
              ];
              return colorArr[params.dataIndex];
            },
          },
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        type: "bar",
        barWidth: 15,
        barGap: "0%",
        itemStyle: {
          normal: {
            color: function (params) {
              // build a color map as your need.

              var colorList = [
                new graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "rgba(193,35,43,1)" },
                  { offset: 1, color: "rgba(193,35,43,0.8)" },
                ]),
                "#B5C334",
                "#FCCE10",
                "#E87C25",
                "#27727B",

                "#FE8463",
                "#9BCA63",
                "#FAD860",
              ];

              return colorList[params.dataIndex];
            },
            opacity: 0.7,
          },
          emphasis: {
            barBorderRadius: 13,
            shadowBlur: 18,
            shadowColor: "rgba(218,170, 58, 0.7)",
          },
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "顶部",
        type: "pictorialBar",
        symbolSize: [15, 10], //调整截面形状
        symbolOffset: [0, -5],
        z: 5,
        symbolPosition: "end",
        itemStyle: {
          normal: {
            color: function (params) {
              var colorArr = [
                "#C1232B",
                "#B5C334",
                "#FCCE10",
                "#E87C25",
                "#27727B",
                "#FE8463",
                "#9BCA63",
              ];
              return colorArr[params.dataIndex];
            },
          },
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  },

  // option: {
  //   backgroundColor: "#0e202d",
  //   tooltip: {},
  //   xAxis: {
  //     data: ["企业", "农专", "个体"],
  //     axisTick: {
  //       show: false,
  //     },
  //     axisLine: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //       textStyle: {
  //         color: "#e54035",
  //       },
  //     },
  //   },
  //   yAxis: {
  //     splitLine: {
  //       show: false,
  //     },
  //     axisTick: {
  //       show: false,
  //     },
  //     axisLine: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //   },
  //   series: [
  //     {
  //       name: "年报上报率4",
  //       type: "pictorialBar",
  //       symbolSize: [50, 25],
  //       symbolOffset: [0, -10],
  //       z: 12,
  //       itemStyle: {
  //         normal: {
  //           color: "#14b11e",
  //         },
  //       },
  //       data: [
  //         {
  //           value: 50 * 2,
  //           symbolPosition: "end",
  //         },
  //         {
  //           value: 50 * 2,
  //           symbolPosition: "end",
  //         },
  //         {
  //           value: 20 * 2, //上下倆柱叠加值
  //           symbolPosition: "end",
  //         },
  //       ],
  //     },
  //     {
  //       name: "年报上报率3",
  //       type: "pictorialBar",
  //       symbolSize: [50, 25],
  //       symbolOffset: [0, -10],
  //       z: 12,
  //       itemStyle: {
  //         normal: {
  //           color: "#14b11e",
  //         },
  //       },
  //       data: [
  //         {
  //           value: 50,
  //           symbolPosition: "end",
  //         },
  //         {
  //           value: 50,
  //           symbolPosition: "end",
  //         },
  //         {
  //           value: 20,
  //           symbolPosition: "end",
  //         },
  //       ],
  //     },
  //     {
  //       name: "年报上报率2",
  //       type: "pictorialBar",
  //       symbolSize: [50, 25],
  //       symbolOffset: [0, 20],
  //       z: 12,
  //       itemStyle: {
  //         normal: {
  //           color: "#14b1eb",
  //         },
  //       },
  //       data: [50, 50, 20],
  //     },
  //     {
  //       name: "年报上报率1",
  //       type: "pictorialBar",
  //       symbolSize: [150, 75],
  //       symbolOffset: [0, 37],
  //       z: 11,
  //       itemStyle: {
  //         normal: {
  //           color: "transparent",
  //           borderColor: "#14b1eb",
  //           borderWidth: 5,
  //         },
  //       },
  //       data: [50, 50, 20],
  //     },
  //     {
  //       name: "年报上报率",
  //       type: "pictorialBar",
  //       symbolSize: [200, 50],
  //       symbolOffset: [0, 50],
  //       z: 10,
  //       itemStyle: {
  //         normal: {
  //           color: "transparent",
  //           borderColor: "#14b1eb",
  //           borderType: "dashed",
  //           borderWidth: 5,
  //         },
  //       },
  //       data: [50, 50, 20],
  //     },
  //     {
  //       stack: "1",
  //       type: "bar",
  //       itemStyle: {
  //         normal: {
  //           color: "#14b1eb",
  //           opacity: 0.7,
  //         },
  //       },
  //       silent: true,
  //       barWidth: 50,
  //       barGap: "-50%", // Make series be overlap
  //       data: [50, 50, 20],
  //     },
  //     {
  //       stack: "1",
  //       type: "bar",
  //       itemStyle: {
  //         normal: {
  //           color: "#14b11e",
  //           opacity: 0.7,
  //         },
  //       },
  //       silent: true,
  //       barWidth: 50,
  //       barGap: "-50%", // Make series be overlap
  //       data: [50, 50, 20],
  //     },
  //   ],
  // },
};
// eslint-disable-next-line func-names
Chart.install = function (Vue) {
  Vue.component(Chart.name, Chart);
};

export default Chart;
