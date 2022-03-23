<template>
  <v-chart
    class="chart"
    ref="dynamicRing"
    :init-options="initOptions"
    :option="mergedOption"
    @selectchanged="handleSelect"
    :theme="theme"
  />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PictorialBarChart } from "echarts/charts";
import defaultOption from './config';
import { uuid, deepMerge, deepClone } from '../../../util/index'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  PictorialBarChart
]);
export default {
  name: 'DynamicRing',
  props: {
    option: {
      type: Object
    },
    dataset: {
      type: Array,
      default: () => {
        return []
      }
    },
    radius: {
      type: String,
      default: '50%'
    },
    ringWidth: {
      type: Number,
      default: 10
    },
    selectedOffset: {
      type: Number,
      default: 10
    },
    autoPlay: {
      type: Number,
      default: 3000
    },
    ringCenter: {
      type: Array,
      default: () => {
        return ["35%", "50%"]
      }
    },
    legend: {
      type: Object,
      default: () => {
        return {
          top: "middle",
          right: "10%",
          orient: "vertical",
          textStyle: {
            color: "#eee",
          },
        }
      }
    },
    theme: {
      type: Object
    }
  },
  data() {
    const id = uuid()
    return {
      initOptions: {
        renderer: 'canvas',
        id
      },
      mergedOption: {

      },
      total: 0,
      title: ''
    }
  },
  watch: {
    option: {
      handler() {
        const { mergeOption } = this

        mergeOption()
      },
      deep: true
    }
  },
  methods: {
    // 渲染百分比
    renderPercentItem(params, api) {
      const valOnRadian = api.value(1);
      const that = this
      return {
        type: 'text',
        extra: {
          valOnRadian: valOnRadian,
          transition: 'valOnRadian',
          enterFrom: { valOnRadian: 0 }
        },
        style: {
          text: that.makeText(valOnRadian),
          fontSize: 14,
          fontWeight: 700,
          x: params.coordSys.cx,
          y: params.coordSys.cy + 15,
          fill: '#eee',
          align: 'center',
          verticalAlign: 'middle',
          enterFrom: { opacity: 0 },
        },
        during: function (apiDuring) {
          apiDuring.setStyle(
            'text',
            that.makeText(apiDuring.getExtra('valOnRadian'))
          );
        }
      }
    },
    // 渲染标题
    renderTitleItem(params) {
      return {
        type: 'text',
        style: {
          text: this.title,
          fontSize: 16,
          fontWeight: 700,
          x: params.coordSys.cx,
          y: params.coordSys.cy - 15,
          fill: '#eee',
          align: 'center',
          verticalAlign: 'middle',
          enterFrom: { opacity: 0 },
        },
      }
    },
    makeText(valOnRadian) {
      return ((valOnRadian / this.total) * 100).toFixed(0) + '%';
    },
    mergeOption() {
      // 设置配置参数
      const { option, dataset, radius, ringWidth, ringCenter,selectedOffset } = this
      this.mergedOption = deepMerge(deepClone(defaultOption, true), option || [])
      if (dataset.length > 0) {
        this.mergedOption.dataset = dataset
      }
      // 设置圆环尺寸
      this.mergedOption.series[0].radius = [radius, (parseInt(radius) + ringWidth) + '%']
      // 设置圆环位置
      this.mergedOption.series[0].center = ringCenter
      this.mergedOption.polar.center = ringCenter
      // 设置选中偏移量
      this.mergedOption.series[0].selectedOffset = selectedOffset
      // 计算总数
      this.mergedOption.dataset[0].source.map((it, index) => {
        if (index > 0) {
          this.total = typeof (it[1]) == 'number' ? it[1] + this.total : Number(it[1]) + this.total
        }
      })
      // 设置初始标题
      this.title = this.mergedOption.dataset[0].source[1][0]
      this.setText(0)
    },
    setText(index) {
      this.mergedOption.angleAxis = {
        type: 'value',
        startAngle: 0,
        show: false,
        min: 0,
        max: this.total
      }
      this.mergedOption.series[1] = {
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem: this.renderPercentItem,
        data: [[1, Number(this.mergedOption.dataset[0].source[index + 1][1])]]
      }
      this.mergedOption.series[2] = {
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem: this.renderTitleItem,
      }
    },
    startActions() {
      let dataIndex = -1;
      const ring = this.$refs.dynamicRing;
      if (!ring) {
        return;
      }
      const dataLen = this.mergedOption.dataset[0].source.length - 1;
      this.actionTimer = setInterval(() => {
        ring.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex
        });
        dataIndex = (dataIndex + 1) % dataLen;
        // 设置选中
        ring.dispatchAction({
          type: "select",
          seriesIndex: 0,
          dataIndex
        });
      }, this.autoPlay);
    },
    stopActions() {
      clearInterval(this.actionTimer);
    },
    handleSelect({ selected }) {
      // 选中之后更新中间的标题及百分比
      const index = selected[0].dataIndex[0]
      const ring = this.$refs.dynamicRing;
      this.title = this.mergedOption.dataset[0].source[index + 1][0]
      this.setText(index)
      ring.setOption(this.mergedOption)
    }
  },
  mounted() {
    const { mergeOption, startActions, stopActions } = this
    mergeOption();
    stopActions();
    startActions()
  },
  components: {
    VChart
  }
}
</script>