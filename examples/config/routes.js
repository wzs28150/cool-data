import { createRouter, createWebHashHistory } from 'vue-router';
// import Layout1 from '@/layouts/Layout1.vue';
import page from "../layout/index.vue";
import borderBox from "../views/borderBox.vue"
const routes = [
  {
    path: '/',
    
    component:page,
    children: [
      {
        path: 'index',
        name: 'index',
        component: borderBox
      }
    ]
  },
];

const router = createRouter({
  scrollBehavior(/* to, from, savedPosition */) {
    return { top: 0 }
  },
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;