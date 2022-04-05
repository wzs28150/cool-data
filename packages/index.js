// 边框组件
export const borderBoxComponents = [];
const borderBoxFile = import.meta.globEager("./borderBox/*/index.js");
Object.keys(borderBoxFile)
  .sort((a, b) => {
    return a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "");
  })
  .forEach((item) => {
    const borderBoxItem = borderBoxFile[item].default;
    borderBoxComponents.push(borderBoxItem);
  });
// 图表组件
export const chartComponents = [];
const chartFile = import.meta.globEager("./chart/*/*/index.js");
Object.keys(chartFile)
  .sort((a, b) => {
    return a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "");
  })
  .forEach((item) => {
    const chartItem = chartFile[item].default;
    chartComponents.push(chartItem);
  });
// 标题组件
export const titleComponents = [];
const titleFile = import.meta.globEager("./title/*/index.js");
Object.keys(titleFile)
  .sort((a, b) => {
    return a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "");
  })
  .forEach((item) => {
    const titleItem = titleFile[item].default;
    titleComponents.push(titleItem);
  });
// 模块标题组件
export const moduleTitleComponents = [];
const moduleTitleFile = import.meta.globEager("./moduleTitle/*/index.js");
Object.keys(moduleTitleFile)
  .sort((a, b) => {
    return a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "");
  })
  .forEach((item) => {
    const moduleTitleItem = moduleTitleFile[item].default;
    moduleTitleComponents.push(moduleTitleItem);
  });
// 装饰器组件
export const decorationComponents = [];
const decorationFile = import.meta.globEager("./decoration/*/index.js");
Object.keys(decorationFile)
  .sort((a, b) => {
    return a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "");
  })
  .forEach((item) => {
    const decorationItem = decorationFile[item].default;
    decorationComponents.push(decorationItem);
  });
// 背景组件
// export const backgroundComponents = [];
// const backgroundFile = import.meta.globEager("./background/*/index.js");
// Object.keys(backgroundFile)
//   .sort((a, b) => {
//     return a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "");
//   })
//   .forEach((item) => {
//     const backgroundItem = backgroundFile[item].default;
//     backgroundComponents.push(backgroundItem);
//   });

// 加载组件
export const loadingComponents = [];
const loadingFile = import.meta.globEager("./loading/*/index.js");
Object.keys(loadingFile)
  .sort((a, b) => {
    return a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "");
  })
  .forEach((item) => {
    const loadingItem = loadingFile[item].default;
    loadingComponents.push(loadingItem);
  });

const components = [
  ...borderBoxComponents,
  ...chartComponents,
  ...titleComponents,
  ...moduleTitleComponents,
  ...decorationComponents,
  // ...backgroundComponents,
  ...loadingComponents,
];

export const Theme = {};
// 加载主题颜色
const themeFile = import.meta.globEager("./theme/*.js");
Object.keys(themeFile).forEach((item) => {
  const themeFileItem = themeFile[item].default;
  Theme[themeFileItem.themeName] = themeFileItem.theme;
});

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
