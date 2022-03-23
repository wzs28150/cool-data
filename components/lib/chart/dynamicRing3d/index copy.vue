<template>
  <v-chart
    class="chart"
    ref="dynamicRing3d"
    :init-options="initOptions"
    :option="options"
    @click="handleClick"
    @mouseover="handleMouseover"
    @globalout="handleGlobalout"
  />
</template>

<script>
import 'echarts-gl';
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { getPie3D, getParametricEquation } from './chart';
// console.log(getParametricEquation);
// import echarts from 'echarts'
use([
  SVGRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

const color = ['#005aff', '#f8b551', '#00a66b']

export default {
  name: 'DynamicRing3d',
  props: {
    option: {
      type: Object,
      require: true
    },
    initOptions: {}
  },
  components: {
    VChart
  },
  data() {
    return {
      optionData: [
        {
          name: '启用电梯',
          value: 176
        },
        {
          name: '停用电梯',
          value: 288
        },
        {
          name: '维修电梯',
          value: 50
        }
      ],
      ring: null,
      options: {}
    }
  },
  created() {
    this.setLabel()
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化label样式
    setLabel() {
      this.optionData.forEach((item, index) => {
        item.itemStyle = {
          color: color[index]
        }
        item.label = {
          normal: {
            show: true,
            color: color[index],
            formatter: [
              '{b|{b}}',
              '{c|{c}}{b|台}',
              '{d|{d}%}'
            ].join('\n'), // 用\n来换行
            rich: {
              b: {
                color: '#fff',
                lineHeight: 25,
                align: 'left'
              },
              c: {
                fontSize: 22,
                color: '#fff',
                textShadowColor: '#1c90a6',
                textShadowOffsetX: 0,
                textShadowOffsetY: 2,
                textShadowBlur: 5
              },
              d: {
                color: color[index],
                align: 'left'
              }
            }
          }
        }
        item.labelLine = {
          normal: {
            lineStyle: {
              width: 1,
              color: 'rgba(255,255,255,0.7)'
            }
          }
        }
      })
    },
    init() {
      this.ring = this.$refs.dynamicRing3d;
      this.options = getPie3D(this.optionData, 0.8, 240, 28, 26, 0.5)
      this.options.series.push({
        name: '电梯状态', //自己根据场景修改
        backgroundColor: 'transparent',
        type: 'pie',
        label: {
          opacity: 1,
          fontSize: 13,
          lineHeight: 20
        },
        startAngle: -40, // 起始角度，支持范围[0, 360]。
        clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['20%', '50%'],
        center: ['50%', '50%'],
        data: this.optionData,
        itemStyle: {
          opacity: 0  //这里必须是0，不然2d的图会覆盖在表面
        }
      })
      // this.bindListen(this.ring)
    },
    handleClick(params) {
      let selectedIndex = ''
      // let hoveredIndex = ''
      const optionName = 'options';
      if(!this[optionName].series[params.seriesIndex].pieData){
        return
      }
      if(!this[optionName].series[params.seriesIndex].pieStatus){
        return
      }
      const isSelected = !this[optionName].series[params.seriesIndex].pieStatus
        .selected
      const isHovered =
        this[optionName].series[params.seriesIndex].pieStatus.hovered
      const k = this[optionName].series[params.seriesIndex].pieStatus.k
      const startRatio =
        this[optionName].series[params.seriesIndex].pieData.startRatio
      const endRatio =
        this[optionName].series[params.seriesIndex].pieData.endRatio

      if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
        this[optionName].series[
          selectedIndex
        ].parametricEquation = getParametricEquation(
          this[optionName].series[selectedIndex].pieData.startRatio,
          this[optionName].series[selectedIndex].pieData.endRatio,
          false,
          false,
          k,
          this[optionName].series[selectedIndex].pieData.value
        )
        this[optionName].series[selectedIndex].pieStatus.selected = false
      }

      this[optionName].series[
        params.seriesIndex
      ].parametricEquation = getParametricEquation(
        startRatio,
        endRatio,
        isSelected,
        isHovered,
        k,
        this[optionName].series[params.seriesIndex].pieData.value
      )

      this[optionName].series[params.seriesIndex].pieStatus.selected = isSelected
      // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
      selectedIndex = isSelected ? params.seriesIndex : null
    },

    handleMouseover(params) {
      let hoveredIndex = ''
      let isSelected
      let isHovered
      let startRatio
      let endRatio
      let k
      const optionName = 'options';
      if(!this[optionName].series[params.seriesIndex].pieData){
        return
      }
      if(!this[optionName].series[params.seriesIndex].pieStatus){
        return
      }
      if (hoveredIndex === params.seriesIndex) {
        // 否则进行高亮及必要的取消高亮操作
      } else {
        // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
        if (hoveredIndex !== '') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
          isSelected = this[optionName].series[hoveredIndex].pieStatus.selected
          isHovered = false
          startRatio = this[optionName].series[hoveredIndex].pieData.startRatio
          endRatio = this[optionName].series[hoveredIndex].pieData.endRatio
          k = this[optionName].series[hoveredIndex].pieStatus.k
          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          this[optionName].series[
            hoveredIndex
          ].parametricEquation = getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            this[optionName].series[hoveredIndex].pieData.value
          )
          this[optionName].series[hoveredIndex].pieStatus.hovered = isHovered
          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = ''
        }
        // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
        if (
          params.seriesName !== 'mouseoutSeries' &&
          params.seriesName !== 'pie2d'
        ) {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected =
            this[optionName].series[params.seriesIndex].pieStatus.selected
          isHovered = true
          startRatio =
            this[optionName].series[params.seriesIndex].pieData.startRatio
          endRatio = this[optionName].series[params.seriesIndex].pieData.endRatio
          k = this[optionName].series[params.seriesIndex].pieStatus.k
          // 对当前点击的扇形，执行高亮操作（对 option 更新）
          this[optionName].series[
            params.seriesIndex
          ].parametricEquation = getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            this[optionName].series[params.seriesIndex].pieData.value + 60
          )
          this[optionName].series[
            params.seriesIndex
          ].pieStatus.hovered = isHovered
          // 记录上次高亮的扇形对应的系列号 seriesIndex
          hoveredIndex = params.seriesIndex
        }
        // 使用更新后的 option，渲染图表
        // myChart.setOption(this[optionName])
      }
    },
    handleGlobalout() {
        let isSelected
        let isHovered
        let startRatio
        let endRatio
        let k
        let hoveredIndex = ''
        const optionName = 'options';
        
        if (hoveredIndex !== '') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = this[optionName].series[hoveredIndex].pieStatus.selected
          isHovered = false
          k = this[optionName].series[hoveredIndex].pieStatus.k
          startRatio = this[optionName].series[hoveredIndex].pieData.startRatio
          endRatio = this[optionName].series[hoveredIndex].pieData.endRatio
          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          this[optionName].series[
            hoveredIndex
          ].parametricEquation = getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            this[optionName].series[hoveredIndex].pieData.value
          )
          this[optionName].series[hoveredIndex].pieStatus.hovered = isHovered
          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = ''
        }
    },
    bindListen(myChart, optionName = 'options') {
      let hoveredIndex = ''



      myChart.on('globalout', () => {
        // 准备重新渲染扇形所需的参数
        let isSelected
        let isHovered
        let startRatio
        let endRatio
        let k
        if (hoveredIndex !== '') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = this[optionName].series[hoveredIndex].pieStatus.selected
          isHovered = false
          k = this[optionName].series[hoveredIndex].pieStatus.k
          startRatio = this[optionName].series[hoveredIndex].pieData.startRatio
          endRatio = this[optionName].series[hoveredIndex].pieData.endRatio
          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          this[optionName].series[
            hoveredIndex
          ].parametricEquation = getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            this[optionName].series[hoveredIndex].pieData.value
          )
          this[optionName].series[hoveredIndex].pieStatus.hovered = isHovered
          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = ''
        }
        // 使用更新后的 option，渲染图表
        // myChart.setOption(this[optionName])
      })

    }
  }
}
</script>
