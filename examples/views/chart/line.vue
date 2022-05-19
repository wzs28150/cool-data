<!--
 * @Title: 折线图设置及预览
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-05-16 21:32:02
 * @LastEditors: wzs
 * @LastEditTime: 2022-05-18 13:48:55
-->
<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" :span="12">
      <div class="item">
        <div class="inner">
          <chart
            autoresize
            :horizontal="data.horizontal"
            :dataset="data.dataset"
            :through="data.through"
            :through-url="data.throughUrl"
          >
            <Title v-if="data.title.show" :text="data.title.text" />
            <Legend v-if="data.legend.show" />
            <XAxis
              type="category"
              :axis-line="data.xAxis.axisLine"
              :axis-label="data.xAxis.axisLabel"
              :split-line="data.xAxis.splitLine"
            />
            <YAxis
              type="value"
              :axis-line="data.yAxis.axisLine"
              :axis-label="data.yAxis.axisLabel"
              :split-line="data.yAxis.splitLine"
            />
            <Line
              v-for="(item, index) in data.list"
              :key="index"
              :smooth="item.smooth"
              :dashed="item.dashed"
              :stack="item.stack"
              :step="item.step"
            />
            <!-- <Line :dataset-index="1" /> -->
          </chart>
        </div>
      </div>
      <div class="item">
        <div ref="codewapper" class="inner">
          <Codemirror
            ref="cmRefDom"
            v-model:value="code"
            :options="cmOptions"
            :height="codeHeight"
            class="code"
          />
        </div>
      </div>
    </el-col>
    <el-col type="flex" style="height: calc((100vh - 60px) - 40px)" :span="12">
      <div class="add-bar-form">
        <el-scrollbar style="height: calc((100vh - 60px) - 40px)">
          <div class="inner">
            <el-collapse v-model="activeNames">
              <el-collapse-item title="基础设置" name="1">
                <div class="setting-item">
                  <div class="setting-item-title">方向:</div>
                  <el-switch
                    v-model="data.horizontal"
                    class="switch"
                    inactive-color="#999999"
                    inline-prompt
                    active-text="横"
                    inactive-text="纵"
                  />
                </div>
                <div class="setting-item">
                  <div class="setting-item-title">穿透:</div>
                  <el-radio-group
                    v-model="data.through"
                    size="large"
                    @change="throughChange"
                  >
                    <el-radio label="none"> 不跳转 </el-radio>
                    <el-radio label="whole"> 整体跳转 </el-radio>
                    <el-radio label="data"> 按数据 </el-radio>
                    <el-radio label="series"> 按系列 </el-radio>
                  </el-radio-group>
                </div>
                <div v-if="data.through == 'whole'" class="setting-item">
                  <div class="setting-item-title">链接:</div>
                  <el-input
                    v-model="data.throughUrl"
                    placeholder="请设置穿透地址"
                  />
                </div>
                <div v-if="data.through == 'data'">
                  <div
                    v-for="(item, index) in data.dataset[0].source"
                    :key="index"
                    class="setting-item"
                  >
                    <div class="setting-item-title">链接{{ index + 1 }}:</div>

                    <el-input
                      v-model="data.throughUrl[item.category]"
                      :placeholder="`请设置${item.category}穿透地址`"
                    />
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="标题" name="2">
                <div class="setting-item">
                  <div class="setting-item-title">显示:</div>
                  <el-switch
                    v-model="data.title.show"
                    class="switch"
                    inactive-color="#999999"
                    inline-prompt
                    active-text="是"
                    inactive-text="否"
                  />
                </div>
                <div class="setting-item">
                  <div class="setting-item-title">内容:</div>
                  <el-input
                    v-model="data.title.text"
                    placeholder="请设置堆叠的名称"
                  />
                </div>
              </el-collapse-item>
              <el-collapse-item title="图例" name="3">
                <div class="setting-item">
                  <div class="setting-item-title">显示:</div>
                  <el-switch
                    v-model="data.legend.show"
                    class="switch"
                    inactive-color="#999999"
                    inline-prompt
                    active-text="是"
                    inactive-text="否"
                  />
                </div>
              </el-collapse-item>
              <el-collapse-item title="数据" name="4">
                <div class="setting-item">
                  <div class="setting-item-title">类型:</div>
                  <el-select
                    v-model="dataType"
                    class="m-2"
                    placeholder="Select"
                  >
                    <el-option label="静态数据" value="静态数据" />
                  </el-select>
                  <el-button
                    type="primary"
                    style="margin-left: auto"
                    :icon="Edit"
                    @click="dataShow = true"
                  />
                </div>
              </el-collapse-item>
              <el-collapse-item title="轴,网格线" name="5">
                <div class="setting-item">
                  <div class="setting-item-title">X轴:</div>
                  <el-checkbox
                    v-model="data.xAxis.axisLabel"
                    label="轴标签"
                    size="large"
                  />
                  <el-checkbox
                    v-model="data.xAxis.axisLine"
                    label="轴线"
                    size="large"
                  />
                </div>
                <div class="setting-item">
                  <div class="setting-item-title">Y轴:</div>
                  <el-checkbox
                    v-model="data.yAxis.axisLabel"
                    label="轴标签"
                    size="large"
                  />
                  <el-checkbox
                    v-model="data.yAxis.axisLine"
                    label="轴线"
                    size="large"
                  />
                </div>
                <div class="setting-item">
                  <div class="setting-item-title">网格线:</div>
                  <el-checkbox
                    v-model="data.xAxis.splitLine"
                    label="纵向"
                    size="large"
                  />
                  <el-checkbox
                    v-model="data.yAxis.splitLine"
                    label="横向"
                    size="large"
                  />
                </div>
              </el-collapse-item>
              <el-collapse-item title="Line设置" name="6">
                <el-button color="#626aef" plain @click="addLine">
                  添加Line
                </el-button>
                <div class="bar-list">
                  <div
                    v-for="(item, index) in data.list"
                    :key="index"
                    class="bar-item"
                  >
                    <div class="title">
                      <div class="text">Line{{ index + 1 }}</div>
                      <el-button
                        type="danger"
                        :icon="Delete"
                        circle
                        @click="delLine(index)"
                      />
                    </div>
                    <div class="setting-item">
                      <div class="setting-item-title">平滑:</div>
                      <el-switch
                        v-model="item.smooth"
                        class="switch"
                        inactive-color="#999999"
                        inline-prompt
                        active-text="开"
                        inactive-text="关"
                      />
                      <div class="setting-item-title">虚线:</div>
                      <el-switch
                        v-model="item.dashed"
                        class="switch"
                        inactive-color="#999999"
                        inline-prompt
                        active-text="开"
                        inactive-text="关"
                      />
                      <div class="setting-item-title">时序:</div>
                      <el-switch
                        v-model="item.step"
                        class="switch"
                        inactive-color="#999999"
                        inline-prompt
                        active-text="开"
                        inactive-text="关"
                      />
                    </div>
                    <div class="setting-item">
                      <div class="setting-item-title">堆叠:</div>
                      <el-input
                        v-model="item.stack"
                        placeholder="请设置堆叠的名称"
                      />
                    </div>
                    <div
                      v-if="data.through != 'whole' && data.through == 'series'"
                      class="setting-item"
                    >
                      <div class="setting-item-title">穿透:</div>
                      <el-input
                        v-model="item.url"
                        placeholder="请设置穿透的地址"
                      />
                    </div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>

  <div v-if="dataShow" class="data-show">
    <SpreadsheetForm ref="spreadsheet" :dataset="data.dataset[0]" />
    <div class="data-show-btn">
      <el-button type="primary" color="#0072ce" @click="dataChangeFinish">
        完成
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, reactive } from 'vue';
import { Delete, Edit } from '@element-plus/icons-vue';
import Codemirror from 'codemirror-editor-vue3';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/theme/darcula.css';
import { deepClone } from '@packages';
import SpreadsheetForm from '@/components/spreadsheet/index.vue';
const spreadsheet = ref(null);
const code = ref('');
const codewapper = ref();
const codeHeight = ref(0);
const cmOptions = ref({
  mode: 'text/x-vue',
  // mode: 'text/html',
  tabSize: 2,
  theme: 'darcula',
  readOnly: true
});
const activeNames = ref(['1', '2', '3', '4', '5', '6']);

