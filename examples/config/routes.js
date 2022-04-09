import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import page from "../layout/index.vue";
import demo from "../layout/demo.vue";
import borderBox from "../views/borderBox.vue";
import title from "../views/title.vue";
import moduleTitle from "../views/moduleTitle.vue";
import loading from "../views/loading.vue";
import font from "../views/font.vue";
import layout from "../views/layout.vue";
import decoration from "../views/decoration.vue";
import chart from "../views/chart.vue";
import color from "../views/color.vue";
import background from "../views/background.vue";
import background_canvas from "../views/background_canvas.vue";

import layout1 from "../demo/layout1_demo.vue";
import layout2 from "../demo/layout2_demo.vue";
import layout3 from "../demo/layout3_demo.vue";
import layout4 from "../demo/layout4_demo.vue";

const routes = [
  {
    path: "/",
    component: page,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "index",
        component: borderBox,
      },
      {
        path: "title",
        name: "title",
        component: title,
      },
      {
        path: "moduleTitle",
        name: "moduleTitle",
        component: moduleTitle,
      },
      {
        path: "loading",
        name: "loading",
        component: loading,
      },
      {
        path: "font",
        name: "font",
        component: font,
      },
      {
        path: "layout",
        name: "layout",
        component: layout,
      },
      {
        path: "decoration",
        name: "decoration",
        component: decoration,
      },
      {
        path: "chart/:type",
        name: "chart",
        component: chart,
      },
      {
        path: "color",
        name: "color",
        component: color,
      },
      {
        path: "/background",
        component: demo,
        children: [
          {
            path: "index",
            name: "background",
            component: background,
          },
          {
            path: "canvas",
            name: "canvas",
            component: background_canvas,
          },
        ],
      },
    ],
  },
  {
    path: "/demo",
    component: demo,
    children: [
      {
        path: "layout1",
        name: "layout1",
        component: layout1,
      },
      {
        path: "layout2",
        name: "layout2",
        component: layout2,
      },
      {
        path: "layout3",
        name: "layout3",
        component: layout3,
      },
      {
        path: "layout4",
        name: "layout4",
        component: layout4,
      },
    ],
  },
];
// NProgress.configure({ showSpinner: false });
const router = createRouter({
  scrollBehavior(/* to, from, savedPosition */) {
    return { top: 0 };
  },
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
});
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
