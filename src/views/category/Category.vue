<template>
    <div class="container">
        <Header type="category" title="商品分类" :showLeftArrow="true"></Header>
        <div class="indicator-wrapper">
            <Left :sideData="sideItemList"></Left>
            <Right :rightData="sideItemList"></Right>
        </div>
    </div>
</template>
<script>
	import Header from '@/components/Header'
    import Left from './components/Left'
    import Right from './components/Right'
	import {mapState, mapGetters, mapActions} from 'vuex'
	export default {
		name: 'Category',
		components: {
			Header,
			Left,
			Right
        },
		data() {
			return {
				sideItemList: []
			}
		},
		created() {
            this.initPageData();
		},
		mounted() {
            this.setNavBar(false)
		},
		methods: {
			...mapActions({
                setNavBar: 'common/setNavBar'
            }),
			initPageData() {
				this.$http.get('/category').then(res => {
					this.sideItemList = res.data.category
				})

			}
		}
	}
</script>
<style lang="scss" scoped>
    .container {
        height: 100%;
        .indicator-wrapper {
            position: absolute;
            display: flex;
            bottom: 0;
            top: 50px;
            width: 100%;
        }
    }
</style>
