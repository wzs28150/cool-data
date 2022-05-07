import BorderBox1 from './borderBox/borderBox1';
import BorderBox2 from './borderBox/borderBox2';
import BorderBox3 from './borderBox/borderBox3';
import BorderBox4 from './borderBox/borderBox4';
import BorderBox5 from './borderBox/borderBox5';
import BorderBox6 from './borderBox/borderBox6';
import BorderBox7 from './borderBox/borderBox7';
import BorderBox8 from './borderBox/borderBox8';
import BorderBox9 from './borderBox/borderBox9';
import BorderBox10 from './borderBox/borderBox10';
import BorderBox11 from './borderBox/borderBox11';
import BorderBox12 from './borderBox/borderBox12';
import BorderBox13 from './borderBox/borderBox13';

import Bar1 from './chart/bar/bar1';
import Bar2 from './chart/bar/bar2';
import Bar3 from './chart/bar/bar3';
import Bar4 from './chart/bar/bar4';
import Bar5 from './chart/bar/bar5';
import Bar6 from './chart/bar/bar6';
import Bar7 from './chart/bar/bar7';
import Bar8 from './chart/bar/bar8';
import Bar9 from './chart/bar/bar9';
import Bar10 from './chart/bar/bar10';
import Bar11 from './chart/bar/bar11';
import Bar12 from './chart/bar/bar12';

import Pie1 from './chart/pie/pie1';
import Pie2 from './chart/pie/pie2';
import Pie3 from './chart/pie/pie3';
import Pie4 from './chart/pie/pie4';
import Pie5 from './chart/pie/pie5';
import Pie6 from './chart/pie/pie6';
import Pie7 from './chart/pie/pie7';
import Pie8 from './chart/pie/pie8';
import Pie9 from './chart/pie/pie9';

import Line1 from './chart/line/line1';
import Line2 from './chart/line/line2';
import Line3 from './chart/line/line3';
import Line4 from './chart/line/line4';
import Line5 from './chart/line/line5';
import Line6 from './chart/line/line6';

import WaterLevel1 from './chart/waterlevel/waterlevel1';
import WaterLevel2 from './chart/waterlevel/waterlevel2';

import Radar1 from './chart/radar/radar1';

import Gauge1 from './chart/gauge/gauge1';
import Gauge2 from './chart/gauge/gauge2';
import Gauge3 from './chart/gauge/gauge3';

import ScrollRankingBar from './chart/rotation/scrollRankingBar';
import ScrollRankingBar2 from './chart/rotation/scrollRankingBar2';
import ScrollRankingBar3 from './chart/rotation/scrollRankingBar3';
import ScrollRankingBar4 from './chart/rotation/scrollRankingBar4';
import ScrollTable from './chart/rotation/scrollTable';

import DigitalFlop1 from './chart/digitalflop/digitalflop1';
import DigitalFlop2 from './chart/digitalflop/digitalflop2';

import Title1 from './title/title1';
import Title2 from './title/title2';
import Title3 from './title/title3';
import Title4 from './title/title4';
import Title5 from './title/title5';
import Title6 from './title/title6';
import Title7 from './title/title7';
import Title8 from './title/title8';

import ModuleTitle1 from './moduleTitle/moduleTitle1';
import ModuleTitle2 from './moduleTitle/moduleTitle2';
import ModuleTitle3 from './moduleTitle/moduleTitle3';
import ModuleTitle4 from './moduleTitle/moduleTitle4';
import ModuleTitle5 from './moduleTitle/moduleTitle5';
import ModuleTitle6 from './moduleTitle/moduleTitle6';
import ModuleTitle7 from './moduleTitle/moduleTitle7';

import Decoration1 from './decoration/decoration1';

import Background from './background/background';
import BackgroundCanvas1 from './background/backgroundCanvas1';
import BackgroundCanvas2 from './background/backgroundCanvas2';
import BackgroundCanvas3 from './background/backgroundCanvas3';

