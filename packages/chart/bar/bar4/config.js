import { graphic } from "echarts/core";
const offsetX = 10;
const offsetY = 5;
const CubeLeft = new graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint;
    // console.log(shape);
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - offsetX, shape.y - offsetY];
    const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  }
});
// 绘制右侧面
const CubeRight = new graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
    const c4 = [shape.x + offsetX, shape.y - offsetY];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  }
});
// 绘制顶面
const CubeTop = new graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
    const c3 = [shape.x, shape.y - offsetX];
    const c4 = [shape.x - offsetX, shape.y - offsetY];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  }
});
new graphic.registerShape("CubeLeft", CubeLeft);
new graphic.registerShape("CubeRight", CubeRight);
new graphic.registerShape("CubeTop", CubeTop);
const defaultOption = {
  legend: {
    show: true,
    textStyle: { color: "#fff" },
    top: "5%"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    left: "10%",
    right: "15%",
    bottom: "10%",
    containLabel: true
  },
  // dataset: [
  //   {
  //     dimensions: ["product", "系列1", "系列2"],
  //     source: [
  //       { product: "类别1", 系列1: 43.3, 系列2: 43.3 },
  //       { product: "类别2", 系列1: 83.1 },
  //       { product: "类别3", 系列1: 86.4 },
  //       { product: "类别4", 系列1: 72.4 },
  //     ],
  //   },
  //   {
  //     transform: {
  //       type: 'filter',
  //       config: { dimension: '系列1', '>': 0}
  //     }
  //   }
  // ],
  // dataset: {
  //   dimensions: ["product", "系列1"],
  //   source: [
  //     { product: "类别1", 系列1: 43.3 },
  //     { product: "类别2", 系列1: 83.1 },
  //     { product: "类别3", 系列1: 86.4 },
  //     { product: "类别4", 系列1: 72.4 },
  //   ],
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
  dataset: {
    dimensions: ["product", "系列1", "系列2"],
    source: [
      { product: "类别1", 系列1: 43.3, 系列2: 43.3 },
      { product: "类别2", 系列1: 83.1, 系列2: 243.3 },
      { product: "类别3", 系列1: 86.4, 系列2: 143.3 },
      { product: "类别4", 系列1: 72.4, 系列2: 343.3 }
    ]
  },
  xAxis: {
    type: "category",
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
        type: "dashed"
      }
    }
  },
  series: [
    {
      type: "custom",
      renderItem: (params, api) => {
        // console.log(params, api);
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: "group",
          children: [
            {
              type: "CubeLeft",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: new graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#3B80E2"
                  },
                  {
                    offset: 1,
                    color: "#49BEE5"
                  }
                ])
              }
            },
            {
              type: "CubeRight",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: new graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#3B80E2"
                  },
                  {
                    offset: 1,
                    color: "#49BEE5"
                  }
                ])
              }
            },
            {
              type: "CubeTop",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: new graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#3B80E2"
                  },
                  {
                    offset: 1,
                    color: "#49BEE5"
                  }
                ])
              }
            }
          ]
        };
      }
    }
  ]
};
export default defaultOption;
