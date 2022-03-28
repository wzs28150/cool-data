<template>
  <v-chart class="chart" :init-options="initOptions" :option="option" :theme="theme"/>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TimelineComponent
} from "echarts/components";

import VChart from "vue-echarts";
import { Theme } from "../../components/lib/index";
const { easyv } = Theme;
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TimelineComponent
]);

export default {

  data() {
    return {
      option: {
        "baseOption": {
          "backgroundColor": "transparent",
          "timeline": {
            "show": false,
            "top": 0,
            "data": [
              1
            ]
          },
          "legend": {
            "show": true,
            "left": "30%",
            "top": 30,
            "icon": "rect",
            "textStyle": {
              "itemGap": 12,
              "color": '#fff',
              "fontStyle": "normal",
              "fontFamily": "微软雅黑",
              "fontSize": 14
            }
          },
          "tooltip": {
            "show": true,
            "trigger": "axis",
            "formatter": "{b}<br/>{a}: {c}",
            "axisPointer": {
              "type": "shadow"
            }
          },
          "grid": [
            {
              "show": false,
              "left": "8%",
              "top": 60,
              "bottom": 10,
              "containLabel": true,
              "width": "30%"
            },
            {
              "show": false,
              "left": "52%",
              "top": 60,
              "bottom": 0,
              "width": "0%"
            },
            {
              "show": false,
              "right": "8%",
              "top": 60,
              "bottom": 0,
              "containLabel": true,
              "width": "30%"
            }
          ],
          "xAxis": [
            {
              "type": "value",
              "inverse": true,
              "axisLine": {
                "show": false
              },
              "axisTick": {
                "show": false
              },
              "position": "top",
              "axisLabel": {
                "show": false
              },
              "splitLine": {
                "show": false
              }
            },
            {
              "gridIndex": 1,
              "show": false
            },
            {
              "gridIndex": 2,
              "nameTextStyle": {
                "color": "#50afff",
                "fontSize": 14
              },
              "axisLine": {
                "show": false
              },
              "axisTick": {
                "show": false
              },
              "position": "top",
              "axisLabel": {
                "show": false
              },
              "splitLine": {
                "show": false
              }
            }
          ],
          "yAxis": [
            {
              "type": "category",
              "inverse": true,
              "position": "right",
              "axisLine": {
                "show": false
              },
              "axisTick": {
                "show": false
              },
              "axisLabel": {
                "show": false
              },
              "data": [
                "超速",
                "SOS",
                "偏移",
                "其他"
              ]
            },
            {
              "gridIndex": 1,
              "type": "category",
              "inverse": true,
              "position": "left",
              "axisLine": {
                "show": false
              },
              "axisTick": {
                "show": false
              },
              "axisLabel": {
                "show": true,
                "textStyle": {
                  "color": "#fff",
                  "fontSize": 14
                }
              },
              "data": [
                {
                  "value": "超速",
                  "textStyle": {
                    "align": "center"
                  }
                },
                {
                  "value": "SOS",
                  "textStyle": {
                    "align": "center"
                  }
                },
                {
                  "value": "偏移",
                  "textStyle": {
                    "align": "center"
                  }
                },
                {
                  "value": "其他",
                  "textStyle": {
                    "align": "center"
                  }
                }
              ]
            },
            {
              "gridIndex": 2,
              "type": "category",
              "inverse": true,
              "position": "left",
              "axisLine": {
                "show": false
              },
              "axisTick": {
                "show": false
              },
              "axisLabel": {
                "show": false
              },
              "data": [
                "超速",
                "SOS",
                "偏移",
                "其他"
              ]
            }
          ],
          "series": []
        },
        "options": [
          {
            "tooltip": {
              "trigger": "axis",
              "formatter": "{b}<br/>{c} {a}"
            },
            "series": [
              {
                "name": "昨天",
                "type": "bar",
                "barWidth": 17,
                "label": {
                  "normal": {
                    "show": true,
                    "position": "left",
                    "offset": [
                      0,
                      0
                    ],
                    "textStyle": {
                      "color": "#fff",
                      "fontSize": 14
                    }
                  }
                },
                "data": [
                  38,
                  25,
                  26,
                  32
                ]
              },
              {
                "name": "今天",
                "type": "bar",
                "barWidth": 18,
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                "label": {
                  "normal": {
                    "show": true,
                    "position": "right",
                    "offset": [
                      0,
                      0
                    ],
                    "textStyle": {
                      "color": "#fff",
                      "fontSize": 14
                    }
                  }
                },
        
                "data": [
                  11,
                  38,
                  23,
                  30
                ]
              }
            ]
          }
        ]
      },
      initOptions: {
        renderer: 'canvas'
      },
      theme: easyv
    }
  },
  components: {
    VChart
  }
}
</script>

<style scoped>
.chart {
  height: 100%;
}
</style>