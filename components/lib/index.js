import { version } from "../../package.json";
import BorderBox1 from './borderBox/borderBox1/index';
import BorderBox2 from './borderBox/borderBox2/index';
import BorderBox3 from './borderBox/borderBox3/index';
import BorderBox4 from './borderBox/borderBox4/index';
import BorderBox5 from './borderBox/borderBox5/index';
import BorderBox6 from './borderBox/borderBox6/index';
import BorderBox7 from './borderBox/borderBox7/index';
import BorderBox8 from './borderBox/borderBox8/index';
import BorderBox9 from './borderBox/borderBox9/index';
import BorderBox10 from './borderBox/borderBox10/index';
import BorderBox11 from './borderBox/borderBox11/index';
import BorderBox12 from './borderBox/borderBox12/index';
import BorderBox13 from './borderBox/borderBox13/index';

import Title1 from './title/title1/index';
import Title2 from './title/title2/index';
import Title3 from './title/title3/index';
import Title4 from './title/title4/index';
import Title5 from './title/title5/index';
import Title6 from './title/title6/index';
import Title7 from './title/title7/index';

import ModuleTitle1 from './moduleTitle/moduleTitle1/index';
import ModuleTitle2 from './moduleTitle/moduleTitle2/index';
import ModuleTitle3 from './moduleTitle/moduleTitle3/index';
import ModuleTitle4 from './moduleTitle/moduleTitle4/index';
import ModuleTitle5 from './moduleTitle/moduleTitle5/index';
import ModuleTitle6 from './moduleTitle/moduleTitle6/index';

import Decoration1 from './decoration/decoration1/index';

import Loading1 from './loading/loading1/index';
import Loading2 from './loading/loading2/index';
import Loading3 from './loading/loading3/index';
import Loading4 from './loading/loading4/index';
import Loading5 from './loading/loading5/index';

import Layout1 from './layout/layout1/index';
import Layout2 from './layout/layout2/index';
import Layout3 from './layout/layout3/index';

// import Chart1 from './chart/echart/index';
// import Pyramid from './chart/pyramid/index';
// import Pyramid2 from './chart/pyramid2/index';
// import ScrollTable from './chart/scrollTable/index';
// import SvgMap from './chart/svgMap/index';
import Bar1 from './chart/bar/bar1/index';
import Bar2 from './chart/bar/bar2/index';
import Bar3 from './chart/bar/bar3/index';
import Bar4 from './chart/bar/bar4/index';
import Bar5 from './chart/bar/bar5/index';
import Bar6 from './chart/bar/bar6/index';
import Bar7 from './chart/bar/bar7/index';
import Bar8 from './chart/bar/bar8/index';
import Bar9 from './chart/bar/bar9/index';
import Bar10 from './chart/bar/bar10/index';
import DynamicRing from './chart/pie/dynamicRing/index';

// import DynamicRing3d from './chart/dynamicRing3d/index';

import Background from './background/background/index';
import BackgroundCanvas1 from './background/backgroundCanvas1/index';
import BackgroundCanvas2 from './background/backgroundCanvas2/index';

import classic from './color/classic';
import quiet from './color/quiet';
import soft from './color/soft';
import easyv from './color/easyv';
// import littlelion from './color/littlelion';
import purple from './color/purple';
import elegant from './color/elegant';
import bright from './color/bright';
import business from './color/business';
import nostalgia from './color/nostalgia';
import fresh from './color/fresh';
import gradual from './color/gradual';
import retro from './color/retro';
import news from './color/news';
// 加载边框组件
export const borderBoxComponents = {
  BorderBox1,
  BorderBox2,
  BorderBox3,
  BorderBox4,
  BorderBox5,
  BorderBox6,
  BorderBox7,
  BorderBox8,
  BorderBox9,
  BorderBox10,
  BorderBox11,
  BorderBox12,
  BorderBox13
};


// 加载标题组件
export const titleComponents = {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
  Title7
};


// 加载模块标题组件
export const moduleTitleComponents = {
  ModuleTitle1,
  ModuleTitle2,
  ModuleTitle3,
  ModuleTitle4,
  ModuleTitle5,
  ModuleTitle6
};


// 加载加载组件
export const loadingComponents = {
  Loading1,
  Loading2,
  Loading3,
  Loading4,
  Loading5
};

// 加载模板组件
export const layoutComponents = {
  Layout1,
  Layout2,
  Layout3
};

// 加载图表组件
export const chartComponents = {
  // Chart1,
  // Pyramid,
  // Pyramid2,
  // ScrollTable,
  // SvgMap,
  Bar1,
  Bar2,
  Bar3,
  Bar4,
  Bar5,
  Bar6,
  Bar7,
  Bar8,
  Bar9,
  Bar10,
  DynamicRing,
  // DynamicRing3d
};

// 加载装饰器组件
export const decorationComponents = {
  Decoration1
};

// 加载背景组件
export const backgroundComponents = {
  Background,
  BackgroundCanvas1,
  BackgroundCanvas2
};

export const Theme = {
  classic: classic.theme,
  quiet: quiet.theme,
  soft: soft.theme,
  // littlelion: littlelion.theme,
  easyv: easyv.theme,
  purple: purple.theme,
  elegant: elegant.theme,
  bright: bright.theme,
  business: business.theme,
  nostalgia: nostalgia.theme,
  fresh: fresh.theme,
  gradual: gradual.theme,
  retro: retro.theme,
  news: news.theme
}

const components = {
  ...borderBoxComponents,
  ...loadingComponents,
  ...layoutComponents,
  ...chartComponents,
  ...decorationComponents,
  ...titleComponents,
  ...moduleTitleComponents,
  ...backgroundComponents
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    // console.log(components[key]);
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  version,
  install,
  ...components,
};

export default API;
