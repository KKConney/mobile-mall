<template>
    <div>
        <van-nav-bar @click-left="goLast(type)" :title="title" :left-arrow="showLeftArrow" left-text="" fixed>

        </van-nav-bar>
    </div>
</template>
<script>
import { NavBar, Icon } from 'vant';
export default {
	name: 'Header',
    components: {
        [NavBar.name]: NavBar,
        [Icon.name]: Icon
    },
    props: {
        title: String,
        type: String,
        showLeftArrow: Boolean
    },
    data() {
        return {

        }
    },
    methods: {
        goHome() {
            this.$router.push({path: '/'})
        },
        goLast(type) {
            if (type === 'category') {
                this.$router.push({path: '/'})
            } else {
                this.$router.go(-1);
            }

        }
    }
}
</script>
<style lang="scss">
    .van-nav-bar {
        height: 50px;
    }
    .van-nav-bar .van-icon {
        color: #555;
    }
</style>
