<template>
    <div>
        <div class="goods" v-if="goodDetail">
            <van-swipe class="goods-swipe" :autoplay="3000">
                <van-swipe-item v-for="(img, index) in goodDetail.imgUrlList" :key="index" @click="handleImgView(goodDetail.imgUrlList)">
                    <img :src="img" >
                </van-swipe-item>
            </van-swipe>

            <van-cell-group class="first-group">
                <van-cell>
                    <div class="goods-top">
                        <span class="goods-price">{{ goodDetail.price/100 | formatPrice }}</span>
                    </div>
                    <div class="goods-title">{{ goodDetail.name }}</div>
                    <p class="goods-sm">618提前购1件9折，2件8折，3件7折，提前享受618优惠活动！7天无理由退货。</p>
                </van-cell>
                <van-cell icon="label-o" class="goods-express">
                    <van-col >{{ goodDetail.express }}</van-col>
                </van-cell>
            </van-cell-group>

            <van-cell-group class="goods-cell-group">
                <!-- 规格 -->
                <van-field
                        readonly
                        clickable
                        name="picker"
                        :value="spec"
                        label="选择"
                        placeholder="商品规格"
                        @click="showSku = true, footerClick = false"
                        is-link
                ></van-field>

                <!-- 领券 -->
                <van-field
                        readonly
                        clickable
                        name="picker"
                        :value="coupon"
                        label="领券"
                        placeholder="立即领券"
                        @click="showCouponPicker = true"
                        is-link
                ></van-field>


                <!-- 配送 -->
                <van-field
                        readonly
                        clickable配送这
                        name="picker"
                        :value="delivery"
                        label="配送"
                        placeholder="配送地"
                        @click="showDeliveryPicker = true"
                        is-link
                ></van-field>

                <!-- 运费 -->
                <van-field
                        readonly
                        name="picker"
                        value="店铺单笔订单不满40元，收运费7元"
                        label="运费"
                        placeholder="运费"
                ></van-field>
            </van-cell-group>

            <van-cell-group class="goods-cell-group">
                <van-cell title="商品评价" is-link @click="sorry" value="查看详情"/>
            </van-cell-group>

            <van-cell-group>
                <van-empty description="商品详情" />
            </van-cell-group>
        </div>
        <van-skeleton v-else class="detail-skeleton" :row="5" :row-width="rowsWidth"></van-skeleton>


        <!-- sku 商品规格 -->
        <van-sku
                ref="goodSku"
                v-if="goodDetail"
                v-model="showSku"
                :sku="goodDetail.skuData.sku"
                :goods="goodDetail.skuData.goods"
                :goods-id="goodDetail.skuData.goodsId"
                :quota="goodDetail.skuData.quota"
                :quota-used="goodDetail.skuData.quota_used"
                :hide-stock="goodDetail.skuData.sku.hide_stock"
                show-add-cart-btn
                reset-stepper-on-hide
                :initial-sku="goodDetail.skuData.initialSku"
                :close-on-click-overlay="closeOnClickOverlay"
                @stepper-change="onStepperChange"
                @sku-selected="onSkuSelect"
        >
            <!-- 自定义 sku-header-price -->
            <template #sku-header-price="props">
                <div class="van-sku__goods-price">
                  <span class="van-sku__price-symbol">￥</span
                  ><span class="van-sku__price-num">{{ props.price | formatPrice }}</span>
                </div>
            </template>

            <template #sku-actions="props">
                <div class="van-sku-actions">
                    <van-button v-if="!footerClick" square size="large" type="warning" @click="onAddCartClick">
                        加入购物车
                    </van-button>
                    <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
                    <van-button v-if="!footerClick" square size="large" type="danger" @click="onBuyClick">
                        立即购买
                    </van-button>
                    <van-button
                            v-if="footerClick"
                            square
                            size="large"
                            type="danger"
                            @click="skuType===1? onAddCartClick() : onBuyClick()"
                    >
                        确定
                    </van-button>
                </div>
            </template>

        </van-sku>
        <van-popup round v-model="showCouponPicker" position="bottom" :style="{ height: '40%' }">
            <h1 class="coupon-title van-hairline--bottom">优惠券</h1>
            <div class="coupon-list">
                <div @click="handleCouponSelect(code)" class="coupon-code" v-for="(code, index) in couponData" :key="index">
                    <div class="left">
                        <h1><span>￥</span>{{code.amount}}</h1>
                        <p>{{code.desc}}</p>
                        <p>{{code.sm}}</p>
                    </div>
                    <div class="right">立即领取</div>
                </div>
            </div>
        </van-popup>
        <van-popup @open="handleAddressOpen" v-model="showDeliveryPicker" round position="bottom" :style="{ height: '40%' }">
            <h1 class="coupon-title van-hairline--bottom">配送至</h1>
            <div class="coupon-list">
                <van-radio-group v-model="addressValue">
                    <van-radio @click="handleAddressSelect(item)" :name="item.value" checked-color="#FF0036" v-for="(item,index) in addressList" :key="index">{{item.name}}</van-radio>
                </van-radio-group>
            </div>
        </van-popup>
    </div>
