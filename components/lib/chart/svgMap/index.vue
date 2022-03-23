<template>
  <div :ref="ref" :id="ref" style="width: 100%;height: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';
//2.0.9
import 'echarts-gl';
import { uuid } from '../../../util/index'
import axios from "axios";
import cityMap from "./china-main-city-map.js";

export default {
  name: 'Map3D',
  props: {
    chinaId: {
      type: Number,
      default: 230000
    },
    chinaName: {
      type: String,
      default: "china"
    }
  },
  data() {
    const id = uuid()
    return {
      id: id,
      ref: `map3D${id}`,
      mapStack: [],
      parentId: null,
      parentName: null,
      chinaJson: null
    };
  },
  methods: {
    map3D(domId) {
      // console.log(domId);
      const that = this
      axios.get("./json/map/" + that.chinaId + ".json", {}).then(response => {
        const mapJson = response.data;
        that.chinaJson = mapJson;
        const myChart = echarts.init(document.getElementById(domId), null, { renderer: 'canvas' });

        that.registerAndsetOption(myChart, that.chinaId, that.chinaName, mapJson, false);


        that.parentId = that.chinaId;
        that.parentName = "china";

        myChart.on("click", function (param) {
          // console.log(param);
          var cityId = cityMap[param.name];
          if (cityId) {
            //代表有下级地图
            axios
              .get("./json/map/" + cityId + ".json", {})
              .then(response => {
                const mapJson = response.data;
                // console.log(mapJson);
                that.registerAndsetOption(
                  myChart,
                  cityId,
                  param.name,
                  mapJson,
                  true
                );
              });
          } else {
            //没有下级地图，回到一级中国地图，并将mapStack清空
            that.registerAndsetOption(myChart, that.chinaId, that.chinaName, that.chinaJson, false, 50);
            that.mapStack = [];
            that.parentId = that.chinaId;
            that.parentName = that.chinaName;
          }
        });
      })
    },
    registerAndsetOption(myChart, id, name, mapJson, flag) {
      const that = this
      echarts.registerMap(name, mapJson);
      myChart.setOption({
        series: [
          {
            type: 'map3D',
            map: name,
            shading: 'realistic',
            // coordinateSystem: 'geo3D',
            instancing: true,
            label: {
              // 标签的相关设置
              show: true,                 // (地图上的城市名称)是否显示标签 [ default: false ]
              distance: 0,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
              //formatter:,               // 标签内容格式器
              textStyle: {                // 标签的字体样式
                color: '#ffffff',                  // 地图初始化区域字体颜色
                fontSize: 16,                    // 字体大小
                opacity: 0.5,                     // 字体透明度
                backgroundColor: "rgba(0,0,0,0)",//透明度0清空文字背景 
              },
            },
            realisticMaterial: {
              detailTexture: '#fff', // 纹理贴图
              textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
              roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
              metalness: 0, // 0材质是非金属 ，1金属
              roughnessAdjust: 0
            },
            itemStyle: {
              normal: {
                color: "rgba(65,105,225,0.8)",
                // borderWidth: 0.5,
                borderColor: '#fff',
              }
            },

            data: this.initMapData(mapJson)
          }
        ]
      });
      if (flag) {
        //往mapStack里添加parentId，parentName,返回上一级使用
        that.mapStack.push({
          mapId: that.parentId,
          mapName: that.parentName
        });
        that.parentId = id;
        that.parentName = name;
      }
    },
    initMapData(mapJson) {
      const that = this

      const mapData = mapJson.features.map(function (feature, index) {
        // console.log(feature.properties);
        return {
          name: feature.properties.name,
          itemStyle: {
            normal: {
              color: that.randomHexColor(index),
              opacity: 0.8,
              // borderWidth: 0.5,
              borderColor: '#fff',
            }
          },
        };
      });

      return mapData
    },
    randomHexColor(index) { //随机生成十六进制颜色
      // const arr = ['#fde8cd','#e4f1d7','#fffed7','#e4f1d7','#fffed7','#fffed8','#dccee7','#fffed7','#fce8cd','#ddceeb','#e4f1d3']
      // return arr[index];
      // console.log(index);
      return `rgba(65,${100 - index * 5},${225 - index * 1},0.8)`
      // return '#' +
      //   (function fn(color) {
      //     return (color += '0123401234abcabc'[Math.floor(Math.random() * 16)]) &&
      //       (color.length == 6) ? color : fn(color);
      //   })('');
    }
  },
  mounted() {
    this.map3D(this.ref);
  }
}
</script>
