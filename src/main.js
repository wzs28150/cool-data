import { createApp } from 'vue';
import App from './App.vue';
import router from '@/config/routes';
import store from '@/store';
import '@/assets/less/index.less';
// import Particles from "particles.vue3";
import VueDragResizeRotate from '@gausszhou/vue3-drag-resize-rotate';
import '@gausszhou/vue3-drag-resize-rotate/lib/bundle.esm.css';
import CoolDatavPlus from 'cool-datav-plus/lib/index';
import 'cool-datav-plus/lib/css/index.css';

const app = createApp(App);
app.use(router);
app.use(store);
// app.use(Particles);
app.use(VueDragResizeRotate);
app.use(CoolDatavPlus);
app.mount('#app');
