/*
 * @Title:
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-04-01 13:32:24
 * @LastEditors: wzs
 * @LastEditTime: 2022-05-13 10:09:06
 */
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
  title: [
    {
      text: 290,
      subtext: "总数",
      top: "42%",
      left: "29%",
      textAlign: "center",
      itemGap: 10,
      subtextStyle: {
        color: "#fff",
        fontSize: 18,
        align: "center"
      },
      textStyle: {
        color: "#f4e051",
        fontSize: 18
      }
    }
  ],
  grid: {
    left: "10%",
    right: "15%",
    bottom: "10%",
    containLabel: true
  },
  dataset: {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", 系列1: 43 },
      { product: "类别2", 系列1: 83 },
      { product: "类别3", 系列1: 86 },
      { product: "类别4", 系列1: 72 }
    ]
  },
  series: [
    {
      type: "pie",
      radius: ["50%", "60%"],
      center: ["30%", "50%"],
      label: {
        show: false
      },
      emphasis: {
        disabled: true
      },
      zlevel: 1,
      labelLine: {
        show: false
      }
    },
    {
      type: "gauge",
      radius: "68%",
      clockwise: true,
      startAngle: "90",
      center: ["30%", "50%"],
      endAngle: "-269.9999",
      splitNumber: 50,
      zlevel: 2,
      detail: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 0,
          opacity: 0
        }
      },
      axisTick: {
        show: false
      },
      pointer: {
        show:false
      },
      splitLine: {
        show: true,
        length: 15,
        padding: [0, 0, 0],
        lineStyle: {
          color: "rgba(6, 30, 93, 1)",
          width: 2
        }
      },
      axisLabel: {
        show: false
      }
    },
    {
      type: "pie",
      radius: ["40%", "41%"],
      center: ["30%", "50%"],
      clockwise: false,
      itemStyle: {
        color: "#fff"
      },
      label: {
        show: false
      },
      data: [100]
    }
  ]
};
export default defaultOption;
