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
          <bar-1  style=" flex: 1;" />
        </div>
      </border-box-11>
      <border-box-11 title="标题标题">
        <div style="padding-top:40px; height: 100%; box-sizing: border-box;">
          <pie-2 style=" flex: 1;" />
        </div>
      </border-box-11>
      <border-box-11 title="标题标题">
        <div style="padding:50px 10px 10px; height: 100%; box-sizing: border-box;">
          <scroll-ranking-bar  style=" flex: 1;" />
        </div>
      </border-box-11>
    </template>
  </layout-1>
</template>

<script setup>
import {ref} from 'vue';
const immerse = ref(false)
</script>