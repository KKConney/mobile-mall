<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" @click="sorry">
                客服
            </van-goods-action-icon>
            <van-goods-action-icon :class="{'actionFrame':cartNum>0}" icon="cart-o" :badge="cartNum" @click="cartClick">
                购物车
            </van-goods-action-icon>
            <van-goods-action-button type="warning" @click="onAddCartClick">
                加入购物车
            </van-goods-action-button>
            <van-goods-action-button type="danger" @click="onBuyclick">
                立即购买
            </van-goods-action-button>
        </van-goods-action>

    </div>
</template>

<script>
	import {
		Toast,
		Icon,
		GoodsAction,
		GoodsActionIcon,
		GoodsActionButton
	} from 'vant';
	export default {
		components: {
			[Icon.name]: Icon,
			[Toast.name]: Toast,
			[GoodsAction.name]: GoodsAction,
			[GoodsActionIcon.name]: GoodsActionIcon,
			[GoodsActionButton.name]: GoodsActionButton,
		},

		data() {
			return {

			};
		},

		props: {
			goodDetail: Object,
			count: Number,
			spec: String
		},

		watch: {

		},

		async mounted() {

		},

		filters: {

		},

		computed: {
			// 涉及 v-model 的双向绑定数据，这里 要作 getter setter 处理，或者 将 v-model 换成 :value
			cartNum: {
				get() {
					if (this.$store.state.cart.cartNum > 0) {
						return this.$store.state.cart.cartNum
					} else {
						return ''
					}
				},
				set(val) {}
			}
		},

		methods: {
			onAddCartClick() {
				this.$emit('handleAdd', 1);
			},

			onBuyclick() {
				this.$emit('handleBuy', 2);
            },

			cartClick() {
				this.$router.push({path: '/cart'});
			},

			sorry() {
				Toast('暂无后续逻辑~');
			},
		}
	};
</script>

<style lang="scss">
    .detail-skeleton {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 0;
        padding: 0;
        background: #fff;
        .van-skeleton__title {
            width: 100%!important;
            height: 50%;
        }
        .van-skeleton__row:first-child {
            height: 50vh;
        }
    }
    .first-group {
        .van-cell {
            line-height: normal;
            &:after {
                right: 16px;
            }
        }
    }
    .goods {
        position: relative;
        z-index: 1;
        padding-bottom: 50px;

        .goods-swipe {
            img {
                width: 100%;
                display: block;
            }
        }

        .goods-title {
            font-size: 14px;
            font-weight: bold;
            padding: .4rem 0;
        }

        .goods-top {

        }

        .goods-price {
            color: #f44;
            font-size: 20px;
        }

        .goods-sm {
            margin: 0;
            font-size: 0.7rem;
            color: #888;
        }

        .goods-express {
            color: #999;
            font-size: 12px;
            padding: 10px 15px;
            line-height: 24px;
        }

        .goods-cell-group {
            margin: .6rem 0;

            .van-cell__value {
                color: #999;
            }
        }

        .goods-tag {
            margin-left: 5px;
        }
        .van-cell-group {
            .van-field__label, .van-field__value {
                line-height: 24px;
                /*font-size: 12px;*/
            }
            .van-field__label {
                width: 50px;
                span {
                    /*font-size: 12px;*/
                }
            }
            .van-field__control {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        .van-popup {
            &::-webkit-scrollbar {
                width: 0;
            }
            .coupon-title {
                font-size: 1rem;
                margin: 0;
                height: 3rem;
                line-height: 3rem;
                text-align: center;
            }
        }
        .coupon-list {
            position: absolute;
            left: 0;
            right: 0;
            top: 3rem;
            &::-webkit-scrollbar {
                width: 0;
            }
            overflow-y: auto;
            bottom: 0;
            padding: .5rem 1rem 1rem 1rem;
            transition: all 1s;
            .coupon-code {
                margin-top: .5rem;
                padding: .2rem 1rem;
                background: #ec5fac;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-left: 5px dotted #fff;
                border-right: 5px dotted #fff;
                box-shadow: 0 4px 5px rgba(220,106,170, .3);
                &:active {
                    opacity: .7;
                }
                .left {
                    h1 {
                        margin: 5px 0;
                        font-size: 1.8rem;
                        color: rgba(255,255,255, .7);
                        span {
                            font-size: 12px;
                        }
                    }
                    p {
                        margin: 0;
                        font-size: 12px;
                        color: rgba(255,255,255, .7);
                    }
                    margin-bottom: .5rem;
                }

                .right {
                    height: 100%;
                    color: #fff;
                    position: relative;
                    font-size: 14px;
                    &:before {
                        position: absolute;
                        content: '';
                        width: 0px;
                        border-left: 1px dotted #ec5fac;
                        height: 4rem;
                        background: rgba(255,255,255, .4);
                        top: 50%;
                        margin-top: -2rem;
                        left: -10px;
                    }
                }
            }
            .van-radio {
                padding: 10px 0;
                .van-radio__icon, .van-radio__label {
                    font-size: 14px;
                }
            }
        }
    }
    .van-overlay {
        /*background-color: rgba(0,0,0,.1);*/
    }
    .van-field__control {
        font-size: 12px;
    }
    .van-goods-action {
        z-index: 11;
        .actionFrame {
            .van-icon {
                animation: iconFrame ease-in .3s;
            }
        }
        transition: all .3s;
        .van-info {
            animation: badgeFrame .3s ease-in .3s;
        }
    }
    @keyframes badgeFrame
    {
        0% {top: 0}
        40% {top: -12px}
        100% {top: 0}
    }
    @-webkit-keyframes badgeFrame
    {
        0% {top: 0}
        40% {top: -12px}
        100% {top: 0}
    }
    @keyframes iconFrame
    {
        0% {transform: rotate(0)}
        50% {transform: rotate(-30deg)}
        100% {transform: rotate(0)}
    }
    @-webkit-keyframes iconFrame
    {
        0% {transform: rotate(0)}
        50% {transform: rotate(-30deg)}
        100% {transform: rotate(0)}
    }
</style>
