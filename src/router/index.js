import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import DayTourDetail from '@/pages/daytourDetail/DayTourDetail'
import OrderFill from '@/pages/orderFilling/OrderFill'
import List from '@/pages/list/Daytrip'
import Search from '@/pages/search/Search'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/daytourdetail',
      name: 'DayTourDetail',
      component: DayTourDetail
    },
    {
      path: '/orderfill',
      name: 'OrderFill',
      component: OrderFill
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/city', 
      name: 'City',
      component: City
    }
  ]
})
