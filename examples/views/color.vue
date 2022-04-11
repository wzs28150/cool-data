<template>
  <div class="color">
    <el-row class="item" :gutter="20" v-for="(item, index) in Theme" :key="index">
      <el-col :span="2" class="item-title" style="text-align:left">{{ index }}</el-col>
      <el-col :span="2">
        <div class="col-inner">
          <div class="col-title">标题颜色</div>
          <div class="color-show">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.title.textStyle.color"
              placement="top-start"
            >
              <div
                class="color-show-item"
                :style="'background-color: ' + item.title.textStyle.color + ';'"
              ></div>
            </el-tooltip>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col-inner">
          <div class="col-title">副标题颜色</div>
          <div class="color-show">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.title.subtextStyle.color"
              placement="top-start"
            >
              <div
                class="color-show-item"
                :style="'background-color: ' + item.title.subtextStyle.color + ';'"
              ></div>
            </el-tooltip>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col-inner">
          <div class="col-title">坐标轴</div>
          <div class="color-show">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.categoryAxis.axisLine.lineStyle.color"
              placement="top-start"
            >
              <div
                class="color-show-item"
                :style="'background-color: ' + item.categoryAxis.axisLine.lineStyle.color + ';'"
              ></div>
            </el-tooltip>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col-inner">
          <div class="col-title">坐标轴文字</div>
          <div class="color-show">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.valueAxis.axisLabel.color"
              placement="top-start"
            >
              <div
                class="color-show-item"
                :style="'background-color: ' + item.valueAxis.axisLabel.color + ';'"
              ></div>
            </el-tooltip>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col-inner">
          <div class="col-title">图例文字</div>
          <div class="color-show">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.legend.textStyle.color"
              placement="top-start"
            >
              <div
                class="color-show-item"
                :style="'background-color: ' + item.legend.textStyle.color + ';'"
              ></div>
            </el-tooltip>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div style="justify-content: flex-start;display: flex; text-align: left;">
          <div class="col-inner">
            <div class="col-title">图表颜色</div>
            <div class="color-show">
              <el-tooltip
                class="item"
                effect="dark"
                :content="typeObj(it) ? `linear-gradient(to right, ${it.colorStops[0].color},${it.colorStops[1].color})` : it"
                placement="top-start"
                v-for="(it, ind) in item.color"
                :key="ind"
              >
                <div
                  v-if="typeObj(it)"
                  class="color-show-item"
                  :style="`background-image: linear-gradient(to right, ${it.colorStops[0].color},${it.colorStops[1].color});`"
                ></div>
                <div v-else class="color-show-item" :style="'background-color: ' + it + ';'"></div>
              </el-tooltip>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col-inner" style="height: 100%; display: flex; align-items: center; box-sizing: border-box;">
          <div
            class="copy"
            :data-clipboard-text="`import { Theme } from 'cool-data';const { ${index} } = Theme`"
            @click="copy"
          >
            <div class="copy-tip">
              点击复制代码
             <el-icon><document-copy /></el-icon>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { Theme } from "@packages";
import { DocumentCopy } from "@element-plus/icons-vue";
import Clipboard from "clipboard";

const typeObj = (obj) => {
  var type = Object.prototype.toString.call(obj);
  if (type == '[object Object]') {
    return true
  } else {
    return false
  }
}

const copy = () => {
  const clipboard = new Clipboard('.copy');
  clipboard.on('success', () => {
    ElMessage({
      message: '复制成功',
      type: 'success'
    });
    // 释放内存
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    // 不支持复制
    console.log('该浏览器不支持自动复制')
    // 释放内存
    clipboard.destroy()
  })
}
</script>

<style lang="less" scoped>
.color {
  width: 100%;
  .item {
    color: #fff;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    .copy {
      font-size: 14px;
      cursor: pointer;
      .copy-tip{
        display: flex;
        align-items: center;
        justify-content: center;
        i{
          margin-left: 5px;
        }
      }
    }
    .item-title {
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    .col-inner {
      padding: 20px 0;
    }

    .col-title {
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 1em;
    }
    .color-show {
      display: flex;
      justify-content: center;
      .color-show-item {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin: 0 2px;
      }
    }
  }
}
</style>