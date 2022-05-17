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

import Chart from './chart/Chart';
import Title from './chart/Title';
import Legend from './chart/Legend';
import XAxis from './chart/XAxis';
import YAxis from './chart/YAxis';
import Bar from './chart/Bar';
import Line from './chart/Line';
import Mount from './chart/Mount';
import Area from './chart/Area';
import Scatter from './chart/Scatter';
import { deepClone, deepMerge, uuid } from './util';

const components = {
  Chart,
  Title,
  XAxis,
  YAxis,
  Bar,
  Line,
  Mount,
  Area,
  Scatter,
  Legend
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

const CoolDataChartPlus = {
  version: '0.4.1',
  install
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Chart,
  Title,
  Legend,
  XAxis,
  YAxis,
  Bar,
  Line,
  Mount,
  Area,
  Scatter,
  deepClone,
  deepMerge,
  uuid
};

export default CoolDataChartPlus;
