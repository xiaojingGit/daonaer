import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/Daytrip'
import DayTourDetail from '@/pages/daytourDetail/DayTourDetail'
import OrderFill from '@/pages/orderFilling/OrderFill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
      path: '/daytourdetail',
      name: 'DayTourDetail',
      component: DayTourDetail
    },
    {
      path: '/orderfill',
      name: 'OrderFill',
      component: OrderFill
    }
  ]
})
