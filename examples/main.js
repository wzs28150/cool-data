import { createApp } from 'vue'
import App from './App.vue'
import router from '@/config/routes';
import Particles from "particles.vue3";
import CoolData from "@packages";
// import CoolData from '../lib/index';
import "@packages/css/index.less"
const app = createApp(App);
app.use(router);
app.use(Particles);
app.use(CoolData);
app.mount('#app')
