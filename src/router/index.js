import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error=> error)
}

// 按需加载
const Home = resolve => require(['@/views/home/Home'], resolve)
const Detail = resolve => require(['@/views/detail/Detail'], resolve)
const Category = resolve => require(['@/views/category/Category'], resolve)
const Order = resolve => require(['@/views/order/Order'], resolve)
const Search = resolve => require(['@/views/Search'], resolve)
const Cart = resolve => require(['@/views/cart/Cart'], resolve)
const Mine = resolve => require(['@/views/mine/Mine'], resolve)
const Login = resolve => require(['@/views/Login'], resolve)
const Set = resolve => require(['@/views/Set'], resolve)

// const Good = resolve => require(['@/views/detail/components/Good'], resolve)
// const Evaluation = resolve => require(['@/views/detail/components/Evaluation'], resolve)
// const Info = resolve => require(['@/views/detail/components/Info'], resolve)


export default new Router({
	mode: '', // 去掉链接中的 '#'
	routes: [{
		path: '/',
		name: 'home',
		component: Home,
		meta: {}
	},{
		path: '/detail/:id',
		name: 'detail',
		component: Detail,
		meta: {}
	},{
		path: '/order',
		name: 'order',
		component: Order,
		meta: {}
	},{
		path: '/search',
		name: 'search',
		component: Search,
		meta: {}
	},{
		path: '/category',
		name: 'category',
		redirect: '/category/0',
		component: Category,
		meta: {}
	},{
		path: '/category/:index',
		name: 'category',
		component: Category,
		meta: {}
	},{
		path: '/cart',
		name: 'cart',
		component: Cart,
		meta: {}
	},{
		path: '/mine',
		name: 'mine',
		component: Mine,
		meta: {}
	},{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {}
	},{
		path: '/set',
		name: 'set',
		component: Set,
		meta: {}
	}],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
})
