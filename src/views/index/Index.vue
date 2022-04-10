<template>
  <layout-1
    :width="1920"
    :height="1080"
    :isScale="true"
    :immerse="false"
    background="#091220ff"
    leftSideWidth="22%"
    :titleHeight="60"
  >
    <template #background>
      <BackgroundCanvas2 />
      <background :index="14"></background>
    </template>

    <template #layout-title>
      <div style="height: 86px; position: absolute; left: 0; top: 20px; width: 100%; ">
        <title-6 :color="['#8aaafb']" title="大数据可视化系统名称" />
      </div>
    </template>
    <template #left>
      <border-box-11 title="标题标题">
        <div style="padding-top:40px; height: 100%; box-sizing: border-box;">
          <bar-1 v-if="datastate.dataset" style=" flex: 1;" :dataset="datastate.dataset" />
        </div>
      </border-box-11>
      <border-box-11 title="标题标题">
        <div style="padding-top:40px; height: 100%; box-sizing: border-box;">
          <pie-2 v-if="barDataset" style=" flex: 1;" :dataset="barDataset" />
        </div>
      </border-box-11>
      <border-box-11 title="标题标题">
        <div style="padding:50px 10px 10px; height: 100%; box-sizing: border-box;">
          <scroll-ranking-bar v-if="datastate.dataset"  style=" flex: 1;" :dataset="datastate.dataset" />
        </div>
      </border-box-11>
    </template>
  </layout-1>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useStore } from "vuex";
import { getLeftBarData } from './service';

const datastate = reactive({
  dataset: {}
})
const store = useStore();
console.log(store);
const barDataset = computed(()=>store.state.Index.barDataset)

const getData = async () => {
  // 测试store
  await store.dispatch('Index/getBarData')
}
onMounted(async () => {
  // 测试直接请求
  const { data } = await getLeftBarData()
  datastate.dataset = data.dataset
  getData()
})
</script>