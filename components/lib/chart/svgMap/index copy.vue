<template>
  <div :ref="ref" :id="ref"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';
import { uuid } from '../../../util/index'
import { mapJson } from './map';
export default {
  name: 'Map3D',

  data() {
    const id = uuid()
    return {
      id: id,
      ref: `map3D${id}`
    };
  },
  methods: {
    map3D() {
      let dom = this.$refs[`map3D${this.id}`];
      // var ROOT_PATH =
      //   'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

      var regions = mapJson.features.map(function (feature) {
        return {
          name: feature.properties.name,
          value: Math.random(),
          height: feature.properties.height
        };
      });
      echarts.registerMap('hlj', mapJson);
      let option = {
        geo3D: {
          map: 'hlj',
          shading: 'realistic',
          // realisticMaterial: {
          //     roughness: require('./material/1AmWkiHiQqhIHkQBRxMi91Ojpg3UDTMt.jpg'),
          //     textureTiling: 1,
          //     detailTexture: require('./material/1AmWkiHiQqhIHkQBRxMi91Ojpg3UDTMt.jpg')
          // },
          viewControl: {
            minBeta: -360,
            maxBeta: 360,
            alpha: 50,
            distance: 130,
            minDistance: 5,
            panMouseButton: 'left',
            rotateMouseButton: 'left',
            zoomSensitivity: 0.3,
            autoRotate: false
          },
          groundPlane: {
            show: false
          },
          postEffect: {
            enable: true,
            bloom: {
              enable: false
            },
            SSAO: {
              radius: 1,
              intensity: 1,
              enable: true
            },
            depthOfField: {
              enable: false,
              focalRange: 10,
              blurRadius: 10,
              fstop: 1
            }
          },
          label: {
            // 标签的相关设置
            show: true,                 // (地图上的城市名称)是否显示标签 [ default: false ]
            distance: 0,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
            //formatter:,               // 标签内容格式器
            textStyle: {                // 标签的字体样式
              color: '#ffffff',                  // 地图初始化区域字体颜色
              fontSize: 16,                    // 字体大小
              opacity: 0.5,                     // 字体透明度
              backgroundColor: 'rgba(0,23,11,0)'      // 字体背景色
            },
          },
          temporalSuperSampling: {
            enable: true
          },
          itemStyle: {
            color: 'rgba(65,105,225,0.8)',
            opacity: 0.8,
            borderWidth: 0.5,           // (地图板块间的分隔线)图形描边的
            borderColor: '#fff',
            textStyle: {
            color: '#fff'
          }
          },
          emphasis: {
            label: {
              show: true
            },
            itemStyle: {
              color: '#4f7fff',
              borderWidth: 2,
              borderColor: 'rgba(0,242,252,.6)'
            }
          },
          regionHeight: 5,
        },
        silent: true,
        series: [
          {
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            label: {
              // 标签的相关设置
              show: true,                 // (地图上的城市名称)是否显示标签 [ default: false ]
              distance: 0,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
              //formatter:,               // 标签内容格式器
              textStyle: {                // 标签的字体样式
                color: '#ffffff',                  // 地图初始化区域字体颜色
                fontSize: 16,                    // 字体大小
                opacity: 0.5,                     // 字体透明度
                backgroundColor: 'rgba(0,23,11,0)'      // 字体背景色
              },
            },
            data: regions
          }
        ]
      }

      let myChart = echarts.init(dom);


      myChart.setOption(option);
    }
  },
  mounted() {
    this.map3D();
  }
}
</script>
<style>
#map {
  height: 100%;
}
</style>