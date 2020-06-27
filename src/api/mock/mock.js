const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
import Utils from '@/utils/common.js'
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
import {skuData000001, skuData000002, skuData000003, skuData000004} from './skuData/skuData'

// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
	timeout: '200-400'
})

/**
 * 这里随机生成也可以，为了便于查看，这里 写死数据
 */
// const homeData = {
// 	'swiperList|5': [
// 		{
// 			id: Random.int(1000, 10000),
// 			// imgUrl: Mock.mock('@img(750x320, @color)')
// 		}
// 	],
// 	'navList|8': [
// 		{
// 			'id|+1': 1,
// 			desc: Random.csentence(4),
// 			icon: Mock.mock('@img(40x40, @color)')
// 		}
// 	]
// }

const homeData = {
	'swiperList': [
		{id: '000001', imgUrl: require('@/assets/resources/banner.jpg')},
		{id: '000002', imgUrl: require('@/assets/resources/banner2.jpg')},
		{id: '000003', imgUrl: require('@/assets/resources/banner3.jpg')},
	],
	'navList': [
		{
			id: '01',
			desc: '女神服饰',
			icon: require('@/assets/resources/item-001.png')
		},
		{
			id: '02',
			desc: '男神服饰',
			icon: require('@/assets/resources/item-002.png')
		},
		{
			id: '03',
			desc: '鞋包饰品',
			icon: require('@/assets/resources/item-004.png')
		},
		{
			id: '04',
			desc: '美妆护肤',
			icon: require('@/assets/resources/item-006.png')
		},
		{
			id: '05',
			desc: '海外精品',
			icon: require('@/assets/resources/item-005.png')
		},
		{
			id: '06',
			desc: '图书商城',
			icon: require('@/assets/resources/item-007.png')
		},
		{
			id: '07',
			desc: '生活用品',
			icon: require('@/assets/resources/item-008.png')
		},
		{
			id: '08',
			desc: '更多分类',
			icon: require('@/assets/resources/item-010.png')
		}
	],
	'goods': {
		'flashSale': [
			{id: '0001', desc: '精品好物', title: '1元拼团', imgUrl: require('@/assets/resources/pd-001.png'), price: 1234, oPrice: 1800},
			{id: '0002', desc: '你值得拥有', title: '限时促销', imgUrl: require('@/assets/resources/pd-004.png'), price: 2300, oPrice: 2900},
			{id: '0003', desc: '先到先得', title: '活动满减', imgUrl: require('@/assets/resources/pd-002.png'), price: 1850, oPrice: 2100},
			{id: '0004', desc: '特价商品', title: '极速秒杀', imgUrl: require('@/assets/resources/pd-003.png'), price: 2200, oPrice: 2200},
		],
		'qualities': [
			{id: '001', desc: '错过不再有', name: '品牌特卖', imgUrl: require('@/assets/resources/pd-0014.png')},
			{id: '002', desc: '抢100元大额券', name: '品牌清仓', imgUrl: require('@/assets/resources/pd-0013.png')},
			{id: '003', desc: '纳米技术', name: '量贩团', imgUrl: require('@/assets/resources/pd-0019.png')},
		],
		'falls|2-20': [
			{id: '000001', name: '高配MacBook', price: 150000, oPrice: 155000, imgUrl: require('@/assets/resources/pd-008.jpg')},
			{id: '000002', name: '高容量火锅', price: 558, oPrice: 669, imgUrl: require('@/assets/resources/pd-005.jpg')},
			{id: '000003', name: '质量与安全火锅', price: 659, oPrice: 669, imgUrl: require('@/assets/resources/pd-006.jpg')},
			{id: '000004', name: '士力架巧克力', price: 149, oPrice: 159, imgUrl: require('@/assets/resources/pd-011.jpg')},
		]
	}
}

