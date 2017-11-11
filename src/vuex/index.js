import Vue from "vue"
import Vuex from "vuex"
import home from "../pages/home/module.js"
import tourday from '../pages/daytourDetail/module'
import orderfill from '../pages/orderFilling/module'
import list from '../pages/list/module.js'
import hotDetail from "../pages/hotDetail/module"
import city from '../pages/city/module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home: home,
        tourday: tourday,
        orderfill: orderfill,
        list: list,
        hotDetail: hotDetail,
        city: city
    }
})
