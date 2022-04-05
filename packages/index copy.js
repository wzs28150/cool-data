/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-04 17:31:15
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-04 17:31:15
 */
export const borderBoxComponents = [];
const borderBoxFile = import.meta.globEager('./borderBox/*/index.js')
Object.keys(borderBoxFile).sort((a,b)=>{
  return a.replace(/[^\d]/g, "")  - b.replace(/[^\d]/g, "");
}).forEach((item)=>{
  const borderBoxItem = borderBoxFile[item].default
  borderBoxComponents.push(borderBoxItem)
})

export const chartComponents = []
const chartFile = import.meta.globEager('./chart/*/*/index.js')
Object.keys(chartFile).sort((a,b)=>{
  return a.replace(/[^\d]/g, "")  - b.replace(/[^\d]/g, "");
}).forEach((item)=>{
  const chartItem = chartFile[item].default
  chartComponents.push(chartItem)
})

const components = [
  ...borderBoxComponents,
  ...chartComponents
];


export const Theme = {
  
}
// 加载主题颜色
const themeFile = import.meta.globEager('./theme/*.js')
Object.keys(themeFile).forEach((item)=>{
  const themeFileItem = themeFile[item].default
  Theme[themeFileItem.themeName] = themeFileItem.theme
})

const install = (app) => {
  // console.log(app);
  if (install.installed) return;
  components.forEach(component => app.component(component.name, component))
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue.createApp({}));
}

export default {
  install,
  ...components,
};
