<template>
    <div class="container">
        <Header title="填写订单" :showLeftArrow="true"></Header>
        <div class="content-wrapper" v-if="!goodData">
            <div class="address">
                <ul class="address-list">
                    <li class="address-li">
                        <div>
                            <div><h1>令狐冲 18928765273</h1></div>
                            <div class="bt"><van-icon name="location-o" /><span class="van-ellipsis">华山之巅</span></div>
                        </div>
                        <van-icon name="arrow" />
                    </li>
                </ul>
            </div>

            <div class="block">
                <van-cell-group>
                    <van-cell title="支付方式" value="在线支付" is-link/>
                </van-cell-group>
            </div>

            <div class="block" v-if="cartData.length>0">
                <div class="card-goods" >
                    <div v-for="(item,index) in cartData" :key="index">
                        <div class="card-goods__item">
                            <van-card
                                    :price="item.price * item.count"
                                    :desc="item.spec"
                                    :title="item.goodName"
                                    class="goods-card"
                                    :thumb="item.imgUrl"
                            >
                                <template #price>
                                    <span class="van-card__price-currency">￥</span>
                                    <span class="van-card__price-integer">{{item.price * item.count | formatPrice}}</span>
                                </template>
                            </van-card>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block">
                <van-cell-group>
                    <van-cell title="发票" value="个人" is-link/>
                    <van-cell title="优惠券" value="无可用" is-link/>
                    <van-cell title="礼品卡" value="无可用" is-link/>
                </van-cell-group>
            </div>

            <div class="block">
                <van-cell-group >
                    <van-cell title="商品金额" :value="priceTotalFormat(totalPrice)" />
                    <van-cell value-class="red" title="运费" :value="'-' + priceTotalFormat(freight)" />
                    <van-cell value-class="red" title="优惠券" :value="'-' + priceTotalFormat(coupon)" />
                    <van-cell value-class="red" title="礼品卡" :value="'-' + priceTotalFormat(gitCard)" />
                </van-cell-group>
            </div>
        </div>
        <div class="content-wrapper" v-else>
            <div class="address">
                <ul class="address-list">
                    <li class="address-li">
                        <div>
                            <div><h1>令狐冲 18928765273</h1></div>
                            <div class="bt"><van-icon name="location-o" /><span class="van-ellipsis">华山之巅</span></div>
                        </div>
                        <van-icon name="arrow" />
                    </li>
                </ul>
            </div>

            <div class="block">
                <van-cell-group>
                    <van-cell title="支付方式" value="在线支付" is-link/>
                </van-cell-group>
            </div>

            <div class="block" v-if="goodData">
                <div class="card-goods" >
                    <div class="card-goods__item">
                        <van-card
                                :price="goodData.price"
                                :desc="goodData.spec"
                                :title="goodData.goodName"
                                class="goods-card"
                                :thumb="goodData.imgUrl"
                        >
                            <template #price>
                                <span class="van-card__price-currency">￥</span>
                                <span class="van-card__price-integer">{{goodData.price | formatPrice}}</span>
                            </template>
                        </van-card>
                    </div>
                </div>
            </div>

            <div class="block">
                <van-cell-group>
                    <van-cell title="发票" value="个人" is-link/>
                    <van-cell title="优惠券" value="无可用" is-link/>
                    <van-cell title="礼品卡" value="无可用" is-link/>
                </van-cell-group>
            </div>

            <div class="block">
                <van-cell-group >
                    <van-cell title="商品金额" :value="priceTotalFormat(goodData.price)" />
                    <van-cell value-class="red" title="运费" :value="'-' + priceTotalFormat(freight)" />
                    <van-cell value-class="red" title="优惠券" :value="'-' + priceTotalFormat(coupon)" />
                    <van-cell value-class="red" title="礼品卡" :value="'-' + priceTotalFormat(gitCard)" />
                </van-cell-group>
            </div>
        </div>
        <van-submit-bar v-if="!goodData" :price="priceFormat(totalPrice)" button-text="提交订单" @submit="onSubmit" />
        <van-submit-bar v-else :price="priceFormat(goodData.price)" button-text="提交订单" @submit="onSubmit" />
    </div>
</template>
<script>
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
	import Utils from '@/utils/common.js'
    import Header from '@/components/Header'
    import { Icon, Cell, CellGroup, Card, SubmitBar, Toast } from 'vant';
    export default {
        components: {
            Header,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Card.name]: Card,
            [SubmitBar.name]: SubmitBar,
            [Toast.name]: Toast,
        },
        data() {
            return {
                freight: '',
                coupon: '',
                gitCard: ''
            }
        },
        computed: {
            ...mapGetters(['cartData', 'goodData', 'totalPrice']),
            // orderData() {
            //     if (this.goodData) {
            //         return this.goodData
            //     }
            // }
        },
        filters: {
            formatPrice(price) {
                return Utils.priceFilter(price);
            },
        },
        mounted() {
            this.setNavBar(false);
            console.log(this.goodData);
        },
        destroyed() {
            this.REMOVE_ORDER(null)
        },
        methods: {
            ...mapActions({
                setNavBar: 'common/setNavBar'
            }),

            ...mapMutations({
                REMOVE_ORDER: 'good/REMOVE_ORDER'
            }),

            priceTotalFormat(price) {
                return '￥' + Utils.priceFilter(price);
            },

            priceFormat(price) {
                return price;
            },

            onSubmit() {
                Toast('去支付~');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        height: 100%;
        .block {
            margin-top: .5rem;
            .red {
                color: #FF0036;
            }
        }
        .content-wrapper {
            position: absolute;
            padding-bottom: 60px;
            top: 50px;
            width: 100%;
        }
        .card-goods {
            background-color: #fff;

            .card-goods__item {
                padding: 0 15px;
                position: relative;
                background-color: #fff;

                /deep/ .van-checkbox__label {
                    width: 100%;
                    height: auto;
                    padding: 0 15px 0 30px;
                    box-sizing: border-box;
                    background-color: #fff;
                }

                /deep/ .van-checkbox__icon {
                    top: 50%;
                    left: 15px;
                    z-index: 1;
                    font-size: 18px;
                    position: absolute;
                    margin-top: -10px;
                }

                .van-card__price {
                    color: #f44;
                }
                    .goods-card {
                    background-color: #fff;
                    padding: 15px 0px;
                    .van-image {
                        box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
                        border-radius: 8px;
                    }
                    .van-card__title {
                        /*font-size: 14px;*/
                        display: block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .van-card__thumb {
                        width: 5rem;
                        height: 5rem;
                    }
                    .van-card__content {
                        min-height: 5rem;
                    }
                }
            }
        }
        .van-submit-bar {
            box-shadow: 0 3px 8px rgba(0, 0, 0, .5);
        }
    }
    .address {
        background: #fff;
        .address-list {
            position: relative;
            .address-li {
                position: relative;
                display: flex;
                justify-content: center;
                padding: .8rem 1rem;
                div {
                    h1 {
                        font-size: 14px;
                        color: #333;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        position: relative;
                    }
                    font-size: 12px;
                    color: #888;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    position: relative;
                    .bt {
                        display: flex;
                        align-items: center;
                        i {
                            margin-right: 5px;
                        }
                        span {
                            width: 100%;
                        }
                    }
                }
                i {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
                background: url(../../assets/images/info_border.png) -7px bottom repeat-x;
                background-size: 44px 2px;
            }
        }
    }
</style>
