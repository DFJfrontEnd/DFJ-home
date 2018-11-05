<template>
  <div id="navigation-bar" class="flex p-f bg-w w100" :class="{'pd':!isHomePage}">
    <div class="logo">logo图</div>
    <div class="nav-box flex">
      <div class="fl-1" v-for="(router) in navs" :key="router.id">
        <router-link :to="router.path">{{router.info}}</router-link>
      </div>
    </div>
    <div class="action-box">操作按钮列表</div>
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
</style>