const lineConfig = {
  url: '',
  smooth: false,
  dashed: false,
  step: false
};

const dataType = ref('静态数据');

const dataShow = ref(false);

const data = reactive({
  horizontal: false,
  through: 'none',
  throughUrl: '',
  title: {
    show: false,
    text: '我是标题'
  },
  legend: {
    show: false
  },
  dataset: [
    {
      dimensions: ['product', '系列1', '系列2', '系列3'],
      source: [
        { product: '周一', 系列1: 43.3, 系列2: 143.3, 系列3: 43.3 },
        { product: '周二', 系列1: 83.1, 系列2: 243.3, 系列3: 343.3 },
        { product: '周三', 系列1: 86.4, 系列2: 43.3, 系列3: 143.3 },
        { product: '周四', 系列1: 72.4, 系列2: 343.3, 系列3: 43.3 },
        { product: '周五', 系列1: 95.4, 系列2: 243.3, 系列3: 143.3 },
        { product: '周六', 系列1: 72.4, 系列2: 303.3, 系列3: 243.3 },
        { product: '周日', 系列1: 90.4, 系列2: 313.3, 系列3: 343.3 }
      ]
    },
    {
      transform: {
        type: 'filter',
        config: {
          dimension: '系列1',
          '>': 70
        }
      }
    },
    {
      transform: {
        type: 'sort',
        config: {
          dimension: '系列3',
          order: 'asc'
        }
      }
    }
  ],
  xAxis: {
    axisLine: true,
    axisLabel: true,
    splitLine: false
  },
  yAxis: {
    axisLine: false,
    axisLabel: true,
    splitLine: true
  },
  list: [deepClone(lineConfig, true)]
  // list: [
  //   {
  //     round: false,
  //     stack: null,
  //     bg: false
  //   },
  //   {
  //     round: false,
  //     stack: null,
  //     bg: false
  //   },
  //   {
  //     round: false,
  //     stack: null,
  //     bg: false
  //   }
  // ]
});
// 监听设置的改变
watch(
  () => data,
  (newVal) => {
    setCode(newVal);
  },
  {
    deep: true
  }
);
// 添加柱子
const addLine = () => {
  if (data.list.length < data.dataset[0].dimensions.length - 1) {
    data.list.push({
      ...deepClone(lineConfig, true)
    });
  }
};
// 删除柱子
const delLine = (index) => {
  if (data.list.length > 1) {
    data.list.splice(index, 1);
  }
};
// 设置编辑器中的代码
const setCode = (val) => {
  // console.log(val);
  let listCode = '';
  val.list.map((item) => {
    listCode += `\t\t<Line${item.smooth ? ' smooth' : ''}${item.step ? ' step' : ''}${
      item.dashed ? ' dashed' : ''
    }${item.stack ? ' :stack="' + item.stack + '"' : ''}${
      item.url ? ' :url="' + item.url + '"' : ''
    } />\n`;
  });
  let titleCode = val.title.show
    ? `\n\t\t<Title text="${val.title.text}" />`
    : '';
  let legendCode = val.legend.show ? `\n\t\t<Legend  />` : '';
  code.value = `<template>\n\t<chart autoresize ${
    val.horizontal ? 'horizontal ' : ''
  }${val.through != 'none' ? ':through="' + val.through + '" ' : ''}${
    val.throughUrl
      ? ":throughUrl='" +
        (val.through == 'whole'
          ? val.throughUrl
          : JSON.stringify(val.throughUrl)) +
        "'"
      : ''
  }:dataset="dataset">${titleCode}${legendCode}\n\t\t<XAxis type="category"${
    data.xAxis.axisLine ? '' : ' :axis-line="false"'
  }${data.xAxis.axisLabel ? '' : ' :axis-label="false"'}${
    data.xAxis.splitLine ? ' :split-line="true"' : ''
  } />\n\t\t<YAxis type="value"${
    data.yAxis.axisLine ? ' :axis-line="true"' : ''
  }${data.yAxis.axisLabel ? '' : ' :axis-label="false"'}${
    data.yAxis.splitLine ? '' : ' :split-line="false"'
  } />\n${listCode}\t</chart>\n</template>`;

  code.value += `\n<script setup>\n\timport { ref } from 'vue';\n\tconst dataset = ref(${JSON.stringify(
    data.dataset,
    null,
    2
  )});\n<\/script>`;
};

