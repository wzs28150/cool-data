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

import Chart from './chart/Chart.vue';
import Title from './chart/Title.vue';
import XAxis from './chart/XAxis.vue';
import YAxis from './chart/YAxis.vue';
import Bar from './chart/Bar.vue';
import Line from './chart/Bar.vue';

const components = {
  Chart,
  Title,
  XAxis,
  YAxis,
  Bar,
  Line
}

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

const CoolDataChartPlus = {
  version: '0.4.1',
  install
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Bar
}

export default CoolDataChartPlus;
