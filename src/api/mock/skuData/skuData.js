export const skuData000001 = {
	goodsId: '000001', // 商品 id
	quota: 3, // 限购数，0 表示不限购
	quota_used: 0, // 已经购买过的数量
	goods: { // 商品信息
		title: '新版MacBook 电脑 预售 (深灰，银白) 高配置',
		picture:
			require('@/assets/resources/pd-008.jpg')
	},
	initialSku: { //默认选中的 sku
		// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
		// 值：skuValueId（规格值 id）
		s1: "30349",
		s2: "1193",
		selectedNum: 1, // 初始选中数量
		// 初始选中的商品属性
		// 键：属性id
		// 值：属性值id列表
		selectedProp: {
		
		}
	},
	sku: {
		// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
		// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
		tree: [
			{
				k: '颜色', // skuKeyName：规格类目名称
				k_id: '1',
				v: [
					{
						id: '30349', // skuValueId：规格值 id
						name: '银白色', // skuValueName：规格值名称
						
						// 规格类目图片，只有第一个规格类目可以定义图片
						imgUrl: require('@/assets/resources/pd-008.jpg'),
						// 用于预览显示的规格类目图片
						previewImgUrl: require('@/assets/resources/pd-008.jpg')
					},
					{
						id: '1215',
						name: '深灰色',
						imgUrl: require('@/assets/resources/pd-008.jpg'),
						previewImgUrl: require('@/assets/resources/pd-008.jpg')
					}
				],
				k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				count: 2
			},
			{
				k: '尺寸',
				k_id: '2',
				v: [
					{
						id: '1193',
						name: '13寸'
					},
					{
						id: '1194',
						name: '15寸'
					}
				],
				k_s: 's2',
				count: 2
			}
		],
		
		// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
		list: [
			{
				id: 2259, // skuId，下单时后端需要
				price: 1500000, // 价格（单位分）
				// discount: 122,
				s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
				s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
				s3: '0', // 为0表示不存在该规格
				s4: '0',
				s5: '0',
				stock_num: 20, // 当前 sku 组合对应的库存
				goodsId: '000001'
			},
			{
				id: 2260,
				price: 1650000,
				// discount: 112,
				s1: '1215',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 2, //库存
				goodsId: '000001'
			},
			{
				id: 2257,
				price: 1500000,
				// discount: 132,
				s1: '30349',
				s2: '1193',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 40, //库存
				goodsId: '000001'
			},
			{
				id: 2258,
				price: 1650000,
				// discount: 100,
				s1: '30349',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 50, //库存
				goodsId: '000001'
			}
		],
		price: '10000.00', // 默认价格（单位元）
		stock_num: 227, // 商品总库存
		none_sku: false,  // 是否无规格商品
		hide_stock: false  // 是否隐藏剩余库存
	}
}
export const skuData000002 = {
	goodsId: '000002', // 商品 id
	quota: 3, // 限购数，0 表示不限购
	quota_used: 0, // 已经购买过的数量
	goods: { // 商品信息
		title: '高容量火锅',
		picture:
			require('@/assets/resources/pd-005.jpg')
	},
	initialSku: { //默认选中的 sku
		// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
		// 值：skuValueId（规格值 id）
		s1: "30349",
		s2: "1193",
		selectedNum: 1, // 初始选中数量
		// 初始选中的商品属性
		// 键：属性id
		// 值：属性值id列表
		selectedProp: {
		
		}
	},
	sku: {
		// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
		// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
		tree: [
			{
				k: '颜色', // skuKeyName：规格类目名称
				k_id: '1',
				v: [
					{
						id: '30349', // skuValueId：规格值 id
						name: '炫酷黑', // skuValueName：规格值名称
						
						// 规格类目图片，只有第一个规格类目可以定义图片
						imgUrl: require('@/assets/resources/pd-005.jpg'),
						// 用于预览显示的规格类目图片
						previewImgUrl: require('@/assets/resources/pd-005.jpg'),
					},
					{
						id: '1215',
						name: '金属白',
						imgUrl: require('@/assets/resources/pd-005.jpg'),
						previewImgUrl: require('@/assets/resources/pd-005.jpg'),
					}
				],
				k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				count: 2
			},
			{
				k: '尺寸',
				k_id: '2',
				v: [
					{
						id: '1193',
						name: '直径15'
					},
					{
						id: '1194',
						name: '直径18'
					}
				],
				k_s: 's2',
				count: 2
			}
		],
		
		// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
		list: [
			{
				id: 2259, // skuId，下单时后端需要
				price: 55800, // 价格（单位分）
				// discount: 122,
				s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
				s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
				s3: '0', // 为0表示不存在该规格
				s4: '0',
				s5: '0',
				stock_num: 20, // 当前 sku 组合对应的库存
				goodsId: '000002'
			},
			{
				id: 2260,
				price: 75000,
				// discount: 112,
				s1: '1215',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 2, //库存
				goodsId: '000002'
			},
			{
				id: 2257,
				price: 55800,
				// discount: 132,
				s1: '30349',
				s2: '1193',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 40, //库存
				goodsId: '000002'
			},
			{
				id: 2258,
				price: 75000,
				// discount: 100,
				s1: '30349',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 50, //库存
				goodsId: '000002'
			}
		],
		price: '500.00', // 默认价格（单位元）
		stock_num: 227, // 商品总库存
		none_sku: false,  // 是否无规格商品
		hide_stock: false  // 是否隐藏剩余库存
	}
}
export const skuData000003 = {
	goodsId: '000003', // 商品 id
	quota: 3, // 限购数，0 表示不限购
	quota_used: 0, // 已经购买过的数量
	goods: { // 商品信息
		title: '质量与安全火锅',
		picture:
			require('@/assets/resources/pd-006.jpg')
	},
	initialSku: { //默认选中的 sku
		// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
		// 值：skuValueId（规格值 id）
		s1: "30349",
		s2: "1193",
		selectedNum: 1, // 初始选中数量
		// 初始选中的商品属性
		// 键：属性id
		// 值：属性值id列表
		selectedProp: {
		
		}
	},
	sku: {
		// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
		// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
		tree: [
			{
				k: '颜色', // skuKeyName：规格类目名称
				k_id: '1',
				v: [
					{
						id: '30349', // skuValueId：规格值 id
						name: '炫酷黑', // skuValueName：规格值名称
						
						// 规格类目图片，只有第一个规格类目可以定义图片
						imgUrl: require('@/assets/resources/pd-006.jpg'),
						// 用于预览显示的规格类目图片
						previewImgUrl: require('@/assets/resources/pd-006.jpg'),
					},
					{
						id: '1215',
						name: '金属白',
						imgUrl: require('@/assets/resources/pd-006.jpg'),
						previewImgUrl: require('@/assets/resources/pd-006.jpg'),
					}
				],
				k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				count: 2
			},
			{
				k: '尺寸',
				k_id: '2',
				v: [
					{
						id: '1193',
						name: '直径15'
					},
					{
						id: '1194',
						name: '直径18'
					}
				],
				k_s: 's2',
				count: 2
			}
		],
		
		// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
		list: [
			{
				id: 2259, // skuId，下单时后端需要
				price: 65900, // 价格（单位分）
				// discount: 122,
				s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
				s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
				s3: '0', // 为0表示不存在该规格
				s4: '0',
				s5: '0',
				stock_num: 20, // 当前 sku 组合对应的库存
				goodsId: '000003'
			},
			{
				id: 2260,
				price: 85000,
				// discount: 112,
				s1: '1215',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 2, //库存
				goodsId: '000003'
			},
			{
				id: 2257,
				price: 65900,
				// discount: 132,
				s1: '30349',
				s2: '1193',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 40, //库存
				goodsId: '000003'
			},
			{
				id: 2258,
				price: 85000,
				// discount: 100,
				s1: '30349',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 50, //库存
				goodsId: '000003'
			}
		],
		price: '600.00', // 默认价格（单位元）
		stock_num: 227, // 商品总库存
		none_sku: false,  // 是否无规格商品
		hide_stock: false  // 是否隐藏剩余库存
	}
}
export const skuData000004 = {
	goodsId: '000004', // 商品 id
	quota: 3, // 限购数，0 表示不限购
	quota_used: 0, // 已经购买过的数量
	goods: { // 商品信息
		title: '士力架巧克力',
		picture:
			require('@/assets/resources/pd-011.jpg')
	},
	initialSku: { //默认选中的 sku
		// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
		// 值：skuValueId（规格值 id）
		s1: "30349",
		s2: "1193",
		selectedNum: 1, // 初始选中数量
		// 初始选中的商品属性
		// 键：属性id
		// 值：属性值id列表
		selectedProp: {
		
		}
	},
	sku: {
		// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
		// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
		tree: [
			{
				k: '口味', // skuKeyName：规格类目名称
				k_id: '1',
				v: [
					{
						id: '30349', // skuValueId：规格值 id
						name: '原味花生夹心巧克力', // skuValueName：规格值名称
						
						// 规格类目图片，只有第一个规格类目可以定义图片
						imgUrl: require('@/assets/resources/pd-011.jpg'),
						// 用于预览显示的规格类目图片
						previewImgUrl: require('@/assets/resources/pd-011.jpg'),
					},
					{
						id: '1215',
						name: '奶香杏仁夹心巧克力',
						imgUrl: require('@/assets/resources/pd-011.jpg'),
						previewImgUrl: require('@/assets/resources/pd-011.jpg'),
					}
				],
				k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				count: 2
			},
			{
				k: '重量',
				k_id: '2',
				v: [
					{
						id: '1193',
						name: '500g'
					},
					{
						id: '1194',
						name: '1000g'
					}
				],
				k_s: 's2',
				count: 2
			}
		],
		
		// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
		list: [
			{
				id: 2259, // skuId，下单时后端需要
				price: 14900, // 价格（单位分）
				// discount: 122,
				s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
				s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
				s3: '0', // 为0表示不存在该规格
				s4: '0',
				s5: '0',
				stock_num: 20, // 当前 sku 组合对应的库存
				goodsId: '000004'
			},
			{
				id: 2260,
				price: 30000,
				// discount: 112,
				s1: '1215',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 2, //库存
				goodsId: '000004'
			},
			{
				id: 2257,
				price: 14900,
				// discount: 132,
				s1: '30349',
				s2: '1193',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 40, //库存
				goodsId: '000004'
			},
			{
				id: 2258,
				price: 30000,
				// discount: 100,
				s1: '30349',
				s2: '1194',
				s3: '0',
				s4: '0',
				s5: '0',
				stock_num: 50, //库存
				goodsId: '000004'
			}
		],
		price: '100.00', // 默认价格（单位元）
		stock_num: 227, // 商品总库存
		none_sku: false,  // 是否无规格商品
		hide_stock: false  // 是否隐藏剩余库存
	}
}

