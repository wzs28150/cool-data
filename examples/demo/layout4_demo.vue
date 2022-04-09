<template>
  <layout-4
    :width="1920"
    :height="1080"
    :isScale="true"
    background="#0b0f34"
    leftSideWidth="22%"
    :titleHeight="104"
    title="大屏数据可视化模板"
  >
    <template #left>
      <border-box-13 :color="['#185bff']" backgroundColor style="flex: 1;">
        <div class="pannel">
          <ModuleTitle7 title="板块标题" />
          <div class="chart">
            <bar-1 />
          </div>
        </div>
      </border-box-13>
      <border-box-13 :color="['#185bff']" backgroundColor style="flex: 1;">
        <div class="pannel">
          <ModuleTitle7 title="板块标题" />
          <div class="chart">
            <pie-6 />
          </div>
        </div>
      </border-box-13>
      <border-box-13 :color="['#185bff']" backgroundColor style="flex: 1;">
        <div class="pannel">
          <ModuleTitle7 title="板块标题" />
          <div class="chart">
            <pie-2 />
          </div>
        </div>
      </border-box-13>
    </template>

    <template #right>
      <border-box-13 :color="['#185bff']" backgroundColor style="flex: 1;">
        <div class="pannel">
          <ModuleTitle7 title="板块标题" />
          <div class="chart">
            <bar-3 />
          </div>
        </div>
      </border-box-13>
      <border-box-13 :color="['#185bff']" backgroundColor style="flex: 1;">
        <div class="pannel">
          <ModuleTitle7 title="板块标题" />
          <div class="chart">
            <bar-11 />
          </div>
        </div>
      </border-box-13>
      <border-box-13 :color="['#185bff']" backgroundColor style="flex: 1;">
        <div class="pannel">
          <ModuleTitle7 title="板块标题" />
          <div class="chart">
            <pie-4 />
          </div>
        </div>
      </border-box-13>
    </template>
    <template #main>
      <div style="flex: 1;">aa</div>
      <div style="flex: 1;">aa</div>
      <div class="main-bottom">
        <border-box-13 :color="['#185bff']" backgroundColor style>
          <div class="pannel">
            <ModuleTitle7 title="板块标题" @click="c" />
            <div class="chart">
              <scroll-table ref="table" />
            </div>
          </div>
        </border-box-13>
        <border-box-13 :color="['#185bff']" backgroundColor style="flex: 1;">
          <div class="pannel">
            <ModuleTitle7 title="板块标题" />
            <div class="chart">
              <scroll-table />
            </div>
          </div>
        </border-box-13>
      </div>
    </template>
    <template #background>
      <BackgroundCanvas2 />
    </template>
  </layout-4>
</template>

<script setup>
import { ref } from 'vue';
const table = ref(null)
const c = () => {
  table.value.updateRows({
    dimensions: ["车牌号", "里程数(km)"],
    source: [
      {
        "车牌号": "黑A12341",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12342",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12343",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12344",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12345",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12341",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12342",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12343",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12344",
        "里程数(km)": "134.2"
      },
      {
        "车牌号": "黑A12345",
        "里程数(km)": "134.2"
      }
    ]
  })
}
</script>

<style lang="less" scoped>
.pannel {
  display: flex;
  flex-direction: column;
  height: 100%;
  .chart {
    flex: 1;
  }
}

.main-bottom {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    flex: 1;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>