import * as types from '../mutation_types'
import Utils from '@/utils/common.js'

/**
 * 初始化页面时，先从本地读取 购物车数据，存到 store 中（如果有）
 */
let cart = JSON.parse(Utils.local_get('cart'));
let cartData = cart? cart.cartData : [];
let cartNum = cart? cart.cartNum : 0;

const state = {
	cartData: cartData, // 购物车的数据(数组列表)
	cartNum: cartNum, // 购物车的是商品数量
	checkAllState: false // 用于全选
}

/** commit mutations 时 注意 type */
const actions = {
	addCart({ commit }, data) {
		commit(types.ADD_CART, data)
	},
	deleteGood({ commit }, id) {
		commit(types.DELETE_GOOD, id)
	},
	checkChange({ commit }) {
		commit(types.CHECK_CHANGE)
	},
	checkAllChange({ commit }) {
		commit(types.CHECK_ALL_CHANGE)
	}
}

const mutations = {
	// 购物车添加商品
	[types.ADD_CART] (state, data) {
		if (state.cartData.length > 0) {
			let curCartData = state.cartData.filter((good) => { // curCartData 是一个满足条件的数组
				// return good.id === data.id; // 注意 是判断
				return good.id === data.id && good.spec === data.spec // 这里只做了简单的判断
			})[0]; // 因为是数组 所以 取第一个
			if (curCartData) {
				//curCartData.count++;
				curCartData.count += data.count; // 如果存在相同的 商品 则 count 加 1
			} else {
				state.cartData.unshift(data);
				state.cartNum++;
			}
		} else {
			state.cartData.unshift(data);
			state.cartNum++;
		}
		
		// 存储本地
		let curCart = {
			cartData: state.cartData,
			cartNum: state.cartNum
		}
		Utils.local_set('cart', curCart);
		
	},
	// 删除购物车的商品
	// [types.DELETE_GOOD] (state, id) {
	//
	// 	state.cartData.forEach((item, index) => {
	// 		if (state.cartData[index].id === id) {
	// 			state.cartData.splice(index, 1);
	// 			state.cartNum--;
	//
	// 			// 注意这里 不用 cartData.splice(index, 1)
	// 			cartNum--;
	// 		}
	// 	})
	//
	// 	// 再次存储本地
	// 	let curCart = {
	// 		cartData: cartData,
	// 		cartNum: cartNum
	// 	}
	// 	Utils.local_set('cart', curCart);
	// },
	
	[types.DELETE_GOOD] (state, data) {
		
		state.cartData.forEach((item, index) => {
			if (state.cartData[index].id === data.id &&  state.cartData[index].spec === data.spec) {
				state.cartData.splice(index, 1);
			}
		})
		
		// 注意这里 不用 cartData.splice(index, 1)
		state.cartNum--;

		// 再次存储本地
		let curCart = {
			cartData: cartData,
			cartNum: state.cartNum
		}
		Utils.local_set('cart', curCart);
	},
	
	// 单个选
	[types.CHECK_CHANGE] (state) {
		// 如果选中数量等于商品数量，则全选中
		let arr = state.cartData.filter(item => {
			return item.check == true
		})
		state.checkAllState = arr.length == state.cartData.length;
	},
	// 全选
	[types.CHECK_ALL_CHANGE] (state) {
		state.checkAllState = !state.checkAllState
		state.cartData.forEach(item => {
			item.check = state.checkAllState; // 用于点全选去控制所有单个选
		})
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
