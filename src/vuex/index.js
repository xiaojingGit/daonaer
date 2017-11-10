import Vue from 'vue'
import Vuex from 'vuex'
import list from '../pages/list/module.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		list: list
	}
})