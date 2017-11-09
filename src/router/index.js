import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HotDetail from '@/pages/hotDetail/HotDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    }, {
      path: '/hotdetail',
      name: 'Hotdetail',
      component: HotDetail
    }
  ]
})
