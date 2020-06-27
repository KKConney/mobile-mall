<template>
    <div class="left" ref="sideBar">
        <van-sidebar v-model="activeKey" ref="sideBarBody">
            <van-sidebar-item
                    ref="sideBarItem"
                    v-for="(item, index) in sideData"
                    :title="item.cate"
                    :key="index"
                    :to="/category/ + index"
                    @click="handleSidebarItemClick"></van-sidebar-item>
        </van-sidebar>
    </div>
</template>
<script>
import { Sidebar, SidebarItem } from 'vant';
export default {
	props: {
		sideData: Array
    },
    data() {
        return {
            activeKey: 0,
        }
    },
    mounted() {

    },
    components: {
        [Sidebar.name]: Sidebar,
        [SidebarItem.name]: SidebarItem
    },
    methods: {
        handleSidebarItemClick(index) {
            this.initLayout(index);
        },
        initLayout(index) {
            let items = this.$refs.sideBarItem;
            let itemTop = items[index].$el.offsetTop;
            let itemHeight = items[0].$el.offsetHeight;
            let sideBarHeight = this.$refs.sideBar.offsetHeight;
            let top = itemTop - (sideBarHeight / 2) + (itemHeight / 2);

            this.$refs.sideBar.scrollTop = top
        }
    }
}
</script>
<style lang="scss" scoped>
    .left {
        .van-sidebar {

        }
        touch-action: none;
        width: 85px;
        background: #f5f5f5;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 0;
        }
        transition: all 1s;
        .van-sidebar-item {
            text-align: center;
        }
    }
</style>
