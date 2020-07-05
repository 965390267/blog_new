import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/home/index.vue'
import Home from '../views/subhome/Home.vue'
import Index from '../views/Index.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      name:'Main',
      component:Main
     },
    {
    path: '/Home',
    name: 'Index',
    component: Index,
    children:[
        {
         path:'/',
         name:'Home',
         component:Home
        },
        {
          path: '/article',
          name: 'article',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/subhome/Article.vue')
        },
        {
          path: '/about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/subhome/About.vue')
        }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
