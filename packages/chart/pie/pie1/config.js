const defaultOption = {
  legend: {
    top: "middle",
    right: "10%",
    orient: "vertical",
    textStyle: {
      color: "#eee"
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    left: "10%",
    right: "15%",
    bottom: "10%",
    containLabel: true
  },
  dataset: {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", "系列1": 43.3},
      { product: "类别2", "系列1": 83.1},
      { product: "类别3", "系列1": 86.4},
      { product: "类别4", "系列1": 72.4}
    ]
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
  series: [
    {
      type: "pie",
      // stack: 'one',
      barWidth: 10,
      // barGap: '-100%',
      radius: '50%',
      center: ["35%", "50%"],
      itemStyle: {
        
      }
    }
  ]
};
export default defaultOption;
