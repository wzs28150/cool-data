# 图表

> 一些常用的图表组件

## 滚动图表

### 示例:

<br />
<div class="code-show" >
  <scroll-table :option="{
        dataset: {
          source: [
            ['车牌号', '里程数(km)'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2'],
            ['京A12345', '134.2']
          ]
        },
        index: true,
        columnWidth: [50],
        align: ['center', 'left', 'center'],
        waitTime: 3000
    }"></scroll-table>
</div>

### 设置

<div class="table-show">

| 参数         | 说明                                                 | 类型     | 是否必要 | 默认值      |
| ------------ | ---------------------------------------------------- | -------- | -------- | ----------- | ----- | --- |
| header       | 头部数据,如设置 dataset 可省略                       | String[] | false    | -           |
| data         | 表数据,如设置 dataset 可省略                         | Array    | false    | -           |
| dataset      | 数据集, 包含 dimensions , source                     | Object   | false    | -           |
| rowNum       | 默认展示的行数                                       | Number   | true     | 5           |
| headerBGC    | 头部背景颜色                                         | String   | false    | `'#00BAFF'` |
| oddRowBGC    | 奇数行背景色                                         | String   | false    | `'#003B51'` |
| evenRowBGC   | 偶数行背景色                                         | String   | false    | `'#0A2732'` |
| waitTime     | 轮播时间                                             | Number   | false    | 2000        |
| headerHeight | 头部高度                                             | Number   | false    | 35          |
| columnWidth  | 列宽度                                               | Number[] | false    | []          |
| align        | 对齐方式,可设置`'left'                               | 'center' | 'right'` | Number[]    | false | []  |
| index        | 是否显示序号,可设置`true                             | false`   | Boolean  | false       | false |
| carousel     | 轮播方式,设置`single`则逐条滚动,设置`page`则整页滚动 | String   | false    | 'single'    |
| hoverPause   | 划过是否暂停轮播                                     | Boolean  | false    | true        |

</div>

### 代码：

:::: tabs

::: tab data 模式

```javascript
<template>
  <scroll-table :option="option"></scroll-table>
</template>
<script>
export default {
  data() {
    option: {
      header: ["车牌号", "里程数(km)"],
      data: [
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
        ["京A12345", "134.2"],
      ],
      index: true,
      columnWidth: [50],
      align: ['center', 'left', 'center'],
      waitTime: 3000
    }
  }
}
</script>
```

:::

::: tab dataset 模式一

```javascript
<template>
  <scroll-table :option="option"></scroll-table>
</template>
<script>
export default {
  data() {
    option: {
      dataset: {
        source: [
          ['车牌号', '里程数(km)'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2'],
          ['京A12345', '134.2']
        ]
      },
      index: true,
      columnWidth: [50],
      align: ['center', 'left', 'center'],
      waitTime: 3000
    }
  }
}
</script>
```

:::

::: tab dataset 模式二

```javascript
<template>
  <scroll-table :option="option"></scroll-table>
</template>
<script>
export default {
  data() {
    option: {
      dataset: {
        dimensions: ["车牌号", "里程数(km)"],
        source: [
          {
            "车牌号": "京A12341",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12342",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12343",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12344",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12345",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12341",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12342",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12343",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12344",
            "里程数(km)": "134.2"
          },
          {
            "车牌号": "京A12345",
            "里程数(km)": "134.2"
          }
        ]
      },
      index: true,
      columnWidth: [50],
      align: ['center', 'left', 'center'],
      waitTime: 3000
    }
  }
}
</script>
```

:::

::::

## 3D 金字塔

### 示例:

<br />
<div class="code-show" style="height:300px">
  <Pyramid :option="{title: '企业培育',
        distance: [100, 10],
        offset: [0, 0],
        sort: 'max',
        color: [
          'rgba(112, 245, 100, 0.8)',
          'rgba(84, 155, 180, 1.000)',
          'rgba(59, 94, 185, 1.000)',
          'rgba(31, 63, 144, 1.000)',
          'rgba(13, 34, 103, 1.000)',
        ],
        lMouseClick: true,
        lMouseMove: true,
        fontFormatter: (val) => {
          return ` ${val.name}   ${val.value}%`;
        },
        tooltip: {
          show: true,
        },
        infoStyle: {
          stroke: true,
          color: 'rgba(189, 192, 214, 1.000)',
          setLineDash: [4, 4], 
          size: 12, 
          width: 120, 
          dotSize: 2,
        },
        data: [
          { name: '示例1', value: 10 },
          { name: '示例2', value: 10 },
          { name: '示例3', value: 20 },
          { name: '示例4', value: 30 },
          { name: '示例5', value: 30 },
        ],
      }" />
</div>