setCode(data);

const dataChangeFinish = () => {
  // dataShow.value = false
  data.dataset[0] = spreadsheet.value.getDataset();
  // console.log(dataset);
  dataShow.value = false;
};

const throughChange = (label) => {
  console.log(label);
  switch (label) {
    case 'whole':
      data.throughUrl = 'color';
      break;
    case 'data':
      data.throughUrl = {};
      data.dataset[0].source.map((item) => {
        data.throughUrl[item.category] = 'http://www.baidu.com';
      });
      break;
    default:
      data.throughUrl = '';
      break;
  }
};
onMounted(() => {
  // 设置编辑器的高度
  codeHeight.value = codewapper.value.clientHeight;
});
</script>

<style lang="less" scoped>
.list {
  width: 100%;

  .code {
    font-size: 16px;
    line-height: 1.2em;
  }

  .item {
    position: relative;
    background-color: rgba(6, 30, 93, 0.5);
    // margin-bottom: 20px;
    overflow: hidden;
    height: calc(50% - 10px);
    margin-bottom: 20px;

    .change {
      position: absolute;
      color: #fff;
      z-index: 55;
      right: 0;
      top: 0;
      cursor: pointer;
    }

    &::after {
      content: '';
      display: block;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // padding-bottom: 40px;
      box-sizing: border-box;
      overflow: hidden;

      & > div {
        width: 100%;
        margin: 0 auto;
      }

      .digitalflopclick {
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        cursor: pointer;
        text-align: right;
        padding: 10px;
        font-size: 14px;
      }

      .copy {
        cursor: pointer;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 20px;
        height: 30px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(6, 30, 93, 0.9);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        text-align: center;
        // opacity: 0;
        // visibility: hidden;
        transition: all 0.4s;

        .item-title {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          // margin-bottom: 10px;
        }

        .copy-tip {
          color: #fff;
          font-size: 14px;
        }
      }

      &:hover {
        .copy {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  .add-bar-form {
    background-color: rgba(6, 30, 93, 0.5);
    height: 100%;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    &:deep(.el-input) {
      .el-input__inner {
        background-color: #061237;
        color: #cccccc;
      }
    }

    .inner {
      color: #4fd2dd;

      &:deep(.el-collapse) {
        border-color: rgba(#4fd2dd, 0.3) !important;

        .el-collapse-item__header,
        .el-collapse-item__wrap {
          background: none;
          color: #4fd2dd;
          padding: 0 20px;
          border-color: rgba(#4fd2dd, 0.3) !important;
        }

        .el-collapse-item__header {
          color: #fff;
          font-weight: bold;
        }

        .el-collapse-item__header.is-active {
          border-bottom-color: transparent !important;
          text-shadow: 0 0 5px #eee;
        }

        .el-collapse-item__content {
          padding-bottom: 10px;
        }
      }

      .setting-item {
        display: flex;
        align-items: center;
        padding: 5px 0;
        color: #4fd2dd;

        .setting-item-title {
          margin-right: 20px;
          min-width: 4em;
        }

        .switch {
          margin-right: 20px;
        }
      }

      .bar-list {
        .bar-item {
          margin-top: 20px;
          position: relative;
          padding: 20px;

          &::after {
            content: '';
            display: block;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }

          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;

            .text {
              font-weight: bold;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

.data-show {
  position: fixed;
  z-index: 9999;
  width: 750px;
  // height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #061237;
  box-shadow: 0 0 20px #999;
  padding: 30px;

  .data-show-btn {
    display: flex;
    padding-top: 20px;
    justify-content: center;

    .el-button {
      padding: 8px 30px;
    }
  }
}
</style>
