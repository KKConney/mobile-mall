<template>
  <div id="app" style="">
    <transition name="slide">
      <router-view ></router-view>
    </transition>
    <Footer v-if="navBarFlag"></Footer>
    <Loading v-show="pageLoading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Footer from '@/components/Footer'
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Loading,
    Footer
  },
  mounted() {

  },
  computed: {
    ...mapGetters(['pageLoading', 'navBarFlag'])
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "assets/mixin.scss";
@import "assets/border.css";
  html, body {
    background: rgb(243, 244, 245);
    height: 100%;
    #app {
      overflow-x: hidden;
      height: 100%;
    }
  }
.slide-enter-active {
  transition: all .5s ease;
}
.slide-leave-active {
  /*transition: all .5s ease;*/
}
.slide-enter, .slide-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  /*transform: translateX(-10px);*/
  transform: translateX(15px);
  opacity: 0;
}
</style>
