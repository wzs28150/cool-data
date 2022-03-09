<template><h1 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h1>
<blockquote>
<p>模板组件,定义了可视化大屏的一些场景的模块摆放形式</p>
</blockquote>
<h3 id="公共设置" tabindex="-1"><a class="header-anchor" href="#公共设置" aria-hidden="true">#</a> 公共设置</h3>
<div class="table-show">
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>是否必要</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>background</td>
<td>背景颜色</td>
<td>String</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td>大屏宽度</td>
<td>Number</td>
<td>false</td>
<td>1920</td>
</tr>
<tr>
<td>height</td>
<td>大屏高度</td>
<td>Number</td>
<td>false</td>
<td>1080</td>
</tr>
<tr>
<td>isScale</td>
<td>是否缩放, 设置为 true 页面会随着比例缩放, 设置为 false 时页面不够指定宽高时显示滚动条</td>
<td>Boolean</td>
<td>false</td>
<td>true</td>
</tr>
</tbody>
</table>
</div>
<h2 id="模板一" tabindex="-1"><a class="header-anchor" href="#模板一" aria-hidden="true">#</a> 模板一</h2>
<br />
<img :src="$withBase('/img/layout2.jpg')" width="100%" />
<h3 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h3>
<div class="table-show">
<p>| 参数           | 说明                                                                                              | 类型    | 是否必要 | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------------- | ------- | -------- | ------ | ----- |
| leftSideWidth  | 左侧区域宽度, 如设置数字则默认单位 px                                                             | <code>String | Number</code>  | false  | <code>22%</code> |
| rightSideWidth | 右侧区域宽度, 如设置数字则默认单位 px                                                             | <code>String | Number</code>  | false  | <code>22%</code> |
| titleHeight    | 标题高度, 如设置数字则默认单位 px                                                                 | <code>String | Number</code>  | false  | <code>60</code>  |
| immerse        | 设置是否沉浸, 如设置<code>true</code>则为沉浸模式, 主区域铺面整屏, 如设置<code>false</code>则为非沉浸模式, 主区域为区块 | <code>String | Number</code>  | false  | <code>60</code>  |</p>
</div>
<h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3>
<div class="table-show">
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>layout-title</td>
<td>头部区域</td>
</tr>
<tr>
<td>left</td>
<td>左侧区域</td>
</tr>
<tr>
<td>right</td>
<td>右侧区域</td>
</tr>
<tr>
<td>main</td>
<td>主区域</td>
</tr>
</tbody>
</table>
</div>
<h2 id="模板二" tabindex="-1"><a class="header-anchor" href="#模板二" aria-hidden="true">#</a> 模板二</h2>
</template>