const categories = {
	'category|6-20': [
		{
			cate: '@cname',
			cateImg: require('@/assets/resources/ct-1.jpg'),
			'cateList|4-10': [
				{name: '休闲食品',imgUrl: require('@/assets/resources/good-4.png')},
				{name: '健康水果',imgUrl: require('@/assets/resources/good-9.jpg')},
				{name: '健康水果',imgUrl: require('@/assets/resources/good-6.jpg')},
				{name: '健康水果',imgUrl: require('@/assets/resources/good-5.jpg')},
				{name: '数码电器',imgUrl: require('@/assets/resources/good-3.png')},
				{name: '数码电器',imgUrl: require('@/assets/resources/good-1.jpg')},
				{name: '数码电器',imgUrl: require('@/assets/resources/good-8.gif')},
			]
		},
		{
			cate: '@cname',
			cateImg: require('@/assets/resources/ct-2.jpg'),
			'cateList|4-10': [
				{name: '数码电器',imgUrl: require('@/assets/resources/good-8.gif')},
				{name: '休闲食品',imgUrl: require('@/assets/resources/good-4.png')},
				{name: '健康水果',imgUrl: require('@/assets/resources/good-9.jpg')},
				{name: '健康水果',imgUrl: require('@/assets/resources/good-6.jpg')},
				{name: '数码电器',imgUrl: require('@/assets/resources/good-3.png')},
				{name: '数码电器',imgUrl: require('@/assets/resources/good-1.jpg')},
				{name: '健康水果',imgUrl: require('@/assets/resources/good-5.jpg')},
			]
		}
	]
}

const addresses = {
	'addresses': [
		{addressId: '1', userId: '001', receiverName: '张三丰', receiverMobile: '13898725632', receiverProvince: '', receiverCity: '上海市', receiverDistrict: '浦东新区', receiverAddress: '浦东大道1000号'},
		{addressId: '2', userId: '002', receiverName: '张无忌', receiverMobile: '15898790282', receiverProvince: '广东省', receiverCity: '深圳市', receiverDistrict: '经济开发区', receiverAddress: 'xxx大街2002号1栋三楼'},
	]
}

const queryGoods = config => {
	let message = '';
	const falls =  [
		{id: '000001', name: '新版MacBook 电脑 预售 (深灰，银白) 高配置', price: 1500000, oPrice: 1600000, express: '上海 - 免运费 - 假一赔10', imgUrlList: [require('@/assets/resources/pd-008.jpg'), require('@/assets/resources/pd-008.jpg')], skuData: skuData000001},
		{id: '000002', name: '高容量火锅', price: 558, oPrice: 669, express: '北京 - 免运费 - 假一赔10' , imgUrlList: [require('@/assets/resources/pd-005.jpg'), require('@/assets/resources/pd-005.jpg')], skuData: skuData000002},
		{id: '000003', name: '质量与安全火锅', price: 659, oPrice: 669,  express: '广州 - 免运费 - 假一赔10', imgUrlList: [require('@/assets/resources/pd-006.jpg'), require('@/assets/resources/pd-006.jpg')], skuData: skuData000003},
		{id: '000004', name: '士力架巧克力', price: 149, oPrice: 159, express: '深圳 - 免运费 - 假一赔10', imgUrlList: [require('@/assets/resources/pd-011.jpg'), require('@/assets/resources/pd-011.jpg')], skuData: skuData000004},
	]
	let paramId = JSON.parse(config.body).id;
	let req = null;
	falls.forEach(obj => {
		if (paramId === obj.id) {
			req = obj
		}
	})
	
	if (!req) {
		message = '请求参数错误！'
	} else {
		message = '请求成功！'
	}
	
	return {
		message,
		req
	};
}

const userLogin = config => {
	let message = '';
	
	// 简单登录 并无校验
	let param = JSON.parse(config.body);
	let token = null;
	if (param) {
		token = Utils.randomString(50);
	}
	
	if (!token) {
		message = '请求参数错误'
	} else {
		message = '登录成功'
	}
	let userInfo = {
		username: param.username,
		head: require('@/assets/resources/head.jpg'),
		token: token
	}
	return {
		message,
		userInfo
	}
	
}

const home = Mock.mock(`${domain}/home`, 'get', homeData);
const category = Mock.mock(`${domain}/category`, 'get', categories);
const address = Mock.mock(`${domain}/address`, 'get', addresses);
const query = Mock.mock(RegExp(`${domain}/query` + '.*'), 'get', queryGoods);
const login = Mock.mock(RegExp(`${domain}/login` + '.*'), 'post', userLogin);

export {
	home,
	category,
	query,
	address,
	login
}
