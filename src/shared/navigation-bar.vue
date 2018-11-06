<template>
  <div id="navigation-bar"
       class="flex p-f bg-w w100 testing"
       :class="{'pd':!isHomePage,'home-color':isHomePage}">
    <div class="logo" :class="{'home-logo':isHomePage,'page-logo':!isHomePage}"></div>
    <div class="nav-box flex">
      <div class="fl-1 t-c row-c" v-for="(router) in navs" :key="router.id">
        <router-link :to="router.path">{{router.info}}</router-link>
      </div>
    </div>
    <div class="action-box center">
      <div class="search center c-p">
        <div class="search-ic in-b"></div>
      </div>
      <div class="msg pd-8 col-c t-hover">
        <div class="msg-ic in-b"></div>
      </div>
      <div class="login flex">
        <div class="sign-in fz-16 p-l t-hover">登录</div>
        <div class="fz-16">/</div>
        <div class="sign-up fz-16 p-r t-hover">注册</div>
      </div>
      <div class="lang flex">
        <div class="ch fz-16 p-l t-hover">CH</div>
        <div class="fz-16">/</div>
        <div class="en fz-16 p-r t-hover">EN</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {PageRoutes} from "../public/enums/page-routes"

  /**
   * 导航栏公用组件
   *
   * 1.全站顶部导航栏
   * @input isHomePage 首页导航局部样式控制
   * @output loginOut 登出
   */
  export default {
    name: "navigation-bar",
    data() {
      return {
        navs: [], //页面路由数据列表
      }
    },
    props: {
      isHomePage: { //首页导航局部样式控制
        type: Boolean,
        default: false
      }
    },
    created() {
      this.navs = PageRoutes.homeNavs;
    }
  }
</script>
<style lang="stylus">
  #navigation-bar
    align-items center
    height: 50px
    justify-content space-between
    top: 0
    left: 0
    padding 0 10px
    color #333
    bg-color(#fff)
    .logo
      width: 75px
      height: 23px
    .nav-box
      width: 460px
      height: 100%
      div
        a
          display flex
          height 100%
          line-height $navHeight
    .action-box
      color #999
      .search
        width: 30px
        height: 18px
        background-color #DCDCDC
        opacity .7
        border-radius 9px
        margin: 2px 8px 0 0;
        .search-ic
          width: 10px
          height: 10px
          bg-img('../assets/images/fireworks/shouye/shouye/gnsy_12.png')
      .msg
        background-color #DCDCDC
        .msg-ic
          width: 10px
          height: 10px
          bg-img('../assets/images/fireworks/shouye/shouye/gnsy_14.png')
      .p-l
        padding 0 2px 0 8px
      .p-r
        padding 0 8px 0 2px
      .pd-8
        padding: 4px 8px
      .mr
        margin-right: 16px
    .home-logo
      bg-img('../assets/images/fireworks/shared/logo.png')
    .page-logo
      bg-img('../assets/images/fireworks/shared/logo_b.png')

  .home-color
    color #fff !important
    a
      color #fff
</style>
