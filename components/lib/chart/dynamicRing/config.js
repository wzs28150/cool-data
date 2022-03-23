var _animationDuration = 1000;
var _animationDurationUpdate = 1000;
var _animationEasingUpdate = "quarticInOut";

const defaultOption = {
  animationEasing: _animationEasingUpdate,
  animationDuration: _animationDuration,
  animationDurationUpdate: _animationDurationUpdate,
  animationEasingUpdate: _animationEasingUpdate,
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "middle",
    right: "10%",
    orient: "vertical",
    textStyle: {
      color: "#eee",
    },
  },
  dataset: [
    {
      source: [
        ["type", "value"],
        ["火车", "1048"],
        ["飞机", "735"],
        ["客车", "580"],
        ["轮渡", "484"],
      ],
    },
  ],
  radiusAxis: {
    type: "value",
    show: false,
  },
  polar: {
    center: ["30%", "50%"],
  },
  series: [
    // 选中处理偏移
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "60%"],
      center: ["30%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        color: "#fff",
        fontSize: 12,
        position: "center",
        formatter: "{b}\n\n{d}%",
      },
      silent: true,
      selectedMode: "single",
      selectedOffset: 10,
      labelLine: {
        show: false,
      },
      itemStyle: {
        normal: {
          shadowBlur: 20,
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
    },
    // 高亮处理中间文字
    // {
    //   name: "Access From",
    //   type: "pie",
    //   coordinateSystem: 'none',
    //   radius: ["50%", "60%"],
    //   center: ["30%", "50%"],
    //   itemStyle: {
    //     color: "rgba(255,255,255,0)",
    //   },
    //   avoidLabelOverlap: false,
    //   label: {
    //     show: false,
    //     color: "#fff",
    //     fontSize: 12,
    //     position: "center",
    //     formatter: "{b}\n\n{d}%",
    //   },
    //   emphasis: {
    //     label: {
    //       show: true,
    //       fontSize: "14",
    //       color: "#fff",
    //       fontWeight: "bold",
    //     },
    //     scale: false,
    //     scaleSize: 10,
    //     focus: "series",
    //     blurScope: "coordinateSystem",
    //   },
    //   labelLine: {
    //     show: false,
    //   },
    // },
  ],
};

export default defaultOption;
