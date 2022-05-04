import { createRouter, createWebHashHistory } from 'vue-router';
// import Layout1 from '@/layouts/Layout1.vue';
const routes = [
  {
    title: 'Index',
    path: '/',
    component: () => import('@/views/index/Index.vue')
  },
  {
    title: 'Test',
    path: '/test',
    component: () => import('@/views/test/Index.vue')
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