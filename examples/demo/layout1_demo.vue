<template>
  <layout-1
    :width="1920"
    :height="1080"
    :isScale="true"
    :immerse="immerse"
    background="#091220ff"
    leftSideWidth="22%"
    :titleHeight="104"
    style="background-image: url(./bg2.jpg); background-size: cover;"
  ></layout-1>
</template>

<script setup>
import {ref} from 'vue';
const immerse = ref(false)
</script>