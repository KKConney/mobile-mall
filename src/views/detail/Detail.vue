<template>
    <div >
        <div class="go-back" :class="scrollFlag && bgFlag?'' : 'white-back'">
            <van-icon @click="handleBack" name="arrow-left" />
        </div>

        <van-tabs @click="handleTabClick" ref="tabHeader" :class="scrollFlag && bgFlag?'tab-scroll' : ''" v-model="active" swipeable lazy-render :background="background">
            <van-tab title="商品">
                <Good ref="_good"
                      @handleSkuData="handleValue"
                      @handleStepper="onStepperChange"
                      @handleAddCart="onAddCartClick"
                      @handleCoupon="onSelectCoupon"
                      @handleAddOrder="onAddOrder"
                      :goodDetail="goodDetail"
                      :initialSkuData="initialSkuData"
                      :spec="spec"
                      :count="count"></Good>
            </van-tab>
            <van-tab title="详情">
                <Info ref="_info" :goodDetail="goodDetail"></Info>
            </van-tab>
            <van-tab title="评价">
                <Evaluation ref="_evaluation" :goodDetail="goodDetail"></Evaluation>
            </van-tab>
        </van-tabs>

        <DetailFooter @handleAdd="handleSku" @handleBuy="handleSku" :goodDetail="goodDetail" :spec="spec" :count="count"></DetailFooter>

        <Login v-show="showLogin" @close="showLogin=false"></Login>
    </div>
</template>
<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
	import { Toast, Icon, tabs, tab } from 'vant';
	import Good from './components/Good'
	import Evaluation from './components/Evaluation'
	import Info from './components/Info'
	import DetailFooter from './components/DetailFooter'
	import Login from '@/views/Login'
	export default {
		name: 'Header',
		components: {
			[Toast.name]: Toast,
			[Icon.name]: Icon,
			[tabs.name]: tabs,
			[tab.name]: tab,
			Good,
			Evaluation,
			Info,
			DetailFooter,
			Login
		},
		props: {

		},
		data() {
			return {
				active: 0,
				background: '',
				bgFlag: true,
				scrollFlag: true,
				showLogin: false,

				goodDetail: null,
				initialSkuData: {},
				skuMap: new Map(),
				spec: '',
				coupon: '',
				count: 0, // 当前商品选择数
			}
		},
		mounted() {
			this.getData(this.$route.params.id);
			this.headerScroll();
		},
		computed: {
			...mapGetters(['userInfo']),
		},
		methods: {
			...mapActions({
				addCart: 'cart/addCart'
			}),

			...mapActions({
				addOrder: 'good/addOrder'
			}),
			getData(id) {
				this.$http({
					method: 'get',
					url: '/query',
					data: {
						id: id
					}
				}).then(res => {
					if (res.status == 200) {
						this.goodDetail = res.data.req;
						this.initialSkuData = this.goodDetail.skuData.initialSku;
						this.setMap(this.goodDetail.skuData.sku.tree);

						this.handleValue(this.initialSkuData);
					}
				})
			},

			handleValue(obj) {
				let tmpArr = [];
				if (obj.selectedSkuComb) {
					tmpArr.push(this.skuMap.get(obj.selectedSkuComb.s1));
					tmpArr.push(this.skuMap.get(obj.selectedSkuComb.s2));
					tmpArr.push(obj.selectedNum);
					this.goodDetail.price = obj.selectedSkuComb.price;
				} else {
					tmpArr.push(this.skuMap.get(obj.s1));
					tmpArr.push(this.skuMap.get(obj.s2));
					tmpArr.push(obj.selectedNum);
				}

				this.count = obj.selectedNum;
				this.spec = tmpArr.join('，');
			},

			setMap(tree) {
				tree.forEach(k => {
					let v = k.v
					v.forEach(value => {
						this.skuMap.set(value.id, value.name);
					})
				})
			},

            // 商品 sku 操作
			onStepperChange(num) {
				this.count = num;
				this.goodDetail.skuData.initialSku.selectedNum = num;
			},

			onSelectCoupon(coupon) {
                this.coupon = coupon;
            },

            handleSku(type) {
				// type 底部按钮点击 弹出 sku 类型
                this.$refs._good.handleSku(type);
            },

			async onAddOrder() {
				if (!this.userInfo) {
					this.showLogin = true;
					return
				}
				let good = {
					id: this.goodDetail.id,
					goodName: this.goodDetail.name,
					imgUrl: this.goodDetail.imgUrlList[0],
					spec: this.spec.split('，').slice(0, 2).join('，'),
					coupon: this.coupon,
					price: this.goodDetail.price,
					count: this.count, // 添加单个商品数量属性
					check: true // 添加选中属性
				}
				await this.addOrder(good);
				this.$router.push({path: '/order'});
            },

			async onAddCartClick() {
				if (!this.userInfo) {
					this.showLogin = true;
					return
				}
				const curGoodDetail = {
					id: this.goodDetail.id,
					goodName: this.goodDetail.name,
					imgUrl: this.goodDetail.imgUrlList[0],
					spec: this.spec.split('，').slice(0, 2).join('，'),
					coupon: this.coupon,
					price: this.goodDetail.price,
					count: this.count, // 添加单个商品数量属性
					check: true // 添加选中属性
				}

				await this.addCart(curGoodDetail); // 向购物车添加数据
				Toast.success('已成功添加购物车！');
			},

			headerScroll() {
				this.background = 'rgba(255, 255, 255, 0)';
				window.addEventListener('scroll', () => {
					let scrollTop = this.$parent.$root.$el.scrollTop ;
					let opacity = 0;
					let percent = scrollTop / 100;

					if(scrollTop < 100){
						opacity = percent;
						this.bgFlag = true;
					}
					else{
						opacity = 1;
						this.bgFlag = false;
					}

					this.background = 'rgba(255, 255, 255,'+ opacity +')';
				}, true)
			},

			handleTabClick(active) {
				this.scrollFlag = active === 0
			},

			handleBack() {
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="scss">
    .go-back {
        position: fixed;
        z-index: 11;
        top: .56rem;
        left: .8rem;
        i {
            padding: .3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: rgba(0, 0, 0, .5);
            color: #fff;
        }
        &.white-back {
            i {
                background: none;
                color: #555;
            }
        }
    }
    .van-tabs {
        /*height: 50px;*/
        width: 100%;
        .van-tabs__nav {
            padding: 0 6rem 15px 6rem;
        }
        .van-tabs__wrap {
            width: 100%;
            position: fixed;
            z-index: 10;
            transition: all .3s;
            transform: translateY(0);
        }
        &.tab-scroll {
            .van-tabs__wrap {
                transform: translateY(-44px);
            }
        }
    }
</style>
