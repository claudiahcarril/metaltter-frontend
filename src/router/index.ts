import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-public',
    component: () => import(/* webpackChunkName: "home-public" */ '../views/HomePublicView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/recovering-password',
    name: 'recovering-password',
    component: () => import(/* webpackChunkName: "recovering-password" */ '../views/PasswordRecoveringView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
