import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"快速开始"},["/index.html","/README.md"]],
  ["v-3557d86c","/componentDocs/borderBox.html",{"title":"边框"},["/componentDocs/borderBox","/componentDocs/borderBox.md"]],
  ["v-6beaaa99","/componentDocs/decoration.html",{"title":"装饰器"},["/componentDocs/decoration","/componentDocs/decoration.md"]],
  ["v-7f119c5f","/componentDocs/layout.html",{"title":"模板"},["/componentDocs/layout","/componentDocs/layout.md"]],
  ["v-f82b32a6","/componentDocs/loading.html",{"title":"加载"},["/componentDocs/loading","/componentDocs/loading.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
