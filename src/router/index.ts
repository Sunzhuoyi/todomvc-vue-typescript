import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: Home
    },
    {
      path: '/:type',
      name: 'Home',
      component: Home,
      props: route => ({ type: route.params.type })
    }
  ]
})
