<template>
  <div class="chart-list">
    <div class="tab" v-if="menuList && menuList?.tab">
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
        <div class="list-inner">
          <div
            v-for="item in list"
            :key="item.id"
            class="item"
            draggable="true"
            @dragstart="dragStart(item, $event)"
            @dragend="dragEnd"
          >
            <div class="icon" :style="`background-image:url(${item.icon}?a=2)`"></div>
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
  import useIndexStore from '../store';
  const store = useIndexStore();

  const props = defineProps({
    index: {
      type: [Number, null],
      default: null,
    },
  });
  // 分类选中
  const active = ref(0);
  // 分类列表
  const typeList = ref([]);
  // 列表
  const list = ref([]);
  // 二级菜单数据
  const menuList = ref([]);
  /**
   * @name: 监听选中的菜单index
   * @description: 根据index获取二级菜单数据
   * @return {*}
   */
  watch(
    () => props.index,
    (val) => {
      if (val !== null) {
        menuList.value = store.menu.top[props.index];
        if (menuList.value.tab) {
          typeList.value = menuList.value.children;
          const children = menuList.value.children[active.value].children;
          list.value = children.length > 0 ? children : [];
        } else {
          typeList.value = [];
          list.value = menuList.value.children;
        }
      }
    },
    {
      immediate: true,
    }
  );
  /**
   * @name: 监听分类切换
   * @description: 监听分类切换，改变列表
   * @return {*}
   */
  watch(
    () => active.value,
    (val) => {
      typeList.value = menuList.value.children;
      const children = menuList.value.children[val].children;
      list.value = children.length > 0 ? children : [];
    }
  );
  /**
   * @name: 拖拽开始
   * @description: 传递当前元素信息
   * @param {Object} item 当前元素信息
   * @param {*} event 拖拽事件event
   * @return {*}
   */
  const dragStart = (item, event) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(item));
  };
  /**
   * @name: 拖拽结束后
   * @description: 拖拽结束后，关闭左侧菜单抽屉
   * @param {*} e
   * @return {*}
   */
  const dragEnd = () => {
    store.setDrawerInfo({
      index: null,
      title: '',
      type: '',
      size: 250,
    });
    store.setDrawerFlag(false);
  };
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
      padding: 15px;
      flex: 1;
      &-inner {
        display: flex;
        flex-wrap: wrap;
      }
      .item {
        background-color: #323232;
        text-align: center;
        cursor: pointer;
        margin: 5px;
        width: calc(50% - 10px);
        z-index: 0;
        .icon {
          position: relative;
          background-size: cover;
          background-position: center;
          &::after {
            content: '';
            display: block;
            padding-bottom: 60%;
          }
        }
        .title {
          font-size: 12px;
          line-height: 3em;
        }
      }
    }

    .tab + .list {
      .item {
        width: calc(100% - 10px);
        .title {
          font-size: 13px;
        }
      }
    }
  }
</style>
