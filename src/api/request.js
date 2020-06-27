import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Toast } from 'vant';

const service = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 100000
})

// request interceptor
service.interceptors.request.use(config => {
	// 全局请求的加载动画
	store.commit('common/SET_PAGELOADING', true);
	
	// 判断 token 存在，添加请求报文
	if (localStorage.getItem('auth')) {
		config.headers['Authorization'] = localStorage.getItem('auth')
	}
	
	return config;
}, error => {
	// 请求错误提示
	Toast('网络出错，请稍后重试！')
	
	// 请求动画关闭
	store.commit('common/SET_PAGELOADING', true);
	// 抛出请求错误信息
	return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(config => {
	// 关闭请求动画
	store.commit('common/SET_PAGELOADING', false);
	
	// 判断若 无相应权限 则转向 登录页
	return config;
}, error => {
	// 请求动画关闭
	store.commit('common/SET_PAGELOADING', false);
	// 抛出请求错误信息
	return Promise.reject(error)
})

export default service;
