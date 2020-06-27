import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import getters from './getters'

import common from './modules/common'
import cart from './modules/cart'
import good from './modules/good'
import user from './modules/user'


export default new Vuex.Store({
	modules: {
		common,
		cart,
		good,
		user
	},
	getters
})
