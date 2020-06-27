<template>
    <div>
        <van-grid :border="false" v-if="navList.length">
            <van-grid-item v-for="(item, index) in navList" :key="index">
                <van-image :src="item.icon" />
                <span>{{item.desc}}</span>
            </van-grid-item>
        </van-grid>
        <img v-else src="../../../assets/images/nav.svg" alt="">
    </div>
</template>
<script>
import { Grid, GridItem, Image } from 'vant';
export default {
	name: 'Nav',
    components: {
	    [Grid.name]: Grid,
	    [GridItem.name]: GridItem,
	    [Image.name]: Image,
    },
    props: {
	    navList: Array
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";
.mini-nav /deep/ .van-grid-item {
    flex-basis: 33.3333%!important;
}
/deep/ .van-grid-item__content {
    padding: 14px 8px;
    .van-grid-item__text {
        font-size: 14px;
    }
    img {
        width: 2rem;
    }
    span {
        display: inline-block;
        margin-top: 5px;
        font-size: 12px;
        color: #888;
    }
}
/deep/ .van-grid-item__icon+.van-grid-item__text {
    margin-top: 0px;
}
</style>
