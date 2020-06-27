<template>
    <div style="height: 100%">
        <transition name="slide-up">
            <form action="/" v-if="showSearch">
                <van-search
                        ref="search"
                        shape="round"
                        v-model="value"
                        show-action
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                        @focus="onFocus"
                        @cancel="onCancel"
                ></van-search>
            </form>
        </transition>
        <transition name="slide-down">
            <div v-if="showResult" class="search-result van-hairline--top">
                <van-empty image="search" description="暂无内容" />
            </div>
        </transition>
    </div>
</template>
<script>
import { Search, Icon, Empty } from 'vant';
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    name: 'Search',
    components: {
        [Search.name]: Search,
        [Icon.name]: Icon,
        [Empty.name]: Empty
    },
    data() {
        return {
            value: '',
            showSearch: false,
            showResult: false
        }
    },
    mounted() {
        this.showSearch = true;
        this.showResult = true;
        this.$nextTick(() => {
            this.$refs.search.getElementsByTagName('input')[0].focus()
        })
        this.setNavBar(false)
    },
    computed: {

    },
    methods: {
        ...mapActions({
            setNavBar: 'common/setNavBar'
        }),
        onSearch() {

        },
        onFocus() {

        },
        onCancel() {
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .van-search {
        position: fixed;
        width: 100%;
        padding: 8px 12px;
    }
    .search-result {
        position: absolute;
        display: flex;
        background: #fff;
        bottom: 0;
        top: 50px;
        width: 100%;
        .van-empty {
            width: 100%;
        }
    }
    .slide-up-enter-active {
        transition: all .5s ease;
    }
    .slide-up-leave-active {
        /*transition: all .5s ease;*/
    }
    .slide-up-enter, .slide-up-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(-50px);
        opacity: 0;
    }

    .slide-down-enter-active {
        transition: all .5s ease;
    }
    .slide-down-leave-active {
        /*transition: all .5s ease;*/
    }
    .slide-down-enter, .slide-down-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(50px);
        opacity: 0;
    }
</style>
