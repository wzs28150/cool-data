<template><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1>
<blockquote>
<p>在 main.js 中引入组件库</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全部引入</span>
<span class="token keyword">import</span> <span class="token string">'cool-data/dist/css/index.css'</span>
<span class="token keyword">import</span> CoolData <span class="token keyword">from</span> <span class="token string">"cool-data"</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>CoolData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 按需引入</span>
<span class="token keyword">import</span> <span class="token string">'cool-data/dist/css/xxx.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> xxx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"cool-data"</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Copyright (c) 2021-present zack</p>
</template>
