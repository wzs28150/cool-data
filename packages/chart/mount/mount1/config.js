const defaultOption = {
  legend: {
    show: false,
    textStyle: { color: '#fff' },
    top: '10%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '15%',
    bottom: '10%',
    containLabel: true
  },
  dataset: {
    dimensions: ['product', '系列1'],
    source: [
      { product: '类别1', 系列1: 43.3 },
      { product: '类别2', 系列1: 83.1 },
      { product: '类别3', 系列1: 86.4 },
      { product: '类别4', 系列1: 72.4 }
    ]
  },
  // dataset: {
  //   dimensions: ["product", "系列1", "系列2", "系列3"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3, 系列2: 143.3 , 系列3: 43.3},
  //     { product: "类别2", 系列1: 83.1, 系列2: 243.3 , 系列3: 343.3 },
  //     { product: "类别3", 系列1: 86.4, 系列2: 43.3  , 系列3: 143.3},
  //     { product: "类别4", 系列1: 72.4, 系列2: 343.3  , 系列3: 43.3}
  //   ]
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
    type: 'category',
    boundaryGap: false,
    min: -1,
    max: 4,
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
        type: 'dashed'
      }
    }
  },
  series: [
    {
      type: 'pictorialBar',
      barCategoryGap: '-80%',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      itemStyle: {
        opacity: 0.8
      },
      colorBy: 'data',
      // barWidth: '120%',
      // symbolOffset:['15%', 0],
      emphasis: {
        itemStyle: {
          opacity: 1
        }
      },
      label: {
        show: true,
        position: 'top',
        color: '#fff'
      },
      z: 10
    }
  ]
};
export default defaultOption;
