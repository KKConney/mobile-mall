<template>
    <transition name="van-slide-up">
        <div class="login-container">
            <van-nav-bar @click-left="onClickLeft" title="" left-text="" fixed>
                <template #left>
                    <van-icon name="cross" size="18" />
                </template>
            </van-nav-bar>
            <div class="login-box">
                <van-form @submit="onSubmit">
                    <van-field
                            v-model="username"
                            name="用户名"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                            v-model="password"
                            type="password"
                            name="密码"
                            label="密码"
                            placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 3rem 0;">
                        <van-button class="login-btn" round block type="info" native-type="submit" @click="handleLogin">
                            立即登录
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
    </transition>
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import { NavBar, Icon, Form, Field, Button, Toast } from 'vant';
export default {
    name: 'Login',
    components: {
	    [NavBar.name]: NavBar,
	    [Icon.name]: Icon,
	    [Form.name]: Form,
	    [Field.name]: Field,
	    [Button.name]: Button,
	    [Toast.name]: Toast
    },
    data() {
        return {
	        showLogin: false,
	        username: '',
	        password: '',
        }
    },
    mounted() {
    	this.showLogin = true;
        this.setNavBar(false)
    },
    computed: {

    },
    methods: {
        ...mapActions({
            setNavBar: 'common/setNavBar'
        }),
        ...mapMutations({
            SET_USERINFO: 'user/SET_USERINFO'
        }),
        onSubmit(values) {
            console.log('submit', values);
        },
        onClickLeft() {
            this.$emit('close');
        },
        handleLogin() {
            if (this.username && this.password) {
                this.$http.post('/login', {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    if (res.status === 200) {
                        Toast.success('登录成功！');
                        let userInfo = res.data.userInfo
                        this.SET_USERINFO(userInfo);
                        this.$emit('close');
                    }
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .login-container {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }
    .van-nav-bar {
        height: 50px;
    }
    .van-nav-bar .van-icon {
        color: #555;
    }
    .login-box {
        background-color: #fff;
        justify-content: center;
        height: 100%;
        display: flex;
        align-items: center;
        .van-form {
            width: 90%;
            .van-cell {
                margin-top: 1rem;
                &:first-child {
                    margin-top: 0;
                }
            }
            .login-btn {
                background: #FF0036;
                border: none;
                box-shadow: 0px 2px 10px rgba(235, 51, 64, 0.5);
            }
        }
    }
</style>
