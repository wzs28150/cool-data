/*
 * @Title:
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-04-01 13:32:24
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-14 16:54:14
 */
const defaultOption = {
  legend: {
    top: 'middle',
    right: '10%',
    orient: 'vertical',
    textStyle: {
      color: '#eee'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '10%',
    right: '15%',
    bottom: '10%',
    containLabel: true
  },
  // dataset: {
  //   dimensions: ['product', '系列1'],
  //   source: [
  //     { product: '类别1', 系列1: 43.3 },
  //     { product: '类别2', 系列1: 83.1 },
  //     { product: '类别3', 系列1: 86.4 },
  //     { product: '类别4', 系列1: 72.4 }
  //   ]
  // },
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
  dataset: {
    max: [6000, 5000, 5000, 5000, 5000, 5000],
    dimensions: [
      'type',
      '小型车',
      '中型车',
      '大型车',
      '货车',
      '特种车',
      '贵宾车'
    ],
    source: [
      {
        type: '车辆数',
        小型车: 3200,
        中型车: 3000,
        大型车: 3400,
        货车: 2000,
        特种车: 3900,
        贵宾车: 2000
      },
      {
        type: '设计车位',
        小型车: 4300,
        中型车: 4700,
        大型车: 3600,
        货车: 3900,
        特种车: 3800,
        贵宾车: 4200
      }
    ]
  },
  radar: {
    splitArea: {
      // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: true,
      areaStyle: {
        // 分隔区域的样式设置。
        color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      }
    },
    axisLine: {
      //指向外圈文本的分隔线样式
      lineStyle: {
        color: '#153269'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#113865', // 分隔线颜色
        width: 1 // 分隔线线宽
      }
    }
  },
  series: [
    
  ]
};
export default defaultOption;
