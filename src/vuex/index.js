import Vue from 'vue'
import Vuex from 'vuex'
import tourday from '../pages/daytourDetail/module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tourday: tourday
    }
})