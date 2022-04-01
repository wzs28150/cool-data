# 模板

> 模板组件,定义了可视化大屏的一些场景的模块摆放形式

### 公共设置

<div class="table-show">

| 参数       | 说明                                                                                  | 类型    | 是否必要 | 默认值 |
| ---------- | ------------------------------------------------------------------------------------- | ------- | -------- | ------ |
| background | 背景颜色                                                                              | String  | false    | -      |
| width      | 大屏宽度                                                                              | Number  | false    | 1920   |
| height     | 大屏高度                                                                              | Number  | false    | 1080   |
| isScale    | 是否缩放, 设置为 true 页面会随着比例缩放, 设置为 false 时页面不够指定宽高时显示滚动条 | Boolean | false    | true   |

</div>

## 模板一

<br />
<img :src="$withBase('/img/layout2.jpg')" width="100%" />

### 设置

<div class="table-show">

| 参数           | 说明                                                                                              | 类型    | 是否必要 | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------------- | ------- | -------- | ------ | ----- |
| leftSideWidth  | 左侧区域宽度, 如设置数字则默认单位 px                                                             | `String | Number`  | false  | `22%` |
| rightSideWidth | 右侧区域宽度, 如设置数字则默认单位 px                                                             | `String | Number`  | false  | `22%` |
| titleHeight    | 标题高度, 如设置数字则默认单位 px                                                                 | `String | Number`  | false  | `60`  |
| immerse        | 设置是否沉浸, 如设置`true`则为沉浸模式, 主区域铺面整屏, 如设置`false`则为非沉浸模式, 主区域为区块 | `String | Number`  | false  | `60`  |

</div>

### 插槽

<div class="table-show">

| 名称         | 说明     |
| ------------ | -------- |
| layout-title | 头部区域 |
| left         | 左侧区域 |
| right        | 右侧区域 |
| main         | 主区域   |

</div>

## 模板二

<br />
<img :src="$withBase('/img/layout3.jpg')" width="100%" />

### 设置

<div class="table-show">

| 参数             | 说明                                                                                              | 类型    | 是否必要 | 默认值 |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------- | -------- | ------ | ------- |
| bottomSideHeight | 底部区域宽度, 如设置数字则默认单位 px                                                             | `String | Number`  | false  | `30%`   |
| sideWidth        | 侧边区域宽度, 如设置数字则默认单位 px                                                             | `String | Number`  | false  | `50%`   |
| titleHeight      | 标题高度, 如设置数字则默认单位 px                                                                 | `String | Number`  | false  | `60`    |
| position         | 设置侧边区域位置, 可设置`left                                                                     | right`  | `String` | false  | `right` |
| immerse          | 设置是否沉浸, 如设置`true`则为沉浸模式, 主区域铺面整屏, 如设置`false`则为非沉浸模式, 主区域为区块 | `String | Number`  | false  | `60`    |

</div>

### 插槽

<div class="table-show">

| 名称         | 说明     |
| ------------ | -------- |
| layout-title | 头部区域 |
| aside        | 侧边区域 |
| bottom       | 底部区域 |
| main         | 主区域   |

</div>

## 模板三

<br />
<img :src="$withBase('/img/layout4.jpg')" width="100%" />

### 设置

<div class="table-show">

| 参数             | 说明                                                                                              | 类型    | 是否必要 | 默认值 |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------- | -------- | ------ | ------- |
| bottomSideHeight | 底部区域宽度, 如设置数字则默认单位 px                                                             | `String | Number`  | false  | `30%`   |
 titleHeight      | 标题高度, 如设置数字则默认单位 px                                                                 | `String | Number`  | false  | `60`    |
 immerse          | 设置是否沉浸, 如设置`true`则为沉浸模式, 主区域铺面整屏, 如设置`false`则为非沉浸模式, 主区域为区块 | `String | Number`  | false  | `60`    |

</div>

### 插槽

<div class="table-show">

| 名称         | 说明     |
| ------------ | -------- |
| layout-title | 头部区域 |
| bottom       | 底部区域 |
| main         | 主区域   |

</div>