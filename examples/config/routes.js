import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import page from '../layout/index.vue';
import demo from '../layout/demo.vue';
import chart from '../views/chart.vue';
import bar from '../views/chart/bar.vue';
import line from '../views/chart/line.vue';
import mount from '../views/chart/mount.vue';
import color from '../views/color.vue';

const routes = [
  {
    path: '/',
    component: page,
    redirect: '/chart/bar',
    children: [
      {
        path: 'chart',
        name: 'chart',
        component: demo,
        children: [
          {
            path: 'bar',
            name: 'bar',
            component: bar
          },
          {
            path: 'mount',
            name: 'mount',
            component: mount
          },
          {
            path: 'line',
            name: 'line',
            component: line
          }
        ]
      },
      {
        path: 'color',
        name: 'color',
        component: color
      }
    ]
  }
];
// NProgress.configure({ showSpinner: false });
const router = createRouter({
  scrollBehavior(/* to, from, savedPosition */) {
    return { top: 0 };
  },
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
