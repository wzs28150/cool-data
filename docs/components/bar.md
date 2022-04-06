# 柱状图

### 基础柱状图1
> 圆角渐变柱图
#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-1 />
</div>
</ClientOnly>

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
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
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
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 基础柱状图2
> 圆角渐变背景柱图

#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-2 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-2 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-2 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 斑马纹理柱状图

#### 示例:
> 利用象形柱遮挡实现斑马纹理渐变
<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-3 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-3 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-3 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 立体柱状图

#### 示例:
> 自定义图形模拟三维柱图
<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-4 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-4 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", "系列1": 43.3 },
      { product: "类别2", "系列1": 83.1 },
      { product: "类别3", "系列1": 86.4 },
      { product: "类别4", "系列1": 72.4 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-4 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1"],
        source: [
          { product: "类别1", "系列1": 43.3 },
          { product: "类别2", "系列1": 83.1 },
          { product: "类别3", "系列1": 86.4 },
          { product: "类别4", "系列1": 72.4 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 立体圆柱图

#### 示例:
> 自定义图形模拟三维柱图
<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-5 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-5 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-5 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 立体圆柱图2

#### 示例:
> 自定义图形模拟三维圆柱柱图
<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-6 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-6 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1"],
    source: [
      { product: "类别1", "系列1": 43.3 },
      { product: "类别2", "系列1": 83.1 },
      { product: "类别3", "系列1": 86.4 },
      { product: "类别4", "系列1": 72.4 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-6 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1"],
        source: [
          { product: "类别1", "系列1": 43.3 },
          { product: "类别2", "系列1": 83.1 },
          { product: "类别3", "系列1": 86.4 },
          { product: "类别4", "系列1": 72.4 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 胶囊堆叠图

#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-7 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-7 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-7 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 渐变柱状堆叠图

#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-8 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-8 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-8 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 点线堆叠图

#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-9 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-9 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-9 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 渐变柱状堆叠图2

#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-10 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-10 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-10 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 横向对比柱状图

#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-11 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-11 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-11 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### 横向对比胶囊柱状图
#### 示例:

<br />

<ClientOnly>
<div class="code-show" style="height: 300px;">
  <bar-12 />
</div>
</ClientOnly>

#### 代码：

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
  <bar-12 :dataset="dataset" :option="option" :theme="easyv" />
</template>
<script setup>
import { ref } from "vue"
import { Theme } from "CoolData";
const { easyv } = Theme;
const option = ref({

})
const  dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
      { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
      { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
      { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
    ],
  }
])
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2" >

```vue
<template>
  <bar-12 :dataset="dataset" :option="option" :theme="theme" />
</template>
<script>
import { Theme } from "CoolData";
const { easyv } = Theme;
export default {
  data() {
    option: {

    },
    dataset: [
      {
        dimensions: ["product", "系列1", "系列2", "系列3"],
        source: [
          { product: "类别1", "系列1": 43.3, "系列2": 143.3 , "系列3": 43.3 },
          { product: "类别2", "系列1": 83.1, "系列2": 243.3 , "系列3": 343.3 },
          { product: "类别3", "系列1": 86.4, "系列2": 43.3  , "系列3": 143.3 },
          { product: "类别4", "系列1": 72.4, "系列2": 343.3  , "系列3": 43.3 },
        ],
      }
    ],
    theme: easyv
  }
}
</script>
```

  </CodeGroupItem>
</CodeGroup>