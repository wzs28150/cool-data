# 饼状图

### 基础饼图 1

#### 示例:

<br />
<ClientOnly>
<div class="code-show" style="height: 300px;">
  <pie-1 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <pie-1 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue";
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({});
const dataset = ref({
  dimensions: ["product", "系列1"],
  source: [
    { product: "类别1", 系列1: 43.3 },
    { product: "类别2", 系列1: 83.1 },
    { product: "类别3", 系列1: 86.4 },
    { product: "类别4", 系列1: 72.4 },
  ],
});
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <pie-1 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: {
      dimensions: ["product", "系列1"],
      source: [
        { product: "类别1", "系列1": 43.3},
        { product: "类别2", "系列1": 83.1},
        { product: "类别3", "系列1": 86.4},
        { product: "类别4", "系列1": 72.4},
      ],
    },
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 基础饼图 2

#### 示例:

<br />
<ClientOnly>
<div class="code-show" style="height: 300px;">
  <pie-2 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <pie-2 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue";
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({});
const dataset = ref({
  dimensions: ["product", "系列1"],
  source: [
    { product: "类别1", 系列1: 43.3 },
    { product: "类别2", 系列1: 83.1 },
    { product: "类别3", 系列1: 86.4 },
    { product: "类别4", 系列1: 72.4 },
  ],
});
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <pie-2 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: {
      dimensions: ["product", "系列1"],
      source: [
        { product: "类别1", "系列1": 43.3},
        { product: "类别2", "系列1": 83.1},
        { product: "类别3", "系列1": 86.4},
        { product: "类别4", "系列1": 72.4},
      ],
    },
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 玉玦图

#### 示例:

<br />
<ClientOnly>
<div class="code-show" style="height: 300px;">
  <pie-3 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <pie-3 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue";
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({});
const dataset = ref({
  dimensions: ["product", "系列1"],
  source: [
    { product: "类别1", 系列1: 43.3 },
    { product: "类别2", 系列1: 83.1 },
    { product: "类别3", 系列1: 86.4 },
    { product: "类别4", 系列1: 72.4 },
  ],
});
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <pie-3 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: {
      dimensions: ["product", "系列1"],
      source: [
        { product: "类别1", "系列1": 43.3},
        { product: "类别2", "系列1": 83.1},
        { product: "类别3", "系列1": 86.4},
        { product: "类别4", "系列1": 72.4},
      ],
    },
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 玉玦图 2

#### 示例:

<br />
<ClientOnly>
<div class="code-show" style="height: 300px;">
  <pie-4 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <pie-4 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue";
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({});
const dataset = ref({
  dimensions: ["product", "系列1"],
  source: [
    { product: "类别1", 系列1: 43.3 },
    { product: "类别2", 系列1: 83.1 },
    { product: "类别3", 系列1: 86.4 },
    { product: "类别4", 系列1: 72.4 },
  ],
});
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <pie-4 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: {
      dimensions: ["product", "系列1"],
      source: [
        { product: "类别1", "系列1": 43.3},
        { product: "类别2", "系列1": 83.1},
        { product: "类别3", "系列1": 86.4},
        { product: "类别4", "系列1": 72.4},
      ],
    },
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 玉玦图 3

#### 示例:

<br />
<ClientOnly>
<div class="code-show" style="height: 300px;">
  <pie-5 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <pie-5 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue";
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({});
const dataset = ref({
  dimensions: ["product", "系列1"],
  source: [
    { product: "类别1", 系列1: 43.3 },
    { product: "类别2", 系列1: 83.1 },
    { product: "类别3", 系列1: 86.4 },
    { product: "类别4", 系列1: 72.4 },
  ],
});
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <pie-5 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: {
      dimensions: ["product", "系列1"],
      source: [
        { product: "类别1", "系列1": 43.3},
        { product: "类别2", "系列1": 83.1},
        { product: "类别3", "系列1": 86.4},
        { product: "类别4", "系列1": 72.4},
      ],
    },
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 动态环图

#### 示例:

<br />
<ClientOnly>
<div class="code-show" style="height: 300px;">
  <pie-6 />
</div>
</ClientOnly>

#### 特有设置:

<div class="table-show">

| 参数           | 说明             | 类型   | 是否必要 | 默认值         |
| -------------- | ---------------- | ------ | -------- | -------------- |
| radius         | 圆环尺寸         | String | false    | '50%'          |
| ringWidth      | 圆环宽度         | Number | true     | 10             |
| ringCenter     | 圆环中心设置     | Array  | false    | ["35%", "50%"] |
| selectedOffset | 选中偏移距离     | Number | false    | 10             |
| autoPlay       | 自动播放时间间隔 | Number | false    | 3000           |

</div>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <pie-6 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue";
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({});
const dataset = ref({
  dimensions: ["product", "系列1"],
  source: [
    { product: "类别1", 系列1: 43.3 },
    { product: "类别2", 系列1: 83.1 },
    { product: "类别3", 系列1: 86.4 },
    { product: "类别4", 系列1: 72.4 },
  ],
});
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <pie-6 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: {
      dimensions: ["product", "系列1"],
      source: [
        { product: "类别1", "系列1": 43.3},
        { product: "类别2", "系列1": 83.1},
        { product: "类别3", "系列1": 86.4},
        { product: "类别4", "系列1": 72.4},
      ],
    },
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
