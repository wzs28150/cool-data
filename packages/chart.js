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

import Line1 from './chart/line/line1';
import Line2 from './chart/line/line2';
import Line3 from './chart/line/line3';
import Line4 from './chart/line/line4';
import Line5 from './chart/line/line5';
import Line6 from './chart/line/line6';

import WaterLevel1 from './chart/waterlevel/waterlevel1';
import WaterLevel2 from './chart/waterlevel/waterlevel2';

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



图表组件
export const chartComponents = [
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
  Gauge3
];



const components = [

  ...chartComponents,

];



const install = (app) => {
  // console.log(app);
  if (install.installed) return;
  components.forEach((component) => app.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue.createApp({}));
}

export default {
  install,
  ...components,
};
