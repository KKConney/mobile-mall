<template>
    <div>
        <div class="good-list falls" v-if="goods.falls">
            <div class="top border-bottom good-title"><span>为您推荐</span></div>
            <ul class="falls-list">
                <li v-for="(item, index) in goods.falls" :key="index">
                    <router-link :to="{path: 'detail/'+ item.id}">
                        <img v-lazy='item.imgUrl' alt="">
                        <h1>{{item.name}}</h1>
                        <h2>￥{{item.price}} <em>￥{{item.oPrice}}</em></h2>
                        <div class="add-cart">
                            <van-icon name="shopping-cart-o" />
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Icon } from 'vant';
export default {
	name: 'Recommend',
    components: {
        [Icon.name]: Icon
    },
    props: {
        goods: Object
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";
.good-list {
    margin: 2.6%;
    background: #fff;
    border-radius: .4rem;
    &.falls {
        background: none;
        margin: 0 1.3%;
        .falls-list {
            overflow: hidden;
            li {
                width: 47.4%;
                margin: 0 1.3%;
                padding: .8rem;
                background: #fff;
                border-radius: .4rem;
                float: left;
                box-sizing: border-box;
                position: relative;
                margin-bottom: 2.6%;
                img {
                    width: 100%;
                    display: block;
                }
                h1 {
                    overflow: hidden;
                    display: -webkit-box;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    font-size: .8rem;
                    font-weight: normal;
                    color: #555;
                    margin-bottom: 0.5rem;
                }
                h2 {
                    margin: 0;
                    font-size: .4rem;
                    color: #f60;
                    em {
                        font-weight: normal;
                        text-decoration: line-through;
                        color: #ccc;
                    }
                }
                .add-cart {
                    width: 1.2rem;
                    height: 1.2rem;
                    text-align: center;
                    border-radius: 50%;
                    background: #555;
                    font-size: .4rem;
                    color: #fff;
                    position: absolute;
                    right: .8rem;
                    bottom: .8rem;
                    i {
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .hot-list {
        overflow: hidden;
        .hot-item {
            width: 50%;
            float: left;
            box-sizing: border-box;
            position: relative;
            padding: .8rem;
            .hot-desc, .hot-img {
                width: 50%;
                float: left;
            }
            h1 {
                color: #202020;
                font-size: .8rem;
                margin: 0;
                margin-top: 1.2rem;
                padding-bottom: .5rem;
            }
            h2 {
                margin: 0;
                font-size: .4rem;
                color: #f60;
                text-align: center;
            }
            p {
                color: #8e8e8e;
                font-size: .6rem;
                margin: 0;
                padding-bottom: .5rem;
            }
            em {
                font-weight: normal;
                text-decoration: line-through;
                color: #ccc;
            }
            img {
                width: 100%;
            }
            &:after {
                position: absolute;
                box-sizing: border-box;
                content: ' ';
                pointer-events: none;
                top: -50%;
                right: -50%;
                bottom: -50%;
                left: -50%;
                border: 0 solid #ebedf0;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
                z-index: 1;
                border-width: 0 1px 1px 0;
            }
        }
    }
    .top {
        height: 3rem;
        line-height: 3rem;
        &.good-title {
            font-size: 1rem;
            text-align: center;
            color: #555;
            span {
                position: relative;
                &:before {
                    top: -3px;
                    width: 3rem;
                    height: 1rem;
                    position: absolute;
                    left: -3.2rem;
                    content: '';
                    background: url('../../../assets/resources/title_left.png') no-repeat right top / contain;
                }
                &:after {
                    top: -3px;
                    width: 3rem;
                    height: 1rem;
                    right: -3.2rem;
                    position: absolute;
                    content: '';
                    background: url('../../../assets/resources/title_right.png') no-repeat left top / contain;
                }
            }
        }
    }
    .item-box {
        padding: 5px;
        display: flex;
        .item {
            justify-content: space-between;
            display: flex;
            flex: 1;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            padding: 5px;
            position: relative;
            div {
                width: 100%;
                img {
                    width: 100%;
                }
                h1 {
                    font-size: .5rem;
                    margin: 0;
                    color: #fff;
                    background: #ccc;
                    padding: 0 10px;
                    display: inline-block;
                    border-radius: 30px;
                    background: #8f51e7;
                }
                p {
                    font-size: .5rem;
                    color: #999;
                    margin: 5px 0;
                }
            }
            &:first-child h1 {
                background: #f3a340;
            }
            &:nth-child(2n) h1 {
                background: #e4344e;
            }
        }
    }
}
</style>
