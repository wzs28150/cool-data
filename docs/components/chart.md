# 图表

> 一些常用的图表组件

### 公共设置

<div class="table-show">

| 参数    | 说明     | 类型    | 是否必要 | 默认值 |
| ------- | -------- | ------- | -------- | ------ |
| option  | 图表设置,默认图表预设了一些设置,这里可以添加及修改细节 | Object  | false    | -      |
| dataset | 数据集，包含dimensions及source   | Object  | true    | -      |
| theme   | 主题颜色 | Boolean | false    | -      |

</div>

## 柱状图

### 基础柱状图

#### 示例:

<br />
<div class="code-show" style="height: 300px;">
  <bar-1 />
</div>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-1 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ['name', 'value'],
    source: [
      ['客运车', '1048'],
      ['危险品运输车', '735'],
      ['网约车', '580'],
      ['学生班车', '484']
    ]
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-1 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ['name', 'value'],
        source: [
          ['客运车', '1048'],
          ['危险品运输车', '735'],
          ['网约车', '580'],
          ['学生班车', '484']
        ]
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
