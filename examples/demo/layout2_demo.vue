<template>
  <div>
    <layout-2
      :width="1920"
      :height="1080"
      :isScale="true"
      bottomSideHeight="40vh"
      :immerse="immerse"
      :titleHeight="60"
      background="#091220ff"
      :position="position"
      style="background-image: url(./bg.png); background-size: cover;"
    >
      <template #layout-title>
        <Header />
      </template>
      <template #main>
        <Pannel v-if="!immerse">
          <div id="map"></div>
        </Pannel>
        <div v-else id="map"></div>
      </template>
      <template #aside>
        <div class="right-inner">
          <div class="main-top">
            <BorderBox7
              class="m_R20"
              :color="['#235399', '#eeeeee']"
              backgroundColor="#113549B2"
              reverse="true"
            >
              <div>
                <div class="num ds-digital">{{ num1 }}</div>
                <div class="title">总运行车数</div>
              </div>
            </BorderBox7>
            <BorderBox7 :color="['#235399', '#eeeeee']" backgroundColor="#113549B2" reverse="true">
              <div>
                <div class="num ds-digital">{{ num2 }}</div>
                <div class="title">总运行车数</div>
              </div>
            </BorderBox7>
          </div>
          <Pannel style="flex: 1;" title="车辆类型统计">
            <rightMiddle />
          </Pannel>
        </div>
      </template>
      <template #bottom>
        <Pannel title="车辆类型统计">
          <leftTop />
        </Pannel>
        <Pannel title="车辆状态统计">
          <leftMiddle />
        </Pannel>
        <Pannel title="行驶里程排行">
          <leftBottom />
        </Pannel>
        <Pannel title="行驶时长排行">
          <rightBottom />
        </Pannel>
      </template>
    </layout-2>
    <div class="setting">
      <div class="icon">
        <i class="el-icon-setting"></i>
      </div>
      <div class="setting-inner p_10">
        <el-form ref="form" label-width="130px">
          <el-form-item label="是否开启沉浸模式">
            <el-switch v-model="immerse" @change="changeImmerse"></el-switch>
          </el-form-item>
          <el-form-item label="左右切换">
            <el-switch v-model="position" @change="changeImmerse"  active-value="right"
    inactive-value="left"></el-switch>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import styleJson from "../json/mapStyle"
import Header from '../components/header1.vue';
import Pannel from '../components/pannel.vue';
import LeftTop from '../components/leftTop.vue'
import leftMiddle from '../components/leftMiddle.vue';
import leftBottom from '../components/leftBottom.vue';
import rightBottom from '../components/rightBottom.vue';
import rightMiddle from '../components/rightMiddle.vue';

export default {
  data() {
    return {
      layoutType: 'Layout2',
      position_NKYYGS: {
        Name: '哈尔滨图智科技',
        address: '哈尔滨市千山五道街',
        phoneNumber: '15046000000',
        bdLNG: 126.698845,
        bdLAT: 45.750806
      },
      num1: 0,
      num2: 0,
      immerse: true,
      position: 'left'
    }
  },
  components: {
    Header,
    Pannel,
    LeftTop,
    leftMiddle,
    leftBottom,
    rightBottom,
    rightMiddle
  },
  methods: {
    baiduMap() {
      const map = new window.BMapGL.Map('map');
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.clearOverlays();
      const point = new window.BMapGL.Point(this.position_NKYYGS.bdLNG, this.position_NKYYGS.bdLAT); // 创建点坐标
      const pointLeft = new window.BMapGL.Point(126.698845, 45.753906);
      const pointright = new window.BMapGL.Point(126.700845, 45.747906);
      // const marker = new window.BMapGL.Marker(point);
      // map.addOverlay(marker);
      map.centerAndZoom(this.immerse ? (this.position == 'right' ? pointLeft : pointright) : point, 18);
      map.setMapStyleV2({
        styleJson: styleJson
      });
      map.setHeading(100);
      map.setTilt(65); // 地图倾斜角度
      const view = new window.mapvgl.View({
        // effects: [new mapvgl.BloomEffect(), new mapvgl.BlurEffect(), new mapvgl.DepthEffect()],
        map: map
      });

      const data = [{
        geometry: {
          type: 'Point',
          coordinates: [point.lng, point.lat]
        },
        properties: {
          count: 100
        }
      }];

      const fanLayer = new window.mapvgl.FanLayer({
        color: '#009900',
        data: data,
        size: function (data) {
          return data.properties.count * 3;
        }
      });
      view.addLayer(fanLayer);
    },
    changeImmerse() {
      let that = this
      this.$nextTick(function () {
        that.baiduMap()
      })
    },
    changePosition(){
      let that = this
      this.$nextTick(function () {
        that.baiduMap()
      })
    },
    setNum() {
      this.num1 = Math.floor(Math.random() * 1000) + 1
      this.num2 = Math.floor(Math.random() * 100) + 1
    }
  },
  mounted() {
    this.baiduMap()
    setInterval(() => {
      // console.log(2);
      this.setNum()
    }, 500)
  }
}
</script>
<style lang="less" scoped>
#map {
  width: 100%;
  height: 100%;
}
.right-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main-top {
  height: 150px;
  width: 100%;
  z-index: 9999;
  display: flex;
  color: #fff;
  text-align: center;
  margin: 20px 0;
  padding-right: 22px;
  .num {
    color: #ffeb7b;
    font-size: 56px;
    text-align: center;
  }
  /deep/ .border-box-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: row;
  }
}

.setting {
  width: 200px;
  height: 200px;
  position: fixed;
  color: #fff;
  right: 0;
  top: 50%;
  background-color: #2862b7;
  transform: translate(100%, -50%);
  transition: all 0.4s;
  &:hover {
    transform: translate(0, -50%);
  }
  .icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    transform: translateX(-100%);
    background-color: #2862b7;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  /deep/ .el-form-item__label {
    color: #fff;
  }
}
</style>