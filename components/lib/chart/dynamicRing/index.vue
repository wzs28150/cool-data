<template>
  <v-chart class="chart" :init-options="initOptions" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart,PictorialBarChart  } from "echarts/charts";
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
    return {
      initOptions: {
        renderer: 'svg'
      }
    }
  },
  methods: {

  },
  mounted(){

  },
  components: {
    VChart
  }
}
</script>