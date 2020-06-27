<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in swiperList" :key="index">
                <router-link to="">
                    <img :src="item.imgUrl" alt="">
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem, Image, Loading, Lazyload } from 'vant';
export default {
	name: 'Swiper',
    components: {
	    [Swipe.name]: Swipe,
	    [SwipeItem.name]: SwipeItem,
	    [Image.name]: Image,
	    [Loading.name]: Loading,
	    [Lazyload.name]: Lazyload
    },
    props: {
	    swiperList: Array
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";
.my-swipe {
    height: 10rem;
    .van-swipe-item {
        img {
            width: 100%;
            height: 100%;
        }
        color: #fff;
        font-size: 20px;
        /*height: 40vw;*/
        /*line-height: 40vw;*/
        text-align: center;
    }
}
</style>
