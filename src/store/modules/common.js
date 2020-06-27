import * as types from '../mutation_types'

const state = {
	pageLoading: false,
	navBarFlag: false
}

/** commit mutations 时 注意 type */
const actions = {
	setNavBar({ commit }, flag) {
		commit(types.SET_NAVBAR, flag)
	}
}

const mutations = {
	[types.SET_PAGELOADING] (state, param) {
		state.pageLoading = param
	},
	[types.SET_NAVBAR] (state, param) {
		state.navBarFlag = param
	}
}

export default {
	// 使用 namespaced: true 为了解决不同模块命名冲突的问题，在页面中调用 state ，actions ，mutations 时要加上 模块名
	// 如： 'common/SET_PAGELOADING'
	namespaced: true,
	state,
	actions,
	mutations
}
