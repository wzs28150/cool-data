const defaultOption = {
  dataset: {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", 系列1: 43.3 },
      { product: "类别2", 系列1: 83.1 },
      { product: "类别3", 系列1: 86.4 },
      { product: "类别4", 系列1: 72.4 }
    ]
  },
  // dataset: {
  //   dimensions: ["product", "系列1", "系列2", "系列3"],
  //   source: [
  //     { product: "周一", 系列1: 43.3, 系列2: 143.3, 系列3: 43.3 },
  //     { product: "周二", 系列1: 83.1, 系列2: 243.3, 系列3: 343.3 },
  //     { product: "周三", 系列1: 86.4, 系列2: 43.3, 系列3: 143.3 },
  //     { product: "周四", 系列1: 72.4, 系列2: 343.3, 系列3: 43.3 },
  //     { product: "周五", 系列1: 95.4, 系列2: 243.3, 系列3: 143.3 },
  //     { product: "周六", 系列1: 72.4, 系列2: 303.3, 系列3: 243.3 },
  //     { product: "周日", 系列1: 90.4, 系列2: 313.3, 系列3: 343.3 },
  //   ],
  // },
  tooltip: {
    show: true
  },
  series: [
    {
      type: "liquidFill",
      data: [0.6, 0.5, 0.4, 0.3],
      shape: 'path://M20 230 L150 230 L150 400 L20 400 Z',
      waveLength: '120%',
      // radius: '20px',
      outline: {
        borderDistance: 2,
        itemStyle: {
          borderWidth: 2,
          shadowBlur: 20,
          shadowColor: "rgba(255, 255, 255, 0.5)"
        }
      },
      backgroundStyle: {
        color: "transparent"
      },
      label: {
        textStyle: {
          fontSize: 20
        }
      }
    }
  ]
};
export default defaultOption;
