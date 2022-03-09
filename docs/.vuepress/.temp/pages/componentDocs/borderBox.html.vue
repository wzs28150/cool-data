<template><h1 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h1>
<blockquote>
<p>边框组件,SVG 绘制</p>
</blockquote>
<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
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
<td>color</td>
<td>颜色,可设置颜色关键字、十六进制色、RGB 及 RGBA</td>
<td>String[]</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>背景颜色,可设置颜色关键字、十六进制色、RGB 及 RGBA</td>
<td>String</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>reverse</td>
<td>是否开启翻转，个别不对称的边框可设置翻转。</td>
<td>Boolean</td>
<td>false</td>
<td>-</td>
</tr>
</tbody>
</table>
</div>
<h2 id="borderbox1" tabindex="-1"><a class="header-anchor" href="#borderbox1" aria-hidden="true">#</a> BorderBox1</h2>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-1>内容</border-box-1>
</div>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-1</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox2" tabindex="-1"><a class="header-anchor" href="#borderbox2" aria-hidden="true">#</a> BorderBox2</h2>
<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-2>内容</border-box-2>
</div>
<h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-2</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox3" tabindex="-1"><a class="header-anchor" href="#borderbox3" aria-hidden="true">#</a> BorderBox3</h2>
<h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-3>内容</border-box-3>
</div>
<h3 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-3</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox4" tabindex="-1"><a class="header-anchor" href="#borderbox4" aria-hidden="true">#</a> BorderBox4</h2>
<blockquote>
<p>可翻转</p>
</blockquote>
<h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-4>内容</border-box-4>
</div>
<div class="code-show" >
  <border-box-4 :reverse="true">内容</border-box-4>
</div>
<h3 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-4</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-4</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-4</span> <span class="token attr-name">:reverse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="borderbox5" tabindex="-1"><a class="header-anchor" href="#borderbox5" aria-hidden="true">#</a> BorderBox5</h2>
<blockquote>
<p>可翻转</p>
</blockquote>
<h3 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-5>内容</border-box-5>
</div>
<div class="code-show" >
  <border-box-5 :reverse="true">内容</border-box-5>
</div>
### 代码：
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-5</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-5</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-5</span> <span class="token attr-name">:reverse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-5</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="borderbox6" tabindex="-1"><a class="header-anchor" href="#borderbox6" aria-hidden="true">#</a> BorderBox6</h2>
<h3 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-6>内容</border-box-6>
</div>
<h3 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-6</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-6</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox7" tabindex="-1"><a class="header-anchor" href="#borderbox7" aria-hidden="true">#</a> BorderBox7</h2>
<h3 id="示例-6" tabindex="-1"><a class="header-anchor" href="#示例-6" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-7>内容</border-box-7>
</div>
<h3 id="代码-5" tabindex="-1"><a class="header-anchor" href="#代码-5" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-7</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-7</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox8" tabindex="-1"><a class="header-anchor" href="#borderbox8" aria-hidden="true">#</a> BorderBox8</h2>
<blockquote>
<p>可翻转，可设置动画时长</p>
</blockquote>
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
<td>dur</td>
<td>动画走过一周时，使用的时间</td>
<td>Number</td>
<td>false</td>
<td>3</td>
</tr>
</tbody>
</table>
</div>
<h3 id="示例-7" tabindex="-1"><a class="header-anchor" href="#示例-7" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-8>内容</border-box-8>
</div>
<div class="code-show" >
  <border-box-8 :reverse="true" :dur="10">内容</border-box-8>
</div>
<h3 id="代码-6" tabindex="-1"><a class="header-anchor" href="#代码-6" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-8</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-8</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-8</span> <span class="token attr-name">:reverse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:dur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-8</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="borderbox9" tabindex="-1"><a class="header-anchor" href="#borderbox9" aria-hidden="true">#</a> BorderBox9</h2>
<h3 id="示例-8" tabindex="-1"><a class="header-anchor" href="#示例-8" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-9>内容</border-box-9>
</div>
<h3 id="代码-7" tabindex="-1"><a class="header-anchor" href="#代码-7" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-9</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-9</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox10" tabindex="-1"><a class="header-anchor" href="#borderbox10" aria-hidden="true">#</a> BorderBox10</h2>
<h3 id="示例-9" tabindex="-1"><a class="header-anchor" href="#示例-9" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-10>内容</border-box-10>
</div>
<h3 id="代码-8" tabindex="-1"><a class="header-anchor" href="#代码-8" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-10</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-10</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox11" tabindex="-1"><a class="header-anchor" href="#borderbox11" aria-hidden="true">#</a> BorderBox11</h2>
<blockquote>
<p>可设置标题及标题区域宽度</p>
</blockquote>
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
<td>title</td>
<td>标题</td>
<td>String</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>titleWidth</td>
<td>标题区域宽度</td>
<td>Number</td>
<td>false</td>
<td>90</td>
</tr>
</tbody>
</table>
</div>
<h3 id="示例-10" tabindex="-1"><a class="header-anchor" href="#示例-10" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-11 title="标题" :title-width="120">内容</border-box-11>
</div>
<h3 id="代码-9" tabindex="-1"><a class="header-anchor" href="#代码-9" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-11</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-11</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="borderbox12" tabindex="-1"><a class="header-anchor" href="#borderbox12" aria-hidden="true">#</a> BorderBox12</h2>
<h3 id="示例-11" tabindex="-1"><a class="header-anchor" href="#示例-11" aria-hidden="true">#</a> 示例:</h3>
<br />
<div class="code-show" >
  <border-box-12>内容</border-box-12>
</div>
<h3 id="代码-10" tabindex="-1"><a class="header-anchor" href="#代码-10" aria-hidden="true">#</a> 代码：</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>border-box-12</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>border-box-12</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
