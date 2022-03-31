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
    bottom: "15%",
    containLabel: true,
  },
  dataset: {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", "系列1": 43.3},
      { product: "类别2", "系列1": 83.1},
      { product: "类别3", "系列1": 86.4},
      { product: "类别4", "系列1": 72.4},
    ],
  },
  // dataset: {
  //   dimensions: ["product", "系列1", "系列2", "系列3"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3, 系列2: 143.3 , 系列3: 223.3},
  //     { product: "类别2", 系列1: 83.1, 系列2: 243.3 , 系列3: 343.3 },
  //     { product: "类别3", 系列1: 86.4, 系列2: 203.3  , 系列3: 143.3},
  //     { product: "类别4", 系列1: 72.4, 系列2: 343.3  , 系列3: 113.3},
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
  yAxis: {
    type: "category",
    axisLine: {
      show: false
    },
    splitLine: {
      show: false,
    },
    inverse: true
  },
  xAxis: {
    show: false
  },
  series: [
    {
      type: "bar",
      barWidth: 12,
      barCategoryGap: '50%',
      showBackground: true,
      // barGap: '-100%',
      itemStyle: {}
    }
  ],
};
export default defaultOption;
