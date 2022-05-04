<template>
  <div class="left">
    <div class="left-inner">
      <div class="menu">
        <ul>
          <li v-for="item in menu.top" :key="item.title">
            <el-tooltip class="box-item" effect="dark" :content="item.title" placement="right">
              <span
                :class="`${item.icon} ${drawerInfo.type == item.type ? 'active' : ''}`"
                @click="drawerShow(item)"
              ></span>
            </el-tooltip>
          </li>
        </ul>
      </div>
      <div class="config">
        <ul>
          <li v-for="item in menu.bottom" :key="item.title">
            <el-tooltip class="box-item" effect="dark" :content="item.title" placement="right">
              <span
                :class="`${item.icon} ${drawerInfo.type == item.type ? 'active' : ''}`"
                @click="drawerShow(item)"
              ></span>
            </el-tooltip>
          </li>
        </ul>
      </div>
    </div>
    <!-- 弹窗 -->
    <div
      aria-modal="true"
      aria-labelledby="el-drawer__title"
      aria-label="图表"
      :class="`el-drawer ltr ${drawerFlag ? 'open' : ''} left-drawer`"
      role="dialog"
      :style="`width: ${drawerInfo.size}px`"
    >
      <header id="el-drawer__title" class="el-drawer__header">
        <span role="heading" :title="drawerInfo.title">{{ drawerInfo.title }}</span>
        <button class="el-drawer__close-btn" type="button" @click="handleDrawerClose">
          <el-icon class="el-drawer__close">
            <close />
          </el-icon>
        </button>
      </header>
      <section class="el-drawer__body">
        <chartList v-if="drawerInfo.type == 'chart'" />
        <div v-if="drawerInfo.type == 'text'" class="left-drawer-content"> text </div>
        <!-- 快捷键 -->
        <keybordList v-if="drawerInfo.type == 'keybord'" />
        <!-- 快捷键 -->
      </section>
    </div>
    <!-- 弹窗 -->
  </div>
</template>
<script setup>
  import { reactive, ref } from 'vue';
  import { Close } from '@element-plus/icons-vue';
  import chartList from './chartList.vue';
  import keybordList from './keybordList.vue';
  const drawerFlag = ref(false);
  const drawerInfo = reactive({
    title: '',
    size: 250,
    type: '',
  });

  const menu = {
    top: [
      {
        title: '图表',
        icon: 'chart',
        type: 'chart',
        size: 250,
      },
      {
        title: '文本',
        icon: 'text',
        type: 'text',
        size: 250,
      },
    ],
    bottom: [
      {
        title: '快捷键',
        icon: 'keybord',
        type: 'keybord',
        size: 250,
      },
    ],
  };
  const drawerShow = (info) => {
    if (drawerInfo.title && info.title == drawerInfo.title) {
      drawerFlag.value = !drawerFlag.value;
      return;
    }
    drawerInfo.title = info.title;
    drawerInfo.size = info.size;
    drawerInfo.type = info.type;
    drawerFlag.value = true;
  };

  const handleDrawerClose = () => {
    drawerInfo.title = '';
    drawerInfo.type = '';
    drawerInfo.size = 250;
    drawerFlag.value = false;
  };
</script>

