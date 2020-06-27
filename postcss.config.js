// module.exports = {
// 	plugins: {
// 		'autoprefixer': {
// 			browsers: ['Android >= 4.0', 'iOS >= 7']
// 		},
// 		'postcss-pxtorem': {
// 			rootValue: 75,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
// 			propList: ['*']
// 		}
// 	}
// }

/**
 * 忽略不要转换成 rem 的单位属性的技巧
 * 意思是 使用 'Px' 或 'PX' 就不会 => rem, 而又能被 浏览器 识别
 */
// `px` is converted to `rem`
// .convert {
// 	font-size: 16px; // converted to 1rem
// }

// `Px` or `PX` is ignored by `postcss-pxtorem` but still accepted by browsers
// .ignore {
// 	border: 1Px solid; // ignored
// 	border-width: 2PX; // ignored
// }
