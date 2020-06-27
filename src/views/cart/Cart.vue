<template>
    <div class="container">
        <Header type="cart" title="购物车" :showLeftArrow="true"></Header>
        <div class="indicator-wrapper">
            <!--<div>
                <van-checkbox-group class="card-goods" v-model="checkedGoods" ref="checkboxGroup" v-if="cartData.length>0">
                    <van-swipe-cell v-for="(item,index) in cartData" :key="index">
                        <van-checkbox v-model="checked" class="card-goods__item" :name="item.id" @change="">
                            <van-card
                                    :price="item.price+'.00'"
                                    :desc="item.spec"
                                    :title="item.goodName"
                                    class="goods-card"
                                    :thumb="item.imgUrl"
                                    @click.stop="handleGoodClick(item.id)"
                            >
                            </van-card>
                        </van-checkbox>
                        <template>
                            <van-stepper v-model="item.count" disable-input input-width="20px" button-size="20px"/>
                        </template>
                        <template #right>
                            <van-button @click="handleDelete(item.id)" square text="删除" type="danger" class="delete-button" />
                        </template>
                    </van-swipe-cell>
                </van-checkbox-group>
            </div>-->
            <div class="card-goods" v-if="cartData.length>0">
                    <van-swipe-cell v-for="(item,index) in cartData" :key="index">
                        <van-checkbox v-model="item.check" class="card-goods__item" @change="check">
                            <van-card
                                    :price="item.price * item.count"
                                    :desc="item.spec"
                                    :title="item.goodName"
                                    class="goods-card"
                                    :thumb="item.imgUrl"
                                    @click.stop="handleGoodClick(item.id)"
                            >
                                <template #price>
                                    <span class="van-card__price-currency">￥</span>
                                    <span class="van-card__price-integer">{{item.price * item.count | formatPrice}}</span>
                                </template>
                            </van-card>
                        </van-checkbox>
                        <template>
                            <van-stepper v-model="item.count" disable-input input-width="20px" button-size="20px"/>
                        </template>
                        <template #right>
                            <van-button @click="handleDelete(item)" square text="删除" type="danger" class="delete-button" />
                        </template>
                    </van-swipe-cell>
            </div>
            <van-empty description="购物车是空的！" :image="require('@/assets/images/empty_cart.png')" v-else>
                <van-button @click="goHome" round size="small" type="danger" class="bottom-button">
                    赶快去逛逛
                </van-button>
            </van-empty>
        </div>
        <van-submit-bar v-if="cartData.length > 0" class="van-hairline--bottom" :price="priceFormat(totalPrice)" button-text="结算" @submit="onSubmit">
            <!-- 这里 使用 value，不用 v-model， 否则要在 computed 中做处理 -->
            <van-checkbox :value="checkAllState" @click="checkAll">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>
<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
	import Utils from '@/utils/common.js'
	import Header from '@/components/Header'
	import { Button, Checkbox, CheckboxGroup, SubmitBar, Card, SwipeCell, Stepper, Empty } from 'vant';
    export default {
        components: {
            Header,
            [Button.name]: Button,
            [SubmitBar.name]: SubmitBar,
            [Checkbox.name]: Checkbox,
            [CheckboxGroup.name]: CheckboxGroup,
            [Card.name]: Card,
            [SwipeCell.name]: SwipeCell,
            [Stepper.name]: Stepper,
            [Empty.name]: Empty,
        },
        data() {
            return {

            }
        },
        filters: {
            formatPrice(price) {
                return Utils.priceFilter(price);
            },
        },
        mounted() {
            this.setNavBar(false);
        },
        computed: {
            ...mapGetters(['cartData', 'checkAllState', 'totalPrice'])
        },
        methods: {
            ...mapActions({
                setNavBar: 'common/setNavBar'
            }),
            ...mapActions({
                deleteGood: 'cart/deleteGood'
            }),
            ...mapActions({
                checkChange: 'cart/checkChange'
            }),
            ...mapActions({
                checkAllChange: 'cart/checkAllChange'
            }),

            priceFormat(price) {
                return price;
            },

            check() {
                this.checkChange();
            },

            checkAll() {
                this.checkAllChange();
            },

            handleGoodClick(id) {
                this.$router.push({path: 'detail/'+ id})
            },
            handleDelete(item) {
                this.deleteGood(item)
            },
            onSubmit() {
                this.$router.push({path: '/order'})
            },
            goHome() {
                this.$router.push({path: '/'})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        height: 100%;
        .indicator-wrapper {
            position: absolute;
            padding-bottom: 50px;
            top: 50px;
            width: 100%;
        }
        .van-submit-bar {
            bottom: 0px;
        }
        .card-goods {
            background-color: #fff;

            .card-goods__item {
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
                    padding: 15px 0px 15px 10px;
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
        .van-swipe-cell {
            .van-stepper {
                position: absolute;
                right: 15px;
                bottom: 15px;
            }
            .delete-button {
                height: 100%;
            }
        }
        /deep/ .van-checkbox__icon {
            font-size: 18px;
        }
        .van-empty /deep/ .van-empty__image {
            width: 12rem;
            height: auto;
        }
        .bottom-button {
            width: 100px;
        }
        .van-submit-bar__bar {
            justify-content: space-between;
        }
    }
</style>
