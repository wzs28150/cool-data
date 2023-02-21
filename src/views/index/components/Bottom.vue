<template>
  <div class="bottom-bar">
    <div class="bottom-bar-inner">
      <div class="scale-select">
        <div class="scale-select-show" @click="scaleSelectShow = !scaleSelectShow">
          {{ setting.scale }}%<el-icon class="arrow"><arrow-up /></el-icon>
        </div>
        <ul v-if="scaleSelectShow">
          <li @click="setScale(200)">200%</li>
          <li @click="setScale(150)">150%</li>
          <li @click="setScale(100)">100%</li>
          <li @click="setScale(50)">50%</li>
          <li @click="resetBoard()">自适应</li>
        </ul>
      </div>
      <el-icon :size="14" class="minus" @click="minusScale">
        <minus />
      </el-icon>
      <div class="scale">
        <el-slider v-model="setting.scale" size="small" :max="200" :show-tooltip="false" />
      </div>
      <el-icon :size="14" class="plus" @click="plusScale">
        <plus />
      </el-icon>
      <div class="mini-map-show-btn">
        <el-icon :size="20" @click="miniMapShow = !miniMapShow">
          <scale-to-original />
        </el-icon>
        <div v-if="miniMapShow" class="mini-map" :style="`width:${width / 10}px; height: ${height / 10}px;`">
          <div class="mini-map-inner"></div>
          <div v-dragmini class="mini-map-select" :style="miniMapSelectStyle"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ScaleToOriginal, Plus, Minus, ArrowUp } from '@element-plus/icons-vue';
import { ref, computed, nextTick, inject } from 'vue';
const scaleSelectShow = ref(false);
const miniMapShow = ref(true);
const setting = inject('setting');
const { needMiniMapMove, miniMapScale, miniMapSetting } = inject('miniMapSetting');
const { width, height } = inject('canvas');
const emits = defineEmits(['miniMapDrag'])
const minusScale = () => {
  setting.scale = Math.max(50, setting.scale - 10);
};
const plusScale = () => {
  setting.scale = Math.min(200, setting.scale + 10);
};


const miniMapSelectStyle = computed(() => {
  return {
    width: `${!needMiniMapMove.value ? width / 10 : (width / 10) * miniMapScale.value
      }px`,
    height: `${!needMiniMapMove.value ? height / 10 : (height / 10) * miniMapScale.value
      }px`,
    left: `${needMiniMapMove.value ? miniMapSetting.miniLeft : 0}px`,
    top: `${needMiniMapMove.value ? miniMapSetting.miniTop : 0}px`,
    // transform: `translate(${miniLeft}px, ${miniTop}px)`,
  };
});
const setScale = (e) => {
  setting.scale = e;
  setting.scaleSelectShow = false;
};

// 拖拽小地图
const vDragmini = {
  mounted: (el) => {
    el.onmousedown = function (e) {
      const disX = e.clientX;
      const disY = e.clientY;
      const originalScrollLeft = e.target.offsetLeft;
      const originalScrollTop = e.target.offsetTop;
      const originalPointerEvents = el.style['pointer-events'];
      const originalScrollBehavior = el.style['scroll-behavior'];

      document.onmousemove = function (ev) {
        ev.preventDefault();
        el.style['transition'] = 'none';
        const distanceX = ev.clientX - disX;
        const distanceY = ev.clientY - disY;
        console.log(width / 10 - (width / 10) * miniMapScale.value, distanceX + originalScrollLeft);
        const left = Math.min(
          width / 10 - (width / 10) * miniMapScale.value,
          Math.max(0, distanceX + originalScrollLeft)
        );
        const top = Math.min(
          height / 10 - (height / 10) * miniMapScale.value,
          Math.max(0, distanceY + originalScrollTop)
        );
        
        emits('miniMapDrag', {
          miniLeft: left,
          miniTop: top,
          distanceX,
          distanceY
        })
        el.style['pointer-events'] = 'none';
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        el.style['transition'] = 'all 0.4s';
        el.style['scroll-behavior'] = originalScrollBehavior;
        el.style['pointer-events'] = originalPointerEvents;
      };
    };
  },
};
</script>