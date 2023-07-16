<template>
  <div class="top">
    <el-row class="top-inner" align="middle">
      <el-col :span="2"><div class="logo">可视化大屏</div></el-col>
      <el-col :span="2"><el-input v-model="input" placeholder="请输入项目名称" /></el-col>
    </el-row>
    <div class="top-btn">
      <div class="item">
        <div class="icon view"></div>
      </div>
      <div class="item">
        <div class="icon save"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const input = ref('新建项目');
</script>
<style lang="less" scoped>
  .top {
    height: 40px;
    position: relative;
    background-color: #323232;
    z-index: 6;
    display: flex;
    &::after {
      border-bottom: 1px solid #0a0a0a;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }
    .top-inner {
      position: relative;
      z-index: 1;
      flex: 1;
      height: 100%;
      .logo {
        font-weight: bold;
        font-size: 20px;
        padding-left: 10px;
        line-height: 40px;
      }
      &:deep(.el-input) {
        .el-input__inner {
          background-color: #323232;
          box-shadow: none;
          color: #ccc;
          &:hover,
          &:focus {
            background-color: #3a3a3a;
          }
        }
      }
    }
    .top-btn {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;
      .item {
        // margin-right: 10px;
        padding: 10px;
        cursor: pointer;
        &:hover {
          background-color: hsla(0, 0%, 100%, 0.08);
          border-radius: 2px;
        }
        .icon {
          width: 18px;
          height: 18px;
          background-size: cover;
          &.view {
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg4NDUzNDAxMTg3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4NTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTcwMy45NTYwMDMgNjMuOTk2YTMxLjk5OCAzMS45OTggMCAxIDEgMC02My45OTZoMTg2LjkzMjMxNkM5NjQuNDE5NzI0IDAgMTAyMy45MzYwMDQgNTkuNTE2MjggMTAyMy45MzYwMDQgMTMzLjA0NzY4NVYzMTkuOTgwMDAxYTMxLjk5OCAzMS45OTggMCAxIDEtNjMuOTk2IDBWMTMzLjA0NzY4NUM5NTkuOTQwMDA0IDk0LjkwNjA2OCA5MjkuMDI5OTM2IDYzLjk5NiA4OTAuODg4MzE5IDYzLjk5Nkg3MDMuOTU2MDAzeiBtMjU1Ljk4NDAwMSA2MjQuNzkyOTUxYTMxLjk5OCAzMS45OTggMCAxIDEgNjMuOTk2IDB2MjAyLjA5OTM2OEMxMDIzLjkzNjAwNCA5NjQuNDE5NzI0IDk2NC40MTk3MjQgMTAyMy45MzYwMDQgODkwLjg4ODMxOSAxMDIzLjkzNjAwNGgtMTI2LjMyODEwNGEzMS45OTggMzEuOTk4IDAgMSAxIDAtNjMuOTk2aDEyNi4zMjgxMDRjMzguMTQxNjE2IDAgNjkuMDUxNjg0LTMwLjkxMDA2OCA2OS4wNTE2ODUtNjkuMDUxNjg1di0yMDIuMDk5MzY4ek0zMzUuMTQ3MDUzIDk1OS45NDAwMDRhMzEuOTk4IDMxLjk5OCAwIDEgMSAwIDYzLjk5NkgxMzMuMDQ3Njg1QTEzMy4wNDc2ODUgMTMzLjA0NzY4NSAwIDAgMSAwIDg5MC44ODgzMTlWNzAzLjk1NjAwM2EzMS45OTggMzEuOTk4IDAgMSAxIDYzLjk5NiAwdjE4Ni45MzIzMTZDNjMuOTk2IDkyOS4wMjk5MzYgOTQuOTA2MDY4IDk1OS45NDAwMDQgMTMzLjA0NzY4NSA5NTkuOTQwMDA0aDIwMi4wOTkzNjh6TTYzLjk5NiAzMTkuOTgwMDAxYTMxLjk5OCAzMS45OTggMCAwIDEtNjMuOTk2IDBWMTMzLjA0NzY4NUMwIDU5LjUxNjI4IDU5LjUxNjI4IDAgMTMzLjA0NzY4NSAwSDMxOS45ODAwMDFhMzEuOTk4IDMxLjk5OCAwIDAgMSAwIDYzLjk5NkgxMzMuMDQ3Njg1Qzk0LjkwNjA2OCA2My45OTYgNjMuOTk2IDk0LjkwNjA2OCA2My45OTYgMTMzLjA0NzY4NVYzMTkuOTgwMDAxek01MTEuOTY4MDAyIDY3MS45NTgwMDNjMTA5LjYyNTE0OCAwIDIxMS42MzQ3NzMtNTYuODkyNDQ0IDMwOC4zMzI3MjktMTc1Ljk4OTAwMUM3MjMuNjAyNzc1IDM3Ni44NzI0NDUgNjIxLjU5MzE1IDMxOS45ODAwMDEgNTExLjk2ODAwMiAzMTkuOTgwMDAxYy0xMDkuNjI1MTQ4IDAtMjExLjYzNDc3MyA1Ni44OTI0NDQtMzA4LjMzMjcyOSAxNzUuOTg5MDAxQzMwMC4zMzMyMjkgNjE1LjA2NTU1OCA0MDIuMzQyODU0IDY3MS45NTgwMDMgNTExLjk2ODAwMiA2NzEuOTU4MDAzeiBtMCA2My45OTZjLTEzMC42MTU4MzcgMC0yNDkuOTY4Mzc3LTY2LjU1NTg0LTM1Ny45OTM2MjUtMTk5LjY2NzUyMWE2My45OTYgNjMuOTk2IDAgMCAxIDAtODAuNjM0OTZDMjYxLjk5OTYyNSAzMjIuNTM5ODQxIDM4MS4zNTIxNjUgMjU1Ljk4NDAwMSA1MTEuOTY4MDAyIDI1NS45ODQwMDFjMTMwLjYxNTgzNyAwIDI0OS45NjgzNzcgNjYuNTU1ODQgMzU3Ljk5MzYyNSAxOTkuNjY3NTIxYTYzLjk5NiA2My45OTYgMCAwIDEgMCA4MC42MzQ5NkM3NjEuOTM2Mzc5IDY2OS4zOTgxNjMgNjQyLjU4MzgzOSA3MzUuOTU0MDAzIDUxMS45NjgwMDIgNzM1Ljk1NDAwM3oiIGZpbGw9IiNlMGUwZTAiIHAtaWQ9IjE4NTIiPjwvcGF0aD48cGF0aCBkPSJNNTExLjk2ODAwMiA1NzUuOTY0MDAyYTc5Ljk5NSA3OS45OTUgMCAxIDAgMC0xNTkuOTlBNzkuOTk1IDc5Ljk5NSAwIDAgMCA1MTEuOTY4MDAyIDU3NS45NjQwMDJ6IG0wIDYzLjk5NmExNDMuOTkxMDAxIDE0My45OTEwMDEgMCAxIDEgMC0yODcuOTgyMDAxQTE0My45OTEwMDEgMTQzLjk5MTAwMSAwIDAgMSA1MTEuOTY4MDAyIDYzOS45NjAwMDJ6IiBmaWxsPSIjZTBlMGUwIiBwLWlkPSIxODUzIj48L3BhdGg+PC9zdmc+');
          }

          &.save {
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg4NDUzMzIzOTg3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTEyOCA2NGE2NCA2NCAwIDAgMC02NCA2NHY3NjhhNjQgNjQgMCAwIDAgNjQgNjRoNzY4YTY0IDY0IDAgMCAwIDY0LTY0VjEyOGE2NCA2NCAwIDAgMC02NC02NEgxMjh6IG0wLTY0aDc2OGExMjggMTI4IDAgMCAxIDEyOCAxMjh2NzY4YTEyOCAxMjggMCAwIDEtMTI4IDEyOEgxMjhhMTI4IDEyOCAwIDAgMS0xMjgtMTI4VjEyOGExMjggMTI4IDAgMCAxIDEyOC0xMjh6IiBmaWxsPSIjZTBlMGUwIiBwLWlkPSIxNjY2Ij48L3BhdGg+PHBhdGggZD0iTTIyNCA2NHYxOTJhNjQgNjQgMCAwIDAgNjQgNjRoNDQ4YTY0IDY0IDAgMCAwIDY0LTY0VjY0aC01NzZ6IG0tNjQtNjRoNzA0djI1NmExMjggMTI4IDAgMCAxLTEyOCAxMjhoLTQ0OGExMjggMTI4IDAgMCAxLTEyOC0xMjhWMHoiIGZpbGw9IiNlMGUwZTAiIHAtaWQ9IjE2NjciPjwvcGF0aD48cGF0aCBkPSJNNjcyIDE2MGEzMiAzMiAwIDEgMSA2NCAwdjY0YTMyIDMyIDAgMSAxLTY0IDB2LTY0eiIgZmlsbD0iI2UwZTBlMCIgcC1pZD0iMTY2OCI+PC9wYXRoPjwvc3ZnPg==');
          }
        }
      }
    }
  }
</style>
