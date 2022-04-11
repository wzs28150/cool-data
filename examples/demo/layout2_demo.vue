<template>
  <layout-1
    :width="1920"
    :height="1080"
    :isScale="true"
    :immerse="immerse"
    background="#091220ff"
    leftSideWidth="22%"
    :titleHeight="104"
  >
    <template #background>
      <BackgroundCanvas2 />
      <background :index='8'></background>
    </template>

    <template #layout-title>
      <title-1 title="大数据可视化系统名称" />
    </template>
    <template #main>
      <BorderBox7 color=""  >内容</BorderBox7>
    </template>

    <template #left>
      <div class="left-top">
        <BorderBox7  >内容</BorderBox7>
      </div>
      <div class="left-middle">
        <BorderBox7  >内容</BorderBox7>
      </div>
      <div class="left-bottom">
        <BorderBox7  >内容</BorderBox7>
      </div>
    </template>

    <template #right>
      <div class="right-top">
        <BorderBox7  >内容</BorderBox7>
      </div>
      <div class="right-middle">
        <BorderBox7  >内容</BorderBox7>
      </div>
      <div class="right-bottom">
        <BorderBox7  >内容</BorderBox7>
      </div>
    </template>
  </layout-1>
</template>

<script setup>
import {ref} from 'vue';
const immerse = ref(false)
</script>