import { createApp } from 'vue'
import App from './App.vue'
import router from '@/config/routes';
import store from '@/config/store';
import Particles from "particles.vue3";
import CoolDatavPlus from 'cool-datav-plus/lib/index';
import 'cool-datav-plus/lib/css/index.css';

const app = createApp(App)
app.use(router);
app.use(store);
app.use(Particles);
app.use(CoolDatavPlus)
app.mount('#app')
