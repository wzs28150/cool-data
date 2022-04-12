const defaultOption = {
  legend: {
    show: true,
    textStyle: { color: "#fff" },
    top: "10%",
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#333'
      }
    }
  },
  grid: {
    left: "10%",
    right: "10%",
    top: "28%",
    bottom: "10%",
    containLabel: true,
  },
  // dataset: {
  //   dimensions: ["product", "系列1"],
  //   source: [
  //     { product: "类别1", "系列1": 43.3},
  //     { product: "类别2", "系列1": 83.1},
  //     { product: "类别3", "系列1": 86.4},
  //     { product: "类别4", "系列1": 72.4},
  //   ],
  // },
  dataset: {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "周一", 系列1: 43.3, 系列2: 143.3, 系列3: 43.3 },
      { product: "周二", 系列1: 83.1, 系列2: 243.3, 系列3: 343.3 },
      { product: "周三", 系列1: 86.4, 系列2: 43.3, 系列3: 143.3 },
      { product: "周四", 系列1: 72.4, 系列2: 343.3, 系列3: 43.3 },
      { product: "周五", 系列1: 95.4, 系列2: 243.3, 系列3: 143.3 },
      { product: "周六", 系列1: 72.4, 系列2: 303.3, 系列3: 243.3 },
      { product: "周日", 系列1: 90.4, 系列2: 313.3, 系列3: 343.3 }
    ],
  },
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
    type: "category",
    boundaryGap: false,
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
        opacity: 0.2,
      },
    },
  },
  series: [
    {
      type: "line",
      lineStyle: {
        type: 'dashed'
      },
      markPoint: {
        data: [
          {
            type: "max",
          },
        ],
        symbol: "circle",
        symbolSize: 10,
        label: {
          position: "top",
        },
      },
    },
  ],
};
export default defaultOption;
