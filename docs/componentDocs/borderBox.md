# 边框

> 边框组件,SVG 绘制

### Attributes

<div class="table-show">

| 参数            | 说明                                               | 类型     | 是否必要 | 默认值 |
| --------------- | -------------------------------------------------- | -------- | -------- | ------ |
| color           | 颜色,可设置颜色关键字、十六进制色、RGB 及 RGBA     | String[] | false    | -      |
| backgroundColor | 背景颜色,可设置颜色关键字、十六进制色、RGB 及 RGBA | String   | false    | -      |
| reverse         | 是否开启翻转，个别不对称的边框可设置翻转。         | Boolean  | false    | -      |

</div>

## BorderBox1

### 示例:

<br />
<div class="code-show" >
  <border-box-1>内容</border-box-1>
</div>

### 代码：

```html
<template>
  <border-box-1>内容</border-box-1>
</template>
```

## BorderBox2

### 示例:

<br />
<div class="code-show" >
  <border-box-2>内容</border-box-2>
</div>

### 代码：

```html
<template>
  <border-box-2>内容</border-box-2>
</template>
```

## BorderBox3

### 示例:

<br />
<div class="code-show" >
  <border-box-3>内容</border-box-3>
</div>

### 代码：

```html
<template>
  <border-box-3>内容</border-box-3>
</template>
```

## BorderBox4

> 可翻转

### 示例:

<br />
<div class="code-show" >
  <border-box-4>内容</border-box-4>
</div>

<div class="code-show" >
  <border-box-4 :reverse="true">内容</border-box-4>
</div>

### 代码：

```html
<template>
  <border-box-4>内容</border-box-4>
  <border-box-4 :reverse="true">内容</border-box-4>
</template>
```

## BorderBox5

> 可翻转

### 示例:

<br />
<div class="code-show" >
  <border-box-5>内容</border-box-5>
</div>

<div class="code-show" >
  <border-box-5 :reverse="true">内容</border-box-5>
</div>
### 代码：

```html
<template>
  <border-box-5>内容</border-box-5>
  <border-box-5 :reverse="true">内容</border-box-5>
</template>
```

## BorderBox6

### 示例:

<br />
<div class="code-show" >
  <border-box-6>内容</border-box-6>
</div>

### 代码：

```html
<template>
  <border-box-6>内容</border-box-6>
</template>
```

## BorderBox7

### 示例:

<br />
<div class="code-show" >
  <border-box-7>内容</border-box-7>
</div>

### 代码：

```html
<template>
  <border-box-7>内容</border-box-7>
</template>
```

## BorderBox8

> 可翻转，可设置动画时长

<div class="table-show">

| 参数 | 说明                       | 类型   | 是否必要 | 默认值 |
| ---- | -------------------------- | ------ | -------- | ------ |
| dur  | 动画走过一周时，使用的时间 | Number | false    | 3      |

</div>

### 示例:

<br />
<div class="code-show" >
  <border-box-8>内容</border-box-8>
</div>
<div class="code-show" >
  <border-box-8 :reverse="true" :dur="10">内容</border-box-8>
</div>

### 代码：

```html
<template>
  <border-box-8>内容</border-box-8>
  <border-box-8 :reverse="true" :dur="10">内容</border-box-8>
</template>
```

## BorderBox9

### 示例:

<br />
<div class="code-show" >
  <border-box-9>内容</border-box-9>
</div>

### 代码：

```html
<template>
  <border-box-9>内容</border-box-9>
</template>
```

## BorderBox10

### 示例:

<br />
<div class="code-show" >
  <border-box-10>内容</border-box-10>
</div>

### 代码：

```html
<template>
  <border-box-10>内容</border-box-10>
</template>
```

## BorderBox11

> 可设置标题及标题区域宽度

<div class="table-show">

| 参数       | 说明         | 类型   | 是否必要 | 默认值 |
| ---------- | ------------ | ------ | -------- | ------ |
| title      | 标题         | String | false    | -      |
| titleWidth | 标题区域宽度 | Number | false    | 90     |

</div>

### 示例:

<br />
<div class="code-show" >
  <border-box-11 title="标题" :title-width="120">内容</border-box-11>
</div>

### 代码：

```html
<template>
  <border-box-11>内容</border-box-11>
</template>
```


## BorderBox12

### 示例:

<br />
<div class="code-show" >
  <border-box-12>内容</border-box-12>
</div>

### 代码：

```html
<template>
  <border-box-12>内容</border-box-12>
</template>
```