import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import page from "../layout/index.vue";
import demo from "../layout/demo.vue";
import chart from "../views/chart.vue";
import color from "../views/color.vue"

const routes = [
  {
    path: "/",
    component: page,
    redirect: "/chart/bar",
    children: [
      {
        path: "chart/:type",
        name: "chart",
        component: chart
      },
      {
        path: "color",
        name: "color",
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
