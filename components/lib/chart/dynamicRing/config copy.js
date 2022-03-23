const defaultOption = {
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
        ["From", "value"],
        ["Search Engine", "1048"],
        ["Direct", "735"],
        ["Email", "580"],
        ["Union Ads", "484"],
        ["Video Ads", "300"],
      ],
    },
  ],
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
      selectedMode: "single",
      selectedOffset: 10,
      labelLine: {
        show: false,
      },
      itemStyle: {
        normal: {
          borderWidth: 5,
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
    {
      name: "Access From",
      type: "pie",
      coordinateSystem: 'none',
      radius: ["50%", "60%"],
      center: ["30%", "50%"],
      itemStyle: {
        color: "rgba(255,255,255,0)",
      },
      avoidLabelOverlap: false,
      label: {
        show: false,
        color: "#fff",
        fontSize: 12,
        position: "center",
        formatter: "{b}\n\n{d}%",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "14",
          color: "#fff",
          fontWeight: "bold",
        },
        scale: false,
        scaleSize: 10,
        focus: "series",
        blurScope: "coordinateSystem",
      },
      labelLine: {
        show: false,
      },
    },
  ],
};

export default defaultOption;
