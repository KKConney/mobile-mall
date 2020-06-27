import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'

// import FastClick from 'fastclick'
//
// FastClick.attach(document.body);
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {//DOMContentLoaded在document对象中被触发
//     FastClick.attach(document.body);
//   }, false);
// }

// 在 开发环境下 使用 mock
process.env.VUE_APP_MOCK && require('@/api/mock/mock')
import request from '@/api/request'
Vue.prototype.$http = request

// 由于 Vant 默认使用的 px，所以这里 就不转 rem 了
// import './utils/rem'

Vue.config.productionTip = false

Vue.use(VueLazyload, { //懒加载
  preLoad: 1,  // 表示lazyload的元素距离页面底部距离的百分比
  error: require('@/assets/images/err.png'),  // 图片加载失败后的显示的失败图片路径.
  loading: require('@/assets/images/loading.png'),// 图片正在加载中显示的loading图片的路径
  attempt: 1,   // 图片加载失败后的重试次数.默认为3.
  listenEvents: ['scroll']// 默认['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'].
  // 例如如果你给这个属性只指定['touchmove'].那么scroll 屏幕不会加载图片,只有手指滑动屏幕才会加载图片.
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
