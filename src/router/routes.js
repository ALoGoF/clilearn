export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "main" */'../views/home'),
    children: [
      {
        path: '/',
        name: '主页',
        redirect: '/page1'
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import(/* webpackChunkName: "home" */'../views/page1'),
        meta: {
          title: '主页'
        }
      },
      {
        path: '/page2',
        name: 'page2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/page2.vue'),
        meta: {
          title: '第二页'
        }
      }]
  }
]
