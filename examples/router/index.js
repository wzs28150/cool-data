import Vue from "vue";
import Router from "vue-router";
import page from "../layout/index.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import borderBox from "../views/borderBox.vue";
import loading from "../views/loading.vue";
import font from "../views/font.vue";
import layout from "../views/layout.vue";
import layout_info from "../views/layout_info.vue";
import decoration from "../views/decoration.vue";
import chart from "../views/chart.vue";
import color from "../views/color.vue";
import title from "../views/title.vue";
import moduleTitle from "../views/moduleTitle.vue";
import background from "../views/background.vue";
import demo from "../layout/demo.vue";
import layout1 from "../demo/layout1_demo.vue";
import layout2 from "../demo/layout2_demo.vue";
import layout3 from "../demo/layout3_demo.vue";
Vue.use(Router);

const router = new Router({
  routes: [
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
          path: "chart",
          name: "chart",
          component: chart,
        },
        {
          path: "color",
          name: "color",
          component: color,
        },

        {
          path: "background",
          name: "background",
          component: background,
        },
      ],
    },
    {
      path: "/layout_info",
      name: "layout_info",
      component: layout_info,
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
      ],
    },
  ],
});

NProgress.configure({ showSpinner: false }); // 通过设置为false来关闭加载旋转器
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
