<template>
    <div class="container" >
        <div class="user-info">
            <div class="user" v-if="!userInfo" @click="showLogin=true">
                <van-image round width="4rem" height="4rem" src=""/>
                <h1 >登录</h1>
            </div>
            <div class="user" v-else>
                <van-image round width="4rem" height="4rem" :src="userInfo.head"/>
                <h1>{{userInfo.username}}</h1>
                <van-icon class="loginSet" name="setting-o" @click="handleUserSet"/>
            </div>
        </div>
        <div class="user-container">
            <van-row class="user-links">
                <van-col span="6">
                    <van-icon name="pending-payment" />
                    待付款
                </van-col>
                <van-col span="6">
                    <van-icon name="logistics" />
                    待发货
                </van-col>
                <van-col span="6">
                    <van-icon name="sign" />
                    待收货
                </van-col>
                <van-col span="6">
                    <van-icon name="balance-pay" />
                    退货退款
                </van-col>
            </van-row>

            <van-cell-group class="user-group">
                <van-cell icon="records" title="全部订单" is-link />
            </van-cell-group>

            <van-cell-group>
                <van-cell icon="points" title="我的积分" is-link />
                <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
                <van-cell icon="gift-o" title="我收到的礼物" is-link />
            </van-cell-group>
            <Recommend :goods="goods"></Recommend>
        </div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
        <div class="user-bg"></div>


        <Login v-show="showLogin" @close="showLogin=false"></Login>
    </div>
</template>

<script>
	// $(window).bind("scroll", function () {
	// 	var sTop = $(window).scrollTop();
	// 	var sTop = parseInt(sTop);
	// 	if (sTop >= 100) {
	// 		if (!$("#scrollSearchPro").is(":visible")) {
	// 			try {
	// 				$("#scrollSearchPro").slideDown();
	// 			} catch (e) {
	// 				$("#scrollSearchPro").show();
	// 			}
	// 		}
	// 	}
	// 	else {
	// 		if ($("#scrollSearchPro").is(":visible")) {
	// 			try {
	// 				$("#scrollSearchPro").slideUp();
	// 			} catch (e) {
	// 				$("#scrollSearchPro").hide();
	// 			}
	// 		}
	// 	}
	// });
	import {mapState, mapGetters, mapActions} from 'vuex'
	import { Row, Col, Icon, Cell, CellGroup, Image as VanImage } from 'vant';
    import Recommend from './components/Recommend'
	import Login from '@/views/Login'
	export default {
		components: {
			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[VanImage.name]: VanImage,
			Recommend,
			Login
		},
        data() {
			return {
				goods: {},
				userName: '',
				showLogin: false
            }
        },
		created() {
			this.initPageData();
		},
        mounted() {
            this.setNavBar(true);
        },
        computed: {
            ...mapGetters(['userInfo'])
        },
        methods: {
            ...mapActions({
                setNavBar: 'common/setNavBar'
            }),
            initPageData() {
                this.$http.get('/home').then(res => {
                    if (res.status === 200) {
                        this.goods = res.data.goods;
                    }
                })
            },
            handleUserSet() {
                this.$router.push({path: '/set'})
            }
        }
	};
</script>

<style lang="scss">
    .container {
        position: relative;
        overflow: hidden;
    }
    .user-container {
        position: relative;
        z-index: 3;
    }
    .user-info {
        width: 100%;
        height: 10rem;
        position: absolute;
        display: flex;
        padding: 0 2rem;
        z-index: 10;
        .user {
            width: 100%;
            display: flex;
            align-items: center;
            h1 {
                margin: 0;
                margin-left: 1rem;
                color: #fff;
                max-width: 12rem;
                font-size: 1.2rem;
                font-weight: normal;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    .user-bg {
        height: 12rem;
        width: 100%;
        top: 0;
        background: -moz-linear-gradient(left,#ff5e3e 0,#FF0036 100%);
        background: -webkit-gradient(linear,left,right,color-stop(0,#ff5e3e),color-stop(100%,#FF0036));
        background: -webkit-linear-gradient(left,#ff5e3e 0,#FF0036 100%);
        background: -o-linear-gradient(left,#ff5e3e 0,#FF0036 100%);
        background: -ms-linear-gradient(left,#ff5e3e 0,#FF0036 100%);
        background: -webkit-gradient(linear,left top,right top,from(#ff5e3e),to(#FF0036));
        background: -webkit-gradient(linear,left top,right top,from(#ff5e3e),to(#FF0036));
        background: -webkit-gradient(linear,left top,right top,color-stop(0,#ff5e3e),to(#FF0036));
        background: linear-gradient(to right,#ff5e3e 0,#FF0036 100%);
        position: absolute;
        z-index: 0;
    }
    .circle {
        position: absolute;
        right: 0;
        border-radius: 50%;
        z-index: 1;
        background: -webkit-linear-gradient(left,#ff5e3e 0,#FF0036 100%);
        &.c1 {
            top: 0rem;
            width: 6rem;
            right: -2rem;
            height: 6rem;
            z-index: 3;
        }
        &.c2 {
            top: 4rem;
            width: 12rem;
            height: 12rem;
            z-index: 2;
        }
        &.c3 {
            top: 4rem;
            left: -4rem;
            width: 12rem;
            height: 12rem;
            z-index: 1;
        }
    }
    .user {
        &-poster {
            width: 100%;
            height: 53vw;
            display: block;
        }

        &-group {
            margin-bottom: 15px;
        }

        &-links {
            padding: 15px 0;
            font-size: 12px;
            text-align: center;
            background-color: #fff;
            margin-top: 10rem;
            border-radius: 20px 20px 0 0;
            .van-icon {
                display: block;
                font-size: 24px;
            }
        }
    }
    .loginSet {
        position: absolute;
        right: 6rem;
        top: 50%;
        margin-top: -8px;
        color: #fff;
    }
</style>
