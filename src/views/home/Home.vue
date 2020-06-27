<template>
    <div class="home-container">
        <t-header @login="toLogin"></t-header>
        <Swiper :swiperList="swiperList"></Swiper>
        <Nav :navList="navList"></Nav>
        <Goods :goods="goods"></Goods>

        <Login v-show="showLogin" @close="showLogin=false"></Login>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import THeader from './components/THeader'
import Swiper from './components/Swiper'
import Nav from './components/Nav'
import Goods from './components/Goods'
import Login from '@/views/Login'
export default {
	name: 'Home',
    components: { THeader, Swiper, Nav, Goods, Login },
    data() {
        return {
            swiperList: [],
            navList: [],
            goods: {},
	        showLogin: false
        }
    },
    created() {
	    this.initPageData();
    },
    mounted() {
	    this.setNavBar(true)
    },
    methods: {
        ...mapActions({
            setNavBar: 'common/setNavBar'
        }),
		initPageData() {
			this.$http.get('/home').then(res => {
				if (res.status === 200) {
					this.swiperList = res.data.swiperList;
					this.navList = res.data.navList;
					this.goods = res.data.goods;
                }
			})
        },
	    toLogin() {
        	this.showLogin = true
        }
    }
}
</script>
<style lang="scss">
    .home-container {
        background: #f3f4f5;
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>
