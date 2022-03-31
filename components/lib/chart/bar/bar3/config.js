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
    bottom: "15%",
    containLabel: true,
  },
  // dataset: [
  //   {
  //     dimensions: ["product", "系列1", "系列2"],
  //     source: [
  //       { product: "类别1", 系列1: 43.3, 系列2: 43.3 },
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
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", 系列1: 43.3, 系列2: 143.3 , 系列3: 43.3},
      { product: "类别2", 系列1: 83.1, 系列2: 243.3 , 系列3: 343.3 },
      { product: "类别3", 系列1: 86.4, 系列2: 43.3  , 系列3: 143.3},
      { product: "类别4", 系列1: 72.4, 系列2: 343.3  , 系列3: 43.3},
    ],
  },
  // dataset: {
  //   dimensions: ["product", "系列1", "系列2"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3, 系列2: 43.3 },
  //     { product: "类别2", 系列1: 83.1, 系列2: 243.3  },
  //     { product: "类别3", 系列1: 86.4, 系列2: 143.3  },
  //     { product: "类别4", 系列1: 72.4, 系列2: 343.3  },
  //   ],
  // },
  xAxis: {
    type: "category",
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
      type: "bar",
      barWidth: 10,
      showBackground: true,
      backgroundStyle: {
        color: "#293656",
        borderWidth: 5,
        borderColor: "#293656",
      },
      z: -12,
    },
    {
      type: "pictorialBar",
      symbol: "rect",
      itemStyle: {
        color: "#293656",
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 2,
      z: -10
    },
  ],
};
export default defaultOption;
