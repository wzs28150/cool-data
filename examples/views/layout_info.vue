<template>
  <layout-2 width="1920" height="1080" :isScale="true" leftSideWidth="22%">
    <template #layout-title>
      <Header />
    </template>
    <template #main>
      <div id="map"></div>
    </template>
    <template #left-top>
      <Pannel title="车辆类型统计">
        <leftTop />
      </Pannel>
    </template>
    <template #left-middle>
      <Pannel title="车辆状态统计">
        <leftMiddle />
      </Pannel>
    </template>
    <template #left-bottom>
      <Pannel title="车辆类型统计"></Pannel>
    </template>

    <template #right-top>
      <Pannel title="车辆类型统计"></Pannel>
    </template>
    <template #right-middle>
      <Pannel title="车辆类型统计"></Pannel>
    </template>
    <template #right-bottom>
      <Pannel title="车辆类型统计"></Pannel>
    </template>
  </layout-2>
</template>
<script>
import styleJson from "../json/mapStyle"
import Header from '../components/header.vue';
import Pannel from '../components/pannel.vue';
import leftTop from '../components/leftTop.vue'
import leftMiddle from '../components/leftMiddle.vue';
export default {
  data() {
    return {
      position_NKYYGS: {
        Name: '哈尔滨图智科技',
        address: '哈尔滨市千山五道街',
        phoneNumber: '15046000000',
        bdLNG: 126.698845,
        bdLAT: 45.750806
      }
    }
  },
  components: {
    Header,
    Pannel,
    leftTop,
    leftMiddle
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
    }
  },
  mounted() {
    this.baiduMap()
  }
}
</script>
<style lang="less" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>