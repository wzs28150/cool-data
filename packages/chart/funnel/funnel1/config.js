const defaultOption = {
  legend: {
    show: true,
    textStyle: { color: "#fff" },
    top: "10%"
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%'
  },
  grid: {
    left: "10%",
    right: "10%",
    top: '28%',
    bottom: "10%",
    containLabel: true
  },
  dataset: {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", "系列1": 60},
      { product: "类别2", "系列1": 40},
      { product: "类别3", "系列1": 20},
      { product: "类别4", "系列1": 80}
    ]
  },
  series: [
    {
      type: 'funnel',
      left: '10%',
      top: "28%",
      bottom: "10%",
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      itemStyle: {
   
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      }
    }
  ]
};
export default defaultOption;
