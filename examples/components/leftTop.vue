<template>
  <dynamic-ring :dataset="dataset" :option="option" :theme="theme" radius="60%" :ringCenter="['30%', '50%']"  />
</template>

<script>
import { Theme } from "../../components/lib/index";
const { easyv } = Theme;
export default {

  data() {
    return {
      option: {
        legend: {
          right: '10%'
        }
      },
      dataset: [
        {
          source: [
            ['From', 'value'],
            ['客运车', '1048'],
            ['危险品运输车', '735'],
            ['网约车', '580'],
            ['学生班车', '484']
          ]
        }
      ],
      theme: easyv
    }
  },

  mounted() {

  }
}
</script>

<style scoped>
.chart {
  height: 100%;
}
</style>