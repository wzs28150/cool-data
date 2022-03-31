import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Clipboard from "clipboard";
import "../components/css/index.less";
import CoolData from "../components/lib";


import './lib/index.css'
Vue.use(CoolData);
Vue.use(ElementUI);

Vue.prototype.Clipboard = Clipboard;
Vue.config.productionTip = false;



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
