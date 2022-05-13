var _animationDuration = 1000;
var _animationDurationUpdate = 1000;
var _animationEasingUpdate = "quarticInOut";

const defaultOption = {
  animationEasing: _animationEasingUpdate,
  animationDuration: _animationDuration,
  animationDurationUpdate: _animationDurationUpdate,
  animationEasingUpdate: _animationEasingUpdate,
  tooltip: {
    trigger: "item"
  },
  legend: {
    top: "middle",
    right: "10%",
    orient: "vertical",
    textStyle: {
      color: "#eee"
    }
  },
  dataset: [
    {
      dimensions: ["name", "value"],
      source: [
        { name: "火车", value: "1048" },
        { name: "飞机", value: "735" },
        { name: "客车", value: "580" },
        { name: "轮渡", value: "484" }
      ]
    }
  ],
  radiusAxis: {
    type: "value",
    show: false
  },
  polar: {
    center: ["30%", "50%"]
  },
  series: [
    // 选中处理偏移
    {
      name: "动态环图",
      type: "pie",
      radius: ["50%", "60%"],
      center: ["30%", "50%"],
 
      label: {
        show: false,
        color: "#fff",
        fontSize: 12,
        position: "center",
        formatter: "{b}\n\n{d}%"
      },
      silent: true,
      selectedMode: "single",
      selectedOffset: 20,
      labelLine: {
        show: false
      },
      itemStyle: {
        shadowBlur: 20
      }
      // emphasis: {
      //   label: {
      //     show: false,
      //   },
      // },
    }
  ]
};

export default defaultOption;
