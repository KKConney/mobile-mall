<template>
    <div>
        <header class="home-header">
            <div class="left">
                <van-icon class="logo" name="goods-collect" v-if="userInfo"/>
                <span @click="handleClickLeft" v-if="!userInfo">登录</span>
            </div>
            <van-search placeholder="请输入搜索关键词" @click="handleSearchFocus"/>
            <div class="right">
                <van-icon name="bars" @click="handleClickRight"/>
            </div>
        </header>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import { Search, Icon } from 'vant';
export default {
	name: 'THeader',
    components: {
        [Search.name]: Search,
        [Icon.name]: Icon,
    },
    data() {
        return {
            value: ''
        }
    },
    mounted() {

    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    methods: {
        handleClickLeft() {
            // this.$router.push({path: '/login'})
            this.$emit('login')
        },
        handleSearchFocus() {
            this.$router.push({path: '/search'})
        },
        handleClickRight() {
            this.$router.push({path: '/category/'})
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";
header.home-header {
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    background: #f3f4f5;
    display: flex;
    justify-content: space-between;
    .left, .right {
        display: flex;
        padding: 0 .6rem;
        align-items: center;
        font-size: .8rem;
    }
    .logo {
        color: $theme-color;
        font-size: 1.4rem;
        animation: iconFrame ease-in .3s;
    }
    .right {
        font-size: 1rem;
    }
    .van-search {
        display: flex;
        flex: 1;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        padding: 8px 0;
        background: none;
        .van-search__content {
            border: 1px solid #dbdbdb;
            border-radius: 30px;
        }
        .van-cell {
            line-height: 22px;
        }
    }
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