<style lang="less" scoped>
  .left {
    width: 40px;
    height: 100%;
    position: relative;
    z-index: 5;
    background-color: #323232;
    &::after {
      border-right: 1px solid #0a0a0a;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }
    .left-inner {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #323232;

      .menu {
        padding-top: 10px;
      }
      .config {
        padding-bottom: 30px;
      }

      ul {
        li {
          margin-bottom: 10px;
          span {
            width: 20px;
            height: 20px;
            padding: 7px;
            margin: 2px;
            display: block;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.4s linear;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 20px;
            position: relative;
            border: 1px solid transparent;
            &:hover {
              background-color: hsla(0, 0%, 100%, 0.08);
              border-radius: 2px;
            }

            &.active {
              background-color: #1d1d1d;
              border: 1px solid #0a0a0a;
              box-shadow: 0 0 5px #000000 inset;
            }
            &.keybord {
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABL0lEQVRYR+2YsU7DMBCGv1+8AAugImYmZsYuPAJztzJ05zHYGWDrwMQjdGFk7sSMhNo+AzqUSpFSFFPF50aRuIxOLvf5s892IgZ+aeB8BKB3hMLg/zRoZmPg2tv7jvHvkt5+x7TOQTO7B+46JvA+/iTpoSvgN/DlzbwnfgQcAVmAn5JuDgloZgvgIgBzLYfBXHN1XDGDZnYGTBpA23Xrj/YpcJzowFzSqrpXEvAKeG0k3C4LZpZqr6uzjfFW0rI04CXw2Mj2IunZzFLtc+A8YXAm6aMooHeupeKLDXEAere6lmr1SO2lij2AvVSxBzCq2GNvJzaWGa9Kr8E1MPNC7Imvts/T3BP1gdl2Xp/1TTJYwOrsd9InHbCpz4jNvPFvxjsKYTAMeg1442MOeg3+AF6TFzjQf8lvAAAAAElFTkSuQmCC);
            }
            &.chart {
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB6UlEQVRYR+2YMWgUQRSGv79QmxRCSisrIVqIdhErm2BpQFtFULBRMCAWWkSwS2FhExCtAgYS7bQR0cJe0UKDimBrJYKkyC8vzMpK7m7Zncs5xQ4c7O3Om//jn5k3jxGFNxXORw+YO0M7HLR9GYjfS2BBknNFcuIHAb4D9qVBT0v6nCOQGzsI8GNt0HlJ73NFcuJ7wBz3IrZ3cJiDts8AB4FHkn4M6/dfHLQ9CzxMUM8lXS0N8BywmKA+SAo3B7axOGj7AHAUeC3pZ9PGsD05QNtTwAtgP/BW0tnSAA8D6xWUpEOlAR4B1nrAygHbrc5i272D/6zpcTpo+xRwF/gGXKxS0KTTzNAptr0CHE8O3JD0NJ5LAoz0E2ko2m1Jj3cN0PZ0iCSxxeqAH7VJbD8BZiYFeB24lMSWJS0lN0ZN8UQdvANUx9iqpFs9YJuK2nbxDsb6i3UYbUnScpri2DyvgD3Ad0mR+7ab7XvAXPp7QdKb9H78BavtvcD5JBZl+mYN5ARwMooGSRu19wEfMV8l/a14EmS5JX9TOVb/PpaKuo1g275NgDeBL20H7dj/N/BJ0lYbBztqdQ57JulaE2D98qizUsfAX5KONQHG1duVlDY66nQKiym+L+nBSMBOQ+9iUH8FnGtu8Q7+AZwXpzjEW3xnAAAAAElFTkSuQmCC');
            }

            &.text {
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACIklEQVRYR+2XPWgWQRCGn9f4Q7ARsUohmEBsRCFgYSUp0ogQMV0gCGmEpAyIgoVCwCBYGkgjiKCVYkBsLMTKLkVIo2CKQDoJEsiPRh1ZcieX8y53u3f3+aHflbczO8+9M7OzJ9r8UZvz0QGsmqE/FDSzYeAqcKjq5p7+O8ALSfNJvyzAx38BLmbakXStCPCp55fXai5p1AdwFlj1JPBtvB5gIo7hC3hb0rInoJe5mfUC0x1AL9kSxv+fgmZ2HZgEjniq9hV4KGku6Ve7gma2ABzNgTsYvf+es74haaBpwAfA5QyAwwnwDeBbhs0rSVNNA7pzzh0N3SmAC0B/9O4j8D61vgUsS7JGAfPqzsyGgLPR+qKkN2VqNKQGnwBd0eY3Ja2UDBQKeBKYiWL8kDRWNOpcl1506QDuSMor+D3cFRR0jXUXOAW8S3d55tw0s+PAF0k/y6jnbEIBI98DwDFJa+l4voM9l7cK4H4iZN0HxwGX5rfArXTXNdAkjuEeMAjMSXpUVIOLiSlxSdKnMmkOVdDM+oDXUYxtSeeKAD8kDEYkLTUMeAZ4HseQdLoDCPgc1C1T0BV5fBFYkOSarPAxs5YBngCuREQvJX0upNs9P1sDWAYmy6YDGKpc7PfPK3gDKDVJKijpJsn90IO6Qtww1zKTJDmLw6KEe61LOl806kJ/K8Oxdj03XaolPdsXsGqUuv1ru7DWDfa7aZrauK59217BX/vUVjgIWWxgAAAAAElFTkSuQmCC');
            }
          }
        }
      }
    }

    .left-drawer {
      background-color: #1d1d1d;
      color: #dadada;
      position: absolute;
      box-shadow: var(--el-box-shadow-dark);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: all var(--el-transition-duration);
      &.ltr {
        top: 0;
        left: 40px;
        height: 100%;
        transform: translateX(-100%);
        &.open {
          transform: translateX(0);
        }
        .el-drawer__header {
          color: #dadada;
          border-bottom: 1px solid #444444;
          margin-bottom: 0;
          padding: 10px 20px;
          align-items: center;
          display: flex;
          & > :first-child {
            flex: 1;
          }
          .el-drawer__close-btn {
            border: none;
            cursor: pointer;
            font-size: var(--el-font-size-extra-large);
            color: inherit;
            background-color: transparent;
            outline: none;

            .el-icon {
              font-size: inherit;
              vertical-align: text-bottom;
            }
          }
        }
        .el-drawer__body {
          padding: 0;
          flex: 1;
          overflow: hidden;
        }
      }

    }
  }
</style>
