<template>
    <div>
        <div class="go-back" :class="bgFlag?'white-back' : ''">
            <van-icon @click="handleBack" name="arrow-left" />
        </div>
        <van-tabs ref="tabHeader" :class="bgFlag?'tab-scroll' : ''" v-model="active" animated swipeable lazy-render :background="background">
            <van-tab title="商品"></van-tab>
            <van-tab title="详情"></van-tab>
            <van-tab title="评价"></van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { Icon, tabs, tab } from 'vant';
export default {
	name: 'Header',
    components: {
        [Icon.name]: Icon,
        [tabs.name]: tabs,
        [tab.name]: tab
    },
    props: {

    },
    data() {
        return {
            active: 0,
            background: '',
            bgFlag: false
        }
    },
    mounted() {
        this.headerScroll();
    },
    methods: {
        headerScroll() {
            this.background = 'rgba(255, 255, 255, 0)';
            window.addEventListener('scroll', () => {
                let scrollTop = this.$parent.$root.$el.scrollTop ;
                let opacity = 0;
                let percent = scrollTop / 200;

                if(scrollTop < 200){
                    opacity = percent;
                    this.bgFlag = false;
                }
                else{
                    opacity = 1;
                    this.bgFlag = true;
                }

                this.background = 'rgba(255, 255, 255,'+ opacity +')';
            }, true)
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
        height: 50px;
        position: fixed;
        z-index: 10;
        width: 100%;
        .van-tabs__nav {
            padding: 0 6rem 15px 6rem;
        }
        .van-tabs__wrap {
            transition: all .3s;
            transform: translateY(-44px);
        }
        &.tab-scroll {
            .van-tabs__wrap {
                transform: translateY(0);
            }
        }
    }
</style>
