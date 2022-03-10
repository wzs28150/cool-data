<template>
  <div class="right-table">
    <scroll-table :option="option"  />
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {
        dataset: {
          source: [
            ['车牌号', '里程数(km)'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2']
          ]
        },
        index: true,
        columnWidth: [50],
        align: ['center', 'left', 'center'],
        waitTime: 3000
      }
    }
  }
}
</script>
<style scoped>
.right-table {
  margin-top: 20px;
  height: calc(100% - 20px);
}
</style>