# 图表

> 一些常用的图表组件,基于 Echarts5 封装

### 公共设置

> 所有图表都有的设置

<div class="table-show">

| 参数    | 说明                                                   | 类型    | 是否必要 | 默认值   |
| ------- | ------------------------------------------------------ | ------- | -------- | -------- |
| option  | 图表设置,默认图表预设了一些设置,这里可以添加及修改细节 | Object  | false    | -        |
| dataset | 数据集，包含 dimensions 及 source                      | Object  | true     | 示例数据 |
| theme   | 主题颜色                                               | Boolean | false    | easyv    |

</div>

### 设置 option

每个图表为了实现其样式,默认的加载了一些设置，设置基于 Echarts5 编写，当图表的某个细节你需要修改时，你可以在 option 中进行设置。组件会根据传入的设置与默认设置对比合并。更新你要的效果。

#### 例如：

你要增加 图表标题 你可以设置

<ClientOnly>
<div style="display:flex;">
<div class="code-show" style="height: 300px; margin-right: 5px;">
  <bar-1 />
</div>
<div class="code-show" style="height: 300px;">
  <bar-1 :option="{title: {text: '我是标题'}}"/>
</div>
</div>
</ClientOnly>

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-1 :option="option" />
</template>
<script setup>
import { ref } from "vue";
const option = ref({
  title: {
    text: "我是标题",
  },
});
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-1 :option="option" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {
      title: {
        text: '我是标题'
      },
    }
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 数据集 dataset

基本格式：

```json
{
  dimensions: ["product", "系列1", "系列2", "系列3"],
  source: [
    { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
    { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
    { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
    { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
  ],
}
```
### 主题颜色 theme

1. 可以是组件中提供的主题, 由组件提供的一些主题颜色
引入主题的方法：
```js
import { Theme } from "CoolData";
const { easyv } = Theme;
```
> 你也可以为组件添加主题. 主题的文件为js文件，格式如下：
```js
const bright = {
  version: 1,
  themeName: "bright",
  theme: {
    // 主题内容
  }
}
export default bright;
```


1. 也可以去 echarts 官网去配置[主题下载](https://echarts.apache.org/zh/theme-builder.html), 将下载主题中的 json 赋给 theme
