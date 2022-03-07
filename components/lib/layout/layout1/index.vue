<template>
  <div class="layout" ref="layout" :style="'background-color: ' + background + ';'">
    <el-scrollbar :height="isScale ? height : '100%'">
      <div
        class="layout-contanter"
        :style="'transform:scale(' + scaleX + ',' + scaleY + ')'"
      >
        <div class="layout-title m_T25" v-if="isTitle">
          <slot name="title"></slot>
        </div>
        <div class="layout-inner">
          <div class="left" :style="'width: ' + getLeftSideWidth + ';'" v-if="isLeft">
            <slot name="left-top"></slot>
            <slot name="left-center"></slot>
            <slot name="left-bottom"></slot>
          </div>
          <div class="main">
            <slot name="main"></slot>
            <slot name="main-bottom"></slot>
          </div>
          <div class="right" :style="'width: ' + getRightSideWidth + ';'" v-if="isRight">
            <slot name="right-top"></slot>
            <slot name="right-center"></slot>
            <slot name="right-bottom"></slot>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Layout1',
  props: {
    leftSideWidth: {
      type: [String, Number],
      default: "1920px"
    },
    rightSideWidth: [String, Number],
    background: String,
    width: String,
    height: String,
    isScale: Boolean
  },
  data(){
    return {
      scaleX: 1,
      scaleY: 1,
    }
  },
  computed:{
    getLeftSideWidth: (e) => {
      return typeof (e.leftSideWidth) == 'string' ? e.leftSideWidth : e.leftSideWidth + 'px'
    },
    getRightSideWidth: (e)=>{
      return typeof (e.rightSideWidth) == 'string' ? e.rightSideWidth : e.rightSideWidth + 'px'
    },
    isLeft: ()=>{
      return true
    },
    isRight: ()=>{
      return true
    },
    isTitle: ()=>{
      return true
    }
  }
}
</script>