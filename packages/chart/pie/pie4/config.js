const defaultOption = {
  legend: {
    top: "middle",
    right: "10%",
    orient: "vertical",
    textStyle: {
      color: "#eee",
    }
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
    bottom: "10%",
    containLabel: true,
  },
  dataset: {
    dimensions: ["name", "value"],
    source: [
      { name: "类别1", value: 43.3 },
      { name: "类别2", value: 83.1 },
      { name: "类别3", value: 86.4 },
      { name: "类别4", value: 72.4 },
    ],
  },
  polar: {
    radius: [30, "80%"],
  },
  angleAxis: {
    show: false,
    // 最小值是0°处的数值，最大值是360°处的数值，避免出现弧度为0和2PI的数据
    // min: value => (value.min >= 1 ? value.min - value.max / 3 : 0),
    // // min: (value)=>{
    // //   console.log(value);
    // // },
    max: (value) => (value.max * 4) / 3,
    clockwise: true,
  },
  radiusAxis: {
    type: "category",
    axisLabel: {
      interval: 0,
      color: "#2df",
      fontSize: 12,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
      alignWithLabel: true,
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "rgba(17, 51, 68, 0.8)",
      },
    },
    
    data: [],
  },
  tooltip: {},
  series: [
    {
      type: "bar",
      coordinateSystem: "polar",
      barWidth: 10,
      // showBackground: true,
      itemStyle: {
        borderRadius: 10,
      },
      data: [],
      zlevel: 10,
      // label: {
      //   show: true,
      //   position: 'middle',
      //   formatter: '{b}: {d}'
      // }
    },
    {
      type: "bar",
      coordinateSystem: "polar",
      barWidth: 10,
      // showBackground: true,
      itemStyle: {
        borderRadius: 10,
        color: 'rgba(255,255,255,0.1)',
      },
      data: [],
      zlevel: -12,
      barGap: '-100%'
      // label: {
      //   show: true,
      //   position: 'middle',
      //   formatter: '{b}: {d}'
      // }
    },
  ],
};
export default defaultOption;
