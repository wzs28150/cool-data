// import { graphic } from "echarts/core";
const defaultOption = {
  legend: {
    show: false,
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
    bottom: "5%",
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
  dataset: {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", 系列1: 43.3 },
      { product: "类别2", 系列1: 83.1 },
      { product: "类别3", 系列1: 86.4 },
      { product: "类别4", 系列1: 72.4 },
    ],
  },
  // dataset: {
  //   dimensions: ["product", "系列1", "系列2", "系列3"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3, 系列2: 143.3 , 系列3: 43.3},
  //     { product: "类别2", 系列1: 83.1, 系列2: 243.3 , 系列3: 343.3 },
  //     { product: "类别3", 系列1: 86.4, 系列2: 43.3  , 系列3: 143.3},
  //     { product: "类别4", 系列1: 72.4, 系列2: 343.3  , 系列3: 43.3},
  //   ],
  // },
  // dataset: {
  //   dimensions: ["product", "系列1", "系列2"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3, 系列2: 43.3 },
  //     { product: "类别2", 系列1: 83.1, 系列2: 243.3 },
  //     { product: "类别3", 系列1: 86.4, 系列2: 143.3 },
  //     { product: "类别4", 系列1: 72.4, 系列2: 343.3 },
  //   ],
  // },
  xAxis: {
    "data": ["关井数", "开井数", "不在线"],
    type: "category",
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      interval: 0,
      textStyle: {
        color: "#beceff",
        fontSize: 14,
      },
      margin: 25, 
    },
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
      lineStyle: {
        type: "dashed",
      },
    },
    axisLabel: {
      show: false,
    },
  },
  series: [
    // 顶部
    {
      name: "",
      type: "pictorialBar",
      symbolSize: [20, 10],
      symbolOffset: [0, -5],
      z: 12,
      data: [
        {
          name: "关井数",
          value: "981",
          trueVal: "98",
          symbolPosition: "end",
          itemStyle: {
            color: "#00fff5", //圆柱顶部颜色
          },
        },
        {
          name: "开井数",
          value: "1000",
          trueVal: "100",
          symbolPosition: "end",
          itemStyle: {
            color: "#ffcc00", //圆柱顶部颜色
          },
        },
        {
          name: "不在线",
          value: "900",
          trueVal: "90",
          symbolPosition: "end",
          itemStyle: {
            color: "#b9b7ff", //圆柱顶部颜色
          },
        },
      ],
    },
    // 底部
    {
      name: "",
      type: "pictorialBar",
      symbolSize: [20, 10],
      symbolOffset: [0, 5],
      z: 12,
      data: [
        {
          name: "关井数",
          value: "981",
          trueVal: "98",
          itemStyle: {
            color: "#43bafe", //圆柱底部颜色
          },
        },
        {
          name: "开井数",
          value: "1000",
          trueVal: "100",
          itemStyle: {
            color: "#ff7800", //圆柱底部颜色
          },
        },
        {
          name: "不在线",
          value: "900",
          trueVal: "90",
          itemStyle: {
            color: "#e9a5ff", //圆柱底部颜色
          },
        },
      ],
    },
    // 柱体
    {
      type: "bar",
      silent: true,
      barWidth: 20,
      barGap: "-100%",
      data: [
        {
          name: "关井数",
          value: "981",
          trueVal: "98",
          label: {
            normal: {
              show: true,
              position: "top",
              distance: 20,
              textStyle: {
                color: "#00fff5", //柱子对应数值颜色
                fontSize: 14,
              },
            },
          },
          itemStyle: {
            normal: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0,255,245,0.5)",
                  },
                  {
                    offset: 1,
                    color: "#43bafe", //底部渐变颜色
                  },
                ],
              },
            },
          },
        },
        {
          name: "开井数",
          value: "1000",
          trueVal: "100",
          label: {
            normal: {
              show: true,
              position: "top",
              distance: 20,
              textStyle: {
                color: "#ffcc00", //柱子对应数值颜色
                fontSize: 14,
              },
            },
          },
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: "linear",
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255,204,0,0.5)",
                },
                {
                  offset: 1,
                  color: "#ff7800", //底部渐变颜色
                },
              ],
            },
          },
        },
        {
          name: "不在线",
          value: "900",
          trueVal: "90",
          label: {
            normal: {
              show: true,
              position: "top",
              distance: 20,
              textStyle: {
                color: "#b9b7ff", //柱子对应数值颜色
                fontSize: 14,
              },
            },
          },
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: "linear",
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(185,183,255,0.5)",
                },
                {
                  offset: 1,
                  color: "#e9a5ff", //底部渐变颜色
                },
              ],
            },
          },
        },
      ],
    },
    // 虚线圆
    {
      name: "",
      type: "pictorialBar",
      symbolSize: [60, 30],
      symbolOffset: [0, 16],
      z: 10,
      data: [
        {
          name: "关井数",
          value: "981",
          trueVal: "98",
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#43bafe", //底部外圆圈颜色
              borderType: "dashed",
              borderWidth: 5,
            },
          },
        },
        {
          name: "开井数",
          value: "1000",
          trueVal: "100",
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#ff7800", //底部外圆圈颜色
              borderType: "dashed",
              borderWidth: 5,
            },
          },
        },
        {
          name: "不在线",
          value: "900",
          trueVal: "90",
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#e9a5ff", //底部外圆圈颜色
              borderType: "dashed",
              borderWidth: 5,
            },
          },
        },
      ],
    },
    // 实线圆
    {
      name: "",
      type: "pictorialBar",
      symbolSize: [40, 20],
      symbolOffset: [0, 10],
      z: 11,
      data: [
        {
          name: "关井数",
          value: "981",
          trueVal: "98",
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#43bafe", //底部内圆圈颜色
              borderWidth: 5,
            },
          },
        },
        {
          name: "开井数",
          value: "1000",
          trueVal: "100",
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#ff7800", //底部内圆圈颜色
              borderWidth: 5,
            },
          },
        },
        {
          name: "不在线",
          value: "900",
          trueVal: "90",
          itemStyle: {
            normal: {
              color: "transparent",
              borderColor: "#e9a5ff", //底部内圆圈颜色
              borderWidth: 5,
            },
          },
        },
      ],
    },
  ],
};
export default defaultOption;
