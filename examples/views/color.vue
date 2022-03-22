<template>
  <div class="color">
    <el-row class="item" type="flex" :gutter="20" v-for="(item, index) in list" :key="index">
      <el-col :span="2" class="item-title" style="text-align:left">{{ index }}</el-col>
      <el-col :span="2">
        <div class="col-inner">
          <div class="col-title">标题颜色</div>
          <div class="color-show">
            <el-tooltip class="item" effect="dark" :content="item.titleColor" placement="top-start">
              <div class="color-show-item" :style="'background-color: ' + item.titleColor + ';'"></div>
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
              :content="item.subtitleColor"
              placement="top-start"
            >
              <div class="color-show-item" :style="'background-color: ' + item.subtitleColor + ';'"></div>
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
              :content="item.axes[0].axisLineColor"
              placement="top-start"
            >
              <div
                class="color-show-item"
                :style="'background-color: ' + item.axes[0].axisLineColor + ';'"
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
              :content="item.legendTextColor"
              placement="top-start"
            >
              <div
                class="color-show-item"
                :style="'background-color: ' + item.legendTextColor + ';'"
              ></div>
            </el-tooltip>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div style="justify-content: flex-start;display: flex; text-align: left;">
          <div class="col-inner">
            <div class="col-title">图表颜色</div>
            <div class="color-show">
              <el-tooltip
                class="item"
                effect="dark"
                :content="it"
                placement="top-start"
                v-for="(it, ind) in item.color"
                :key="ind"
              >
                <div class="color-show-item" :style="'background-color: ' + it + ';'"></div>
              </el-tooltip>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col-inner" style="height: 100%; display: flex; align-items: center;">
          <div class="copy" :data-clipboard-text="`import { Theme } from 'cool-data';
const { ${index} } = Theme`" @click="copy">
            <div class="copy-tip">
              点击复制代码
              <i class="el-icon-document-copy"></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Theme } from '../../components/lib/index';

export default {
  data() {
    return {
      list: Theme
    }
  },
  methods: {
    copy() {
      var clipboard = new this.Clipboard('.copy');
      clipboard.on('success', () => {
        this.$message({
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
    },
  }
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