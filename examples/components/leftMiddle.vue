<template>
  <div>
    <ve-histogram height="250px" width="100%" :extend="chartExtend" :settings="chartSettings" />
  </div>
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common';
export default {
  data() {
    this.chartExtend = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 
        }
      },
      legend: {
        show: true,
        textStyle: { color: '#fff' },
        top: "top"
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        type: 'value'
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        type: 'category',
        data: ['客运车', '危险品运输车', '网约车', '学生班车']
      },
      series: [
        {
          name: '行驶',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: '停车',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '熄火',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '离线',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        }
      ]
    };
    return {
      chartSettings: {},
      chartData: {
        columns: ['type', '行驶', '停车', '熄火', '离线'],
        rows: [
          { 'type': '客运车', '行驶': 1231, '停车': 1231, '熄火': 1231, '离线': 1231 },
          { 'type': '危险品运输车', '行驶': 1231, '停车': 1231, '熄火': 1231, '离线': 1231 },
          { 'type': '网约车', '行驶': 1231, '停车': 1231, '熄火': 1231, '离线': 1231 },
          { 'type': '学生班车', '行驶': 1231, '停车': 1231, '熄火': 1231, '离线': 1231 },
        ]
      }
    }
  },
  components: {
    VeHistogram
  }
}
</script>