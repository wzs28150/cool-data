import { defineClientAppEnhance } from "@vuepress/client";
import CoolData from "../../lib";
// import Bar5 from "../../packages/chart/bar/bar5";
import "../../lib/css/index.css";
export default defineClientAppEnhance(({ app }) => {
  var isClient = typeof window !== "undefined";
  if (isClient) {
    window.localStorage["vuepress-color-scheme"] = "dark";
  }
  // window.localStorage['vuepress-color-scheme'] = 'dark'
  app.use(CoolData);
});
