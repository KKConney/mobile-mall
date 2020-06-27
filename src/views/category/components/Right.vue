<template>
    <div class="content">
        <div class="scroll-list" v-if="dataObj">
            <div class="list-img">
                <img :src="dataObj.cateImg" alt="">
            </div>
            <h2 class="list-title">{{dataObj.cate}}</h2>
            <div class="goods-list">
                <div class="item" v-for="(item, index) in dataObj.cateList" :key="index">
                    <div class="good-img"><img :src="item.imgUrl" alt=""></div>
                    <p class="good-name">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        rightData: Array
    },
    // 初始化 刷新页面时，无外部触发时， rightData 的 值 为空
    data() {
        return {
            defaultIndex: 0
        }
    },
    mounted() {
        this.$router.push({path: '/category/0'})
    },
    // watch: {
    //     $route(from, to) {
    //         if (from.params.index) {
    //             this.dataObj = this.rightData[from.params.index]
    //         }
    //     }
    // },
    computed: {
	    dataObj() {
		    return this.rightData[this.$route.params.index]

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
    .content {
        flex: 1;
        background: #fff;
        padding: .6rem;
        overflow-y: auto;
        .scroll-list {
            .list-img {
                img {
                    display: block;
                    width: 100%;
                }
            }
            .list-title {
                font-weight: normal;
                display: block;
                padding: .6rem 0;
                font-size: .86rem;
                margin: 0;
                color: #999;
            }
            .goods-list {
                overflow: hidden;
                .item {
                    width: 33.333%;
                    padding: .6rem 0;
                    float: left;
                    .good-img {
                        width: 60%;
                        margin: 0 auto;
                        img {
                            width: 100%;
                            display: block;
                        }
                    }
                    .good-name {
                        text-align: center;
                        font-size: .8rem;
                        color: #333;
                        margin: 0;
                        margin-top: .4rem;
                    }
                }
            }
        }
    }
</style>
