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
      { product: "类别1", 系列1: 43.3, 系列2: 143.3 , 系列3: 223.3},
      { product: "类别2", 系列1: 83.1, 系列2: 243.3 , 系列3: 343.3 },
      { product: "类别3", 系列1: 86.4, 系列2: 203.3  , 系列3: 143.3},
      { product: "类别4", 系列1: 72.4, 系列2: 343.3  , 系列3: 113.3},
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
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    axisLine: {
      show: false
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
      stack: 'bar',
      barWidth: 5,
      barCategoryGap: '50%',
      // barGap: '-100%',
      itemStyle: {
        emphasis: {
          barBorderRadius: 7,
        },
        normal: {
          // borderColor: '#fff',
          // borderWidth: 1,
          barBorderRadius: [7,7,0,0],
        },
      },
    },
    {
      type: 'scatter',
      symbolSize: 10,
      stack: 'scatter',
      itemStyle: {
        normal: {
          color: '#fff',
        }
      }
    }
  ],
};
export default defaultOption;
