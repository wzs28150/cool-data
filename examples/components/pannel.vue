<template>
  <div class="pannel">
    <border-box-3 background-color="rgba(6, 30, 93, 0.5)">
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
  .pannel-title{
    color: #fff;
    font-size: 18px;
    padding-top: 40px;
    padding-left: 40px;
  }
}
</style>