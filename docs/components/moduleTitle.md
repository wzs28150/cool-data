# 板块标题

> 板块标题组件, svg 绘制 总结了一些大屏内部小板块之间的标题

### 公共设置

| 参数  | 说明                                           | 类型     | 是否必要 | 默认值 |
| ----- | ---------------------------------------------- | -------- | -------- | ------ |
| color | 颜色,可设置颜色关键字、十六进制色、RGB 及 RGBA | String[] | false    | -      |
| title | 标题文字                                       | String   | true     | -      |

## moduleTitle1

#### 独有设置
| 参数  | 说明                                           | 类型     | 是否必要 | 默认值 |
| ----- | ---------------------------------------------- | -------- | -------- | ------ |
| btnList | 右侧按钮列表 | { label:String, value: String }[] | false    | -      |
#### 插槽

| 参数 | 说明     |  是否必要 | 默认值 |
| ---- | -------- |  -------- | ------ |
| icon | 左侧图标 |  true    | -      |

#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 40px;">
  <module-title-1 title="全年数据统计分析" :btnList="[
    {
      'label': '本月',
      'value': '1'
    },
    {
      'label': '近三月',
      'value': '2'
    },
    {
      'label': '近半年',
      'value': '3'
    }
  ]"> 
    <template #icon>
     <img width="25" src="data:image/png;base64,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" />
    </template>
  </module-title-1>
</div>
</ClientOnly>

#### 代码:

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <module-title-1 title="全年数据统计分析" :btnList="btnList">
    <template #icon>
      <!-- 左侧图标   -->
    </template>
  </module-title-1>
</template>
<script setup>
import { ref } from "vue";
const btnList = ref([
    {
      'label': '本月',
      'value': '1'
    },
    {
      'label': '近三月',
      'value': '2'
    },
    {
      'label': '近半年',
      'value': '3'
    }
  ]);
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <module-title-1 title="全年数据统计分析" :btnList="btnList">
    <template #icon>
      <!-- 左侧图标   -->
    </template>
  </module-title-1>
</template>
<script>
export default {
  data() {
    btnList: [
      {
        'label': '本月',
        'value': '1'
      },
      {
        'label': '近三月',
        'value': '2'
      },
      {
        'label': '近半年',
        'value': '3'
      }
    ]
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>