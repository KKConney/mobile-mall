import Utils from '@/utils/common.js'
const getters = {
	pageLoading: state => state.common.pageLoading,
	navBarFlag: state => state.common.navBarFlag,
	cartData: state => state.cart.cartData,
	cartNum: state => state.cart.cartNum,
	checkAllState: state => {
		let arr = state.cart.cartData.filter(item => {
			return item.check == true
		})
		return state.cart.checkAllState = arr.length == state.cart.cartData.length
	},
	totalPrice: state => {
		let arr = state.cart.cartData.filter(item => {
			return item.check == true
		})
		let num = 0;
		arr.forEach(item => {
			
			num += item.price * item.count;
		})
		
		return num;
	},
	goodData: state => state.good.goodData,
	login: state => state.user.login,
	userInfo: state => state.user.userInfo
}
export default getters
