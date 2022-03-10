<template>
  <div class="pannel">
    <border-box-3 background-color="rgba(17,53,73, 0.4)" >
      <div class="pannel-title" v-if="title">{{title}}</div>
      <div class="pannel-inner" :style="title ? 'padding: 0 30px 30px;' : 'padding: 30px;'">
        <slot />
      </div>
    </border-box-3>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
.pannel {
  height: 100%;
  /deep/ .border-box-content{
    display: flex;
    flex-direction: column;
  }
  .pannel-title{
    color: #fff;
    font-size: 18px;
    padding-top: 40px;
    padding-left: 40px;
  }
  .pannel-inner{
    flex: 1;
    
  }
}
</style>