import Vue from 'vue'
import Vuex from 'vuex'
import hotDetail from "../pages/hotDetail/module"
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
      hotDetail: hotDetail
    }
})