</template>

<script>
	import {
		Tag,
		Col,
		Button,
		Icon,
		Cell,
		CellGroup,
		Swipe,
		Toast,
		SwipeItem,
		GoodsAction,
		GoodsActionIcon,
		GoodsActionButton,
		Field,
		Picker,
		ImagePreview,
		Popup,
		Empty,
		Form,
		Skeleton,
		RadioGroup,
		Radio,
		Sku,
	} from 'vant';
	import {mapState, mapGetters, mapActions} from 'vuex'
	import Utils from '@/utils/common.js'
	export default {
		components: {
			[Tag.name]: Tag,
			[Col.name]: Col,
			[Button.name]: Button,
			[Icon.name]: Icon,
			[Field.name]: Field,
			[Popup.name]: Popup,
			[Picker.name]: Picker,
			[Form.name]: Form,
			[Cell.name]: Cell,
			[Empty.name]: Empty,
			[ImagePreview.name]: ImagePreview,
			[CellGroup.name]: CellGroup,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[GoodsAction.name]: GoodsAction,
			[GoodsActionIcon.name]: GoodsActionIcon,
			[GoodsActionButton.name]: GoodsActionButton,
			[Skeleton.name]: Skeleton,
			[Sku.name]: Sku,
			[RadioGroup.name]: RadioGroup,
			[Radio.name]: Radio,
			[Toast.name]: Toast
		},

		data() {
			return {

				rowsWidth: ['100%', '20%', '80%', '100%', '50%'],

				showLogin: false,

				showCouponPicker: false,
				showDeliveryPicker: false,

				showSku: false,
				footerClick: false,
                skuType: '',
				closeOnClickOverlay: true,

				coupon: '',
				delivery: '',
				addressValue: '1',

				couponData: [
					{name: '满400减50', amount: 50, desc: '订单金额满400元可使用', sm: '有效期至2018.11.11 - 2018.12.12'},
					{name: '满500减100',amount: 100, desc: '订单金额满500元可使用', sm: '有效期至2018.11.11 - 2018.12.12'},
				],
				addressList: []
			};
		},

        props: {
            goodDetail: Object,
            initialSkuData: Object,
            count: Number,
            spec: String
        },

		watch: {
			showSku(val) {
				let skuData = this.$refs.goodSku.getSkuData();
				this.$emit('handleSkuData', skuData)
			}
		},

		async mounted() {
			this.setNavBar(false);
			// this.getData(this.$route.params.id);
			await this.handleAddressOpen();
			this.delivery = this.addressList[0].name;

		},

		filters: {
			formatPrice(price) {
				// return Utils.priceFilter(price);
				return Utils.priceFormat(price, 2);
			},
		},

		computed: {

		},

		methods: {
			...mapActions({
				setNavBar: 'common/setNavBar'
			}),

			handleImgView(imgList) {
				ImagePreview(imgList);
			},

            handleSku(type) {
                this.skuType = type;
                this.showSku = true;
                this.footerClick = true;
            },

			// --商品 sku 操作
			onStepperChange(num) {
				this.$emit('handleStepper', num);
			},

			onSkuSelect() {
				let skuData = this.$refs.goodSku.getSkuData();
				this.$emit('handleSkuData', skuData)
			},

			onBuyClick() {
				this.$emit('handleAddOrder');
				this.showSku = false
			},

			onAddCartClick() {
				this.$emit('handleAddCart');
				this.showSku = false
			},

			handleCouponSelect(coupon) {
				this.coupon = coupon.name;
				this.$emit('handleCoupon', this.coupon);
				this.showCouponPicker = false;
			},

			async handleAddressOpen() {
				const temp = await this.getAddress();
				this.addressList = [];
				temp.forEach(obj => {
					let addObj = {};
					let addStr = `${obj.receiverProvince + obj.receiverCity + obj.receiverDistrict + obj.receiverAddress}`;
					addObj.value = obj.addressId;
					addObj.name = addStr;
					this.addressList.push(addObj);
				})
			},

			async getAddress() {
				let temp = null;
				await this.$http.get('/address').then(res => {
					if (res.status === 200) {
						temp =  res.data.addresses;
					}
				})
				return temp;
			},

			handleAddressSelect(address) {
				this.delivery = address.name;
				this.showDeliveryPicker = false;
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
    .van-overlay {
        /*background-color: rgba(0,0,0,.1);*/
    }
    .van-field__control {
        font-size: 12px;
    }
    .van-goods-action {
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
