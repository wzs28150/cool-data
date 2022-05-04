<template>
  <div class="chart-list">
    <div class="tab">
      <el-scrollbar height="100%">
        <div
          v-for="(item, index) in typeList"
          :key="item.id"
          :class="`tab-item ${active == index ? 'active' : ''}`"
          @click="active = index"
        >
          {{ item.title }}
        </div>
      </el-scrollbar>
    </div>
    <div class="list">
      <el-scrollbar height="100%">
        <draggable
          :list="list"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :sort="true"
          :move="checkMove"
          :clone="cloneData"
          @end="end"
        >
          <div v-for="item in list" :key="item.id" class="item">
            <div class="icon"></div>
            <div class="title">{{ item.title }}{{ item.id }}</div>
          </div>
        </draggable>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import barImg from '../../../assets/bar.png';
  import { VueDraggableNext as draggable } from 'vue-draggable-next';
  import {cloneDeep} from 'lodash';
  const active = ref(0);
  const typeList = ref([
    {
      id: 1,
      title: '全部',
    },
    {
      id: 2,
      title: '柱状图',
    },
  ]);
  const list = ref([
    {
      id: 1,
      icon: barImg,
      title: '基础柱状图',
      x: 200,
      y: 100,
      w: 320,
      h: 180,
      active: false,
    },
    {
      id: 2,
      icon: barImg,
      title: '基础柱状图',
      x: 200,
      y: 100,
      w: 320,
      h: 180,
      active: false,
    },
    {
      id: 3,
      icon: barImg,
      title: '基础柱状图',
      x: 100,
      y: 100,
      name: '哈哈',
      drag: false,
      resize: true,
      rotate: true,
      active: false,
    },
  ]);
  const cloneData = (data) =>{
    return cloneDeep(data)
  }
  const checkMove = (event) => {
    // console.log(event);
    // console.log('checkMove', event.draggedContext);
    // console.log('Future index: ' + event.draggedContext.futureIndex);
  };
  const end = (e) => {
    // console.log(e.originalEvent.offsetX);
  }
</script>
<style lang="less" scoped>
  .chart-list {
    height: 100%;
    display: flex;
    .tab {
      width: 60px;
      background-color: #323232;
      height: 100%;
      .tab-item {
        font-size: 12px;
        width: 46px;
        height: 17px;
        padding: 16px 7px;
        cursor: pointer;
        &.active {
          background-color: #1d1d1d;
        }
      }
    }
    .list {
      padding: 20px;
      flex: 1;
      .item {
        background-color: #323232;
        text-align: center;
        cursor: pointer;
        margin-bottom: 10px;
        .icon {
          position: relative;
          background-image: url(../../../assets/bar.png);
          background-size: cover;
          background-position: center;
          &::after {
            content: '';
            display: block;
            padding-bottom: 60%;
          }
        }
        .title {
          font-size: 14px;
          line-height: 3em;
        }
      }
    }
  }
</style>
