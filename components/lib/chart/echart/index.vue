<template>
  <v-chart class="chart" :init-options="initOptions" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart,PictorialBarChart,graphic  } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";
console.log(graphic);
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
  name: 'Chart',
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