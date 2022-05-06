<template>
  <div style="width: 100vw;height: 100vw;position: relative;">
  </div>
</template>

 :isDraggable="item.drag"  <!-- 是否可移动 默认为true -->
        :isResizable="item.resize"  <!-- 是否可缩放 默认为true -->
        :isRotate="item.rotate"   <!-- 是否可旋转  默认为false -->
        :isActive="item.active"  <!-- 是否激活 默认为false -->
        :rotate="0"  <!-- 旋转角度 默认为0 -->


        <vue3ResizeDrag v-for="(item, index) in project[0].chart" :id="index" :key="index" :page-index="0" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :is-draggable="true" :is-resizable="true" :is-rotate="true" :is-active="item.active" :rotate="0" class="chart-item"></vue3ResizeDrag>