<template>
    <div>
        <van-tabbar class="footer" v-model="active" route :border="false">
            <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category/0" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
	components: {
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem,
    },
    data() {
        return {
            active: 0
        }
    }
}
</script>
<style lang="scss" scoped>
    .van-tabbar {
        /*height: 3.4rem;*/
        height: 50px;
        z-index: 10;
    }
    .footer {
        box-shadow: 1px 0 5px rgba(0, 0, 0, .1);
    }
</style>
