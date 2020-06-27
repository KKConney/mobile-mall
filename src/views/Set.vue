<template>
    <div class="container">
        <Header title="账户设置" :showLeftArrow="true"></Header>
        <div class="content-wrapper">
            <div class="block">
                <van-button type="default" block @click="handleLoginOut">退出</van-button>
            </div>
        </div>
    </div>
</template>
<script>
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
	import Utils from '@/utils/common.js'
    import Header from '@/components/Header'
    import { Icon, Button, Toast } from 'vant';
    export default {
        components: {
            Header,
            [Icon.name]: Icon,
            [Button.name]: Button,
            [Toast.name]: Toast,
        },
        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {
            this.setNavBar(false);
        },
        methods: {
            ...mapActions({
                setNavBar: 'common/setNavBar'
            }),

            handleLoginOut() {
                Utils.local_remove('userInfo');
                Utils.local_remove('cart');
                Utils.local_remove('good');
                this.$router.push({path: '/mine'});
                window.location.reload();
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
</style>
