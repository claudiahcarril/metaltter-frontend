import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import haveTokenGuard from './loginGuards'


const routes: Array<RouteRecordRaw> = [

  // PUBLICS PATHS
  {
    path: '/',
    name: 'home-public',
    component: () => import(/* webpackChunkName: "home-public" */ '../views/HomePublicView.vue')
  },
  {
    path: '/user/:username', 
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue'), 
    props: (route) => {
      return { username: route.params.username }
    }
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
  


  // PRIVATE PATHS
  {
    path: '/',
    name: 'home-private',
    beforeEnter: [haveTokenGuard],
    component: () => import(/* webpackChunkName: "home-private" */ '../views/HomePrivateView.vue'),
  },
  {
    path: '/mi-perfil/',
    name: 'mi-perfil',
    beforeEnter: [haveTokenGuard],
    component: () => import(/* webpackChunkName: "mi-perfil" */ '../views/MyProfileView.vue')
  },

  // NOT FOUND PAGE
  {
    path: "/:pathMatch(.*)",
    name: 'NotFound',
    component: import(/*webpackChunkName: notFound*/ "../views/NotFoundView.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
