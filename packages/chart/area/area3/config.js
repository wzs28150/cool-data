const defaultOption = {
  legend: {
    show: true,
    textStyle: { color: "#fff" },
    top: "10%"
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
    containLabel: true
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
      { product: "周一", 系列1: 35, 系列2: 70, 系列3: 100 },
      { product: "周二", 系列1: 8, 系列2: 40, 系列3: 80 },
      { product: "周三", 系列1: 25, 系列2: 65, 系列3: 95 },
      { product: "周四", 系列1: 37, 系列2: 100, 系列3: 150 },
      { product: "周五", 系列1: 4, 系列2: 44, 系列3: 112 },
      { product: "周六", 系列1: 20, 系列2: 68, 系列3: 132 },
      { product: "周日", 系列1: 30, 系列2: 88, 系列3: 99 }
    ]
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
      show: false
    }
  },
  yAxis: {
    axisLine: {
      show: false
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        opacity: 0.2
      }
    }
  },
  series: [
    {
      type: "line",
      stack: 'Total',
      step: 'end',
      emphasis: {
        focus: 'series'
      },
      itemStyle:{},
      areaStyle: {}
    }
  ]
};
export default defaultOption;
