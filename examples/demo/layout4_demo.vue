<template>
  <div>
    <layout-1
      v-if="layoutType == 'Layout2'"
      :width="1920"
      :height="1080"
      :isScale="true"
      :immerse="immerse"
      background="#091220ff"
      leftSideWidth="22%"
      :titleHeight="104"
      style="background-image: url(./bg2.jpg); background-size: cover;"
    >
      <template #layout-title>
        <Header />
      </template>
      <template #main>
        <map-3D />
        <!-- <Pannel v-if="!immerse">
          <div class="main-inner">
            <div class="main-top">
              <BorderBox7 class="m_R20" :color="['#235399', '#eeeeee']" backgroundColor="#113549B2" reverse="true">
                <div>
                  <div class="num ds-digital">{{num1}}</div>
                  <div class="title">总运行车数</div>
                </div>
              </BorderBox7>
              <BorderBox7 :color="['#235399', '#eeeeee']" backgroundColor="#113549B2" reverse="true">
                <div>
                  <div class="num ds-digital">{{num2}}</div>
                  <div class="title">总运行车数</div>
                </div>
              </BorderBox7>
            </div>
            <div id="map"></div>
          </div>
        </Pannel>
        <div v-else id="map"></div>-->
      </template>
      <template #left>
        <Pannel title="车辆类型统计">
          <leftTop />
        </Pannel>
        <Pannel title="车辆状态统计">
          <leftMiddle />
        </Pannel>
        <Pannel title="行驶里程排行">
          <leftBottom />
        </Pannel>
      </template>

      <template #right>
        <Pannel title="车辆行驶数量">
          <rightTop />
        </Pannel>
        <Pannel title="车辆报警统计">
          <rightMiddle />
        </Pannel>
        <Pannel title="行驶时长排行">
          <rightBottom />
        </Pannel>
      </template>
    </layout-1>
    <div class="setting">
      <div class="icon">
        <i class="el-icon-setting"></i>
      </div>
      <div class="setting-inner p_10">
        <el-form ref="form" label-width="130px">
          <el-form-item label="是否开启沉浸模式">
            <el-switch v-model="immerse" @change="changeImmerse"></el-switch>
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
import leftTop from '../components/leftTop.vue'
import leftMiddle from '../components/leftMiddle.vue';
import rightTop from '../components/rightTop.vue';
import leftBottom from '../components/leftBottom.vue';
import rightMiddle from '../components/rightMiddle.vue';
import rightBottom from '../components/rightBottom.vue';
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
      immerse: false,
      num1: 0,
      num2: 0
    }
  },
  components: {
    Header,
    Pannel,
    leftTop,
    leftMiddle,
    leftBottom,
    rightTop,
    rightMiddle,
    rightBottom
  },
  methods: {
    baiduMap() {
      const map = new window.BMapGL.Map('map');
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.clearOverlays();
      const point = new window.BMapGL.Point(this.position_NKYYGS.bdLNG, this.position_NKYYGS.bdLAT); // 创建点坐标
      // const marker = new window.BMapGL.Marker(point);
      // map.addOverlay(marker);
      map.centerAndZoom(point, 18);
      map.setMapStyleV2({
        styleJson: styleJson
      });
      map.setHeading(100);
      map.setTilt(65); // 地图倾斜角度
      var view = new window.mapvgl.View({
        // effects: [new mapvgl.BloomEffect(), new mapvgl.BlurEffect(), new mapvgl.DepthEffect()],
        map: map
      });

      var data = [{
        geometry: {
          type: 'Point',
          coordinates: [point.lng, point.lat]
        },
        properties: {
          count: 100
        }
      }];

      var fanLayer = new window.mapvgl.FanLayer({
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
        console.log(that.immerse);
        that.baiduMap()
      })
    },
    setNum() {
      this.num1 = Math.floor(Math.random() * 1000) + 1
      this.num2 = Math.floor(Math.random() * 100) + 1
    }
  },
  mounted() {
    // this.baiduMap()
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
  background: none !important;
}

.main-inner {
  position: relative;
  width: 100%;
  height: 100%;
  .main-top {
    height: 150px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    color: #fff;
    text-align: center;
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