import Loading1 from './loading/loading1';
import Loading2 from './loading/loading2';
import Loading3 from './loading/loading3';
import Loading4 from './loading/loading4';

import Layout1 from './layout/layout1';
import Layout2 from './layout/layout2';
import Layout3 from './layout/layout3';
import Layout4 from './layout/layout4';

import classic from './theme/classic';
import quiet from './theme/quiet';
import soft from './theme/soft';
import easyv from './theme/easyv';
import purple from './theme/purple';
import elegant from './theme/elegant';
import bright from './theme/bright';
import business from './theme/business';
import nostalgia from './theme/nostalgia';
import fresh from './theme/fresh';
import gradual from './theme/gradual';
import retro from './theme/retro';
import news from './theme/news';

// 边框组件
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

// 图表组件
export const chartComponents = {
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
  Bar11,
  Bar12,
  Pie1,
  Pie2,
  Pie3,
  Pie4,
  Pie5,
  Pie6,
  Pie7,
  Pie8,
  Pie9,
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
  Line6,
  WaterLevel1,
  WaterLevel2,
  ScrollTable,
  ScrollRankingBar,
  ScrollRankingBar2,
  ScrollRankingBar3,
  ScrollRankingBar4,
  DigitalFlop1,
  DigitalFlop2,
  Gauge1,
  Gauge2,
  Gauge3,
  Radar1
};

// 标题组件
export const titleComponents = {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
  Title7,
  Title8
};

// 模块标题组件
export const moduleTitleComponents = {
  ModuleTitle1,
  ModuleTitle2,
  ModuleTitle3,
  ModuleTitle4,
  ModuleTitle5,
  ModuleTitle6,
  ModuleTitle7
};

// 装饰器组件
export const decorationComponents = {
  Decoration1
};

// 背景组件
export const backgroundComponents = {
  Background,
  BackgroundCanvas1,
  BackgroundCanvas2,
  BackgroundCanvas3
};

// 加载组件
export const loadingComponents = {
  Loading1,
  Loading2,
  Loading3,
  Loading4
};

// 加载模板组件
export const layoutComponents = {
  Layout1,
  Layout2,
  Layout3,
  Layout4
};

const components = {
  ...borderBoxComponents,
  ...chartComponents,
  ...titleComponents,
  ...moduleTitleComponents,
  ...decorationComponents,
  ...backgroundComponents,
  ...loadingComponents,
  ...layoutComponents
};
// 加载主题颜色
export const Theme = {
  classic: classic.theme,
  quiet: quiet.theme,
  soft: soft.theme,
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
};

const install = (app) => {
  // console.log(app);
  if (install.installed) return;
  Object.keys(components).forEach((item) =>
    app.component(components[item].name, components[item])
  );
};

const CoolDataPlus = {
  version: '0.4.1',
  install
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
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
  BorderBox13,
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
  Bar11,
  Bar12,
  Pie1,
  Pie2,
  Pie3,
  Pie4,
  Pie5,
  Pie6,
  Pie7,
  Pie8,
  Pie9,
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
  Line6,
  WaterLevel1,
  WaterLevel2,
  ScrollTable,
  ScrollRankingBar,
  ScrollRankingBar2,
  ScrollRankingBar3,
  ScrollRankingBar4,
  DigitalFlop1,
  DigitalFlop2,
  Gauge1,
  Gauge2,
  Gauge3,
  Radar1,
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
  Title7,
  Title8,
  ModuleTitle1,
  ModuleTitle2,
  ModuleTitle3,
  ModuleTitle4,
  ModuleTitle5,
  ModuleTitle6,
  ModuleTitle7,
  Decoration1,
  Background,
  BackgroundCanvas1,
  BackgroundCanvas2,
  BackgroundCanvas3,
  Loading1,
  Loading2,
  Loading3,
  Loading4,
  Layout1,
  Layout2,
  Layout3,
  Layout4
};

export default CoolDataPlus;
