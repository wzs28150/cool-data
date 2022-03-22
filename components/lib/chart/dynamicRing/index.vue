<template>
  <v-chart class="chart" ref="dynamicRing" :init-options="initOptions" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart,PictorialBarChart  } from "echarts/charts";
import { uuid } from '../../../util/index'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";

use([
  SVGRenderer,
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
      type: Object,
      require: true
    }
  },
  data(){
    const id = uuid()
    return {
      initOptions: {
        renderer: 'svg',
        id
      }
    }
  },
  methods: {
    startActions(){
      let dataIndex = -1;
      const ring = this.$refs.dynamicRing;
      if (!ring) {
        return;
      }
      const dataLen = ring.option.series[0].data.length;
      this.actionTimer = setInterval(() => {
        ring.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex
        });
        dataIndex = (dataIndex + 1) % dataLen;
        ring.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex
        });
        // 显示 tooltip
        // ring.dispatchAction({
        //   type: "showTip",
        //   seriesIndex: 0,
        //   dataIndex
        // });
      }, 2000);
    },
    stopActions() {
      clearInterval(this.actionTimer);
    }
  },
  mounted(){
    this.startActions()
  },
  components: {
    VChart
  }
}
</script>