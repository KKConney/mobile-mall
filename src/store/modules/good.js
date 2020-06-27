import * as types from '../mutation_types'
import Utils from '@/utils/common.js'

/**
 * 初始化页面时，先从本地读取 存到 store 中（如果有）
 */
let good = JSON.parse(Utils.local_get('cart'));
let goodData = good? good.goodData : [];

const state = {
	goodData: goodData, // 购物车的数据(数组列表)
}

/** commit mutations 时 注意 type */
const actions = {
	addOrder({ commit }, data) {
		commit(types.ADD_ORDER, data)
	}
}

const mutations = {
	// 单个商品订单
	[types.ADD_ORDER] (state, data) {
		
		state.goodData = data;
		// 存储本地
		let curGood = {
			goodData: state.goodData
		}
		Utils.local_set('good', curGood);
		
	},
	// 清除单个商品订单
	[types.REMOVE_ORDER] (state, data) {
		
		state.goodData = data;
		
		Utils.local_remove('good');
		
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
