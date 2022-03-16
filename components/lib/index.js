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

import Loading1 from './loading/loading1/index';
import Loading2 from './loading/loading2/index';
import Loading3 from './loading/loading3/index';
import Loading4 from './loading/loading4/index';
import Loading5 from './loading/loading5/index';

import Layout1 from './layout/layout1/index';
import Layout2 from './layout/layout2/index';
import Layout3 from './layout/layout3/index';

import Chart1 from './chart/echart/index';
import Pyramid from './chart/pyramid/index';
import ScrollTable from './chart/scrollTable/index';

import Background from './background/background/index';
import BackgroundCanvas1 from './background/backgroundCanvas1/index';
import BackgroundCanvas2 from './background/backgroundCanvas2/index';
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
  Chart1,
  Pyramid,
  ScrollTable
};

// 加载装饰器组件
export const decorationComponents = {};

// 加载背景组件
export const backgroundComponents = {
  Background,
  BackgroundCanvas1,
  BackgroundCanvas2
};


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
