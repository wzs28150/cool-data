import { createApp } from 'vue'
import App from './App.vue'
import router from '@/config/routes';
import CoolData from "@components/lib";
import "@components/css/index.less"
const app = createApp(App);
app.use(router);
app.use(CoolData);
app.mount('#app')
