import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [

  // PUBLICS PATHS
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
  {
    path: '/users/:id',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue'),
    props: (route) => {
      return { id: route.params.id }
    }
  },



  // PRIVATE PATHS
  {
    path: '/:id',
    name: 'home-private',
    component: () => import(/* webpackChunkName: "home-private" */ '../views/HomePrivateView.vue'),
    props: (route) => {
      return { id: route.params.id }
    }
  },
  {
    path: '/users/mi-perfil/',
    name: 'mi-perfil',
    component: () => import(/* webpackChunkName: "mi-perfil" */ '../views/MyProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
