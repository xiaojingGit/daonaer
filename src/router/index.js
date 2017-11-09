import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HotDetail from '@/pages/hotDetail/HotDetail'
import DayTourDetail from '@/pages/daytourDetail/DayTourDetail'

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
    },
    {
      path: '/daytourdetail',
      name: 'DayTourDetail',
      component: DayTourDetail
    }
  ]
})
