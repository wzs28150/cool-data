
<template>
  <router-view />
</template>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-menu-item:hover {
  background-color: rgba(6, 30, 93, 0.5) !important;
}
.cm-s-darcula.CodeMirror{
  background: none!important;
}
.CodeMirror-scroll{
  // background-color: rgba(6, 30, 93, 0.5);
  background: none!important;
}
.cm-s-darcula .CodeMirror-gutters{
  background: none!important;
}
.inner .cm-s-darcula span.cm-tag{
  font-style: normal;
  text-decoration: none;
}
.CodeMirror-vscrollbar {
  overflow-y: hidden!important;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-track {
    background: #373737;
}
::-webkit-scrollbar-thumb {
    background: #14151c;
    border-left: 1px solid #373737;
    border-right: 1px solid #373737;
}
</style>
