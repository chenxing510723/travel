import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      component:() => import('../pages/home/home.vue') /*异步加载*/
    },
    {
      path:'/city',
      component:() => import('../pages/city/city.vue')
    },
    {
      path:'/detail/:id',
      component:() => import('../pages/detail/detail.vue')
    }
    ],
    scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0}
    }
})





















