import Vue from "vue"
import Vuex from "vuex"
import home from "../pages/home/module.js"
import tourday from '../pages/daytourDetail/module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home: home,
        tourday: tourday
    }
})
