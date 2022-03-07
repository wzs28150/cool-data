<template>
  <div class="pannel">
    <border-box-3 background-color="#113549B2">
      <div class="pannel-title">{{title}}</div>
      <div class="pannel-inner">
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