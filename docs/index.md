# Cool-Data

<!-- <a href="https://www.npmjs.com/package/coolui-scroller"><img src="https://img.shields.io/npm/v/coolui-scroller.svg" alt="Version"></a>&nbsp;
<a href="https://www.npmjs.com/package/coolui-scroller"><img src="https://img.shields.io/npm/l/coolui-scroller.svg" alt="License"></a>&nbsp;
<a href="https://www.npmjs.com/package/coolui-scroller"><img src="https://img.shields.io/npm/dt/coolui-scroller" alt="Download"></a>&nbsp;
<a href="https://github.com/wzs28150/coolui-scroller"><img src="https://img.shields.io/github/stars/wzs28150/coolui-scroller?style=social" alt="Stars"></a> -->

## 快速开始

### 安装

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```sh
npm i cool-datav-plus -S
```

  </CodeGroupItem>
  <CodeGroupItem title="Vue2" >

```sh
npm i cool-datav -S
```

  </CodeGroupItem>
</CodeGroup>

### 在 main.js 中引入组件库

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```js
// 全部引入
import CoolDatavPlus from 'cool-datav-plus/lib/index';
import 'cool-datav-plus/lib/css/index.css';
// 按需引入
import 'cool-data/dist/css/xxx.css'
import { xxx } from "cool-datav-plus";
Vue.use(xxx);
``` 

  </CodeGroupItem>
  <CodeGroupItem title="Vue2" >

```js
// 全部引入
import 'cool-datav/dist/css/index.css'
import CoolDatav from "cool-data";
Vue.use(CoolData);
// 按需引入
import 'cool-datav/dist/css/xxx.css'
import { xxx } from "cool-data";
Vue.use(xxx);
``` 
  </CodeGroupItem>
</CodeGroup>