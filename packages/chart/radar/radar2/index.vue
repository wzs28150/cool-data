<template>
  <CCharts
    :horizontal="horizontal"
    :dataset="dataset"
    @click="change"
  >
    <Title text="我是标题" />
    <XAxis type="category" />
    <YAxis />
    <Bar name="系列1" />
    <Bar name="系列2" />
    <Bar name="系列2" />
    <Line
      name="系列3" 
      :dataset-index="1"
    />
  </CCharts>
</template>
<script setup>
import { CCharts, Title, XAxis, YAxis, Bar, Line } from '../../components';
import { onMounted, ref } from 'vue';
const dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", 系列1: 43.3, 系列2: 143.3, 系列3: 223.3 },
      { product: "类别2", 系列1: 83.1, 系列2: 243.3, 系列3: 343.3 },
      { product: "类别3", 系列1: 86.4, 系列2: 203.3, 系列3: 143.3 },
      { product: "类别4", 系列1: 72.4, 系列2: 343.3, 系列3: 113.3 }
    ]
  },
  {
    transform: {
      type: 'filter',
      config: { dimension: '系列3', '>': 200 }
    }
  }
])

const horizontal = ref(true)

const change = () => {
  dataset.value[0].source[0].product = 'aaa'
}
onMounted(() => {

})
</script>