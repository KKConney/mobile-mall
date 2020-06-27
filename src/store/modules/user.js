import * as types from '../mutation_types'
import Utils from '@/utils/common.js'

let userInfo = JSON.parse(Utils.local_get('userInfo')) || null;

const state = {
	login: false,
	userInfo: userInfo
}

/** commit mutations 时 注意 type */
const actions = {
	getUserInfo({ commit }, info) {
		commit(types.GET_USERINFO, info)
	}
}

const mutations = {
	// 存储用户信息
	[types.SET_USERINFO] (state, info) {
		state.userInfo = info;
		state.login = true;
		Utils.local_set('userInfo', info)
	},
	//获取用户信息存入vuex
	[types.GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		}
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = {...info};
		} else {
			state.userInfo = null;
		}
	},
}

export default {
	// 使用 namespaced: true 为了解决不同模块命名冲突的问题，在页面中调用 state ，actions ，mutations 时要加上 模块名
	// 如： 'common/SET_PAGELOADING'
	namespaced: true,
	state,
	actions,
	mutations
}
