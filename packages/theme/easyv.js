import { graphic } from "echarts/core";
const easyv = {
  version: 1,
  themeName: "easyv",
  theme: {
    color: [
      new graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: "rgba(0,228,255,1)" },
        { offset: 1, color: "rgba(0,155,255,0.6)" },
      ]), //   "#1890ff",
      new graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: "rgba(20,231,231,1)" },
        { offset: 1, color: "rgba(20,201,231,0.6)" },
      ]), //   "#1ee7e7",
      new graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: "rgba(47,114,235,1)" },
        { offset: 1, color: "rgba(47,84,235,0.6)" },
      ]), //   "#2f54eb",
      new graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: "rgba(40,230,169,1)" },
        { offset: 1, color: "rgba(40,201,169,0.6)" },
      ]), 
      // "#bae7ff",
      "#00d68a",
    ],
    backgroundColor: "",
    textStyle: {
      color: "#eeeeee",
    },
    title: {
      textStyle: {
        color: "#eeeeee",
      },
      subtextStyle: {
        color: "#aaaaaa",
      },
    },
    line: {
      itemStyle: {
        borderWidth: 1,
      },
      lineStyle: {
        width: 2,
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
    },
    radar: {
      itemStyle: {
        borderWidth: 1,
      },
      lineStyle: {
        width: 2,
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#ccc",
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
      label: {
        textBorderColor: 'transparent',
        color: '#eee',
        fontSize: 8,
        fontWeight: 'lighter'
      }
    },
    scrollTable: {
      color: {
        headerBGC: '#00267b',
        oddRowBGC: '#01114c',
        evenRowBGC: '#060737'
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    candlestick: {
      itemStyle: {
        color: "#fd1050",
        color0: "#0cf49b",
        borderColor: "#fd1050",
        borderColor0: "#0cf49b",
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
      lineStyle: {
        width: 1,
        color: "#aaaaaa",
      },
      symbolSize: 4,
      symbol: "circle",
      smooth: false,
      color: ["#1890ff", "#1ee7e7", "#2f54eb", "#bae7ff", "#00d68a"],
      label: {
        color: "#eeeeee",
      },
    },
    map: {
      itemStyle: {
        areaColor: "#eee",
        borderColor: "#444",
        borderWidth: 0.5,
      },
      label: {
        color: "#000",
      },
      emphasis: {
        itemStyle: {
          areaColor: "rgba(255,215,0,0.8)",
          borderColor: "#444",
          borderWidth: 1,
        },
        label: {
          color: "rgb(100,0,0)",
        },
      },
    },
    geo: {
      itemStyle: {
        areaColor: "#eee",
        borderColor: "#444",
        borderWidth: 0.5,
      },
      label: {
        color: "#000",
      },
      emphasis: {
        itemStyle: {
          areaColor: "rgba(255,215,0,0.8)",
          borderColor: "#444",
          borderWidth: 1,
        },
        label: {
          color: "rgb(100,0,0)",
        },
      },
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisLabel: {
        show: true,
        color: "#eeeeee",
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ["#aaaaaa"],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"],
        },
      },
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisLabel: {
        show: true,
        color: "#ffffff",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: ["#aaaaaa"],
          opacity: 0.5,
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"],
        },
      },
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisLabel: {
        show: true,
        color: "#ffffff",
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#aaaaaa"],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"],
        },
      },
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#eeeeee",
        },
      },
      axisLabel: {
        show: true,
        color: "#ffffff",
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#aaaaaa"],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"],
        },
      },
    },
    toolbox: {
      iconStyle: {
        borderColor: "#999999",
      },
      emphasis: {
        iconStyle: {
          borderColor: "#666666",
        },
      },
    },
    legend: {
      textStyle: {
        color: "#eeeeee",
      },
    },
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: "#eeeeee",
          width: "1",
        },
        crossStyle: {
          color: "#eeeeee",
          width: "1",
        },
      },
    },
    timeline: {
      lineStyle: {
        color: "#eeeeee",
        width: 1,
      },
      itemStyle: {
        color: "#dd6b66",
        borderWidth: 1,
      },
      controlStyle: {
        color: "#eeeeee",
        borderColor: "#eeeeee",
        borderWidth: 0.5,
      },
      checkpointStyle: {
        color: "#e43c59",
        borderColor: "#c23531",
      },
      label: {
        color: "#eeeeee",
      },
      emphasis: {
        itemStyle: {
          color: "#a9334c",
        },
        controlStyle: {
          color: "#eeeeee",
          borderColor: "#eeeeee",
          borderWidth: 0.5,
        },
        label: {
          color: "#eeeeee",
        },
      },
    },
    visualMap: {
      color: ["#391ddc", "#d88273", "#f6efa6"],
    },
    dataZoom: {
      backgroundColor: "rgba(47,69,84,0)",
      dataBackgroundColor: "rgba(255,255,255,0.3)",
      fillerColor: "rgba(167,183,204,0.4)",
      handleColor: "#a7b7cc",
      handleSize: "100%",
      textStyle: {
        color: "#eeeeee",
      },
    },
    markPoint: {
      label: {
        color: "#eeeeee",
      },
      emphasis: {
        label: {
          color: "#eeeeee",
        },
      },
    },
  },
};
export default easyv;
