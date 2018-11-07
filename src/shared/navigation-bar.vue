<template>
  <div id="navigation-bar"
       class="flex p-f bg-w w100 testing"
       :class="{'home-color':isHomePage}">
    <div class="logo" :class="{'home-logo':isHomePage,'page-logo':!isHomePage}"></div>
    <div class="nav-box in-b clearfix">
      <div class="fl-l row-c" v-for="(router) in navs" :key="router.id">
        <router-link slot="reference" :to="router.path">{{router.info}}</router-link>

        <!--&lt;!&ndash;子菜单气泡开始&ndash;&gt;-->
        <!--<el-popover popper-class="nav-pop"-->
                    <!--placement="top"-->
                    <!--width="110"-->
                    <!--trigger="hover">-->
          <!--<div class="sub-box fz-14">-->
            <!--<div class="sub-item t-c c-p nav-sub-hover"-->
                 <!--v-for="subItem in router.subs" @click="goHouseSub(subItem.linkName)">{{subItem.info}}-->
            <!--</div>-->
          <!--</div>-->
          <!--<router-link slot="reference" :to="router.path">{{router.info}}</router-link>-->
        <!--</el-popover>-->
        <!--&lt;!&ndash;子菜单气泡结束&ndash;&gt;-->
      </div>
    </div>
    <div class="action-box center">
      <div class="search ic-box c-p t-hover">
        <div class="search-ic in-b ic"></div>
      </div>
      <div class="msg ic-box t-hover">
        <div class="msg-ic in-b ic"></div>
      </div>
      <div class="login flex mg">
        <div class="fz t-hover">{{$t('navigation.login.signIn')}}</div>
        <div class="fz"> &nbsp;/&nbsp;</div>
        <div class="fz t-hover">{{$t('navigation.login.signUp')}}</div>
      </div>
      <div class="fz">|</div>
      <div class="lang flex">
        <div class="fz t-hover mg" :class="{'active':lang=='en'}" @click="switchLang('en')">English</div>
        <div class="fz fz-16 p-r t-hover" :class="{'active':lang=='zh'}" @click="switchLang('zh')">简体中文</div>
      </div>
    </div>
  </div>
</template>

<script>

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
      return {}
    },
    computed: {
      navs: { //页面路由数据列表
        set() {
        },
        get() {
          return this.$t('navigation.lists');
        }
      },
      lang: { //页面路由数据列表
        set() {
        },
        get() {
          return window.i18n.locale;
        }
      },
    },
    props: {
      isHomePage: { //首页导航局部样式控制
        type: Boolean,
        default: false
      }
    },
    created() {
    },
    methods: {
      /**
       * 中英文切换
       * @param lang 中英文标示
       */
      switchLang(lang) {
        window.i18n.locale = lang;
      },
      /**
       * 跳转到导航子页面
       * @param linkName
       */
      goHouseSub(linkName) {
        this.$router.push({name: linkName, params: {}})
      },
    },
  }
</script>
<style lang="stylus">
  #navigation-bar
    align-items center
    height: $navHeight
    justify-content space-between
    top: 0
    left: 0
    padding 0 20px
    color #333
    bg-color(#fff)
    .logo
      width: 131px
      height: 41px
    .nav-box
      height: 100%
      width auto
      div
        a
          display flex
          height 100%
          line-height $navHeight
          padding 0 30px
    .action-box
      .search
        margin-right: 16px
        .search-ic
          bg-img('../assets/images/fireworks/shouye/shouye/gnsy_12.png')
      .msg
        .msg-ic
          bg-img('../assets/images/fireworks/shouye/shouye/gnsy_14.png')
      .fz
        font-size: 14px
        color #999999
      .ic-box
        padding 8px 12px
        background-color #DCDCDC
      .ic
        width: 16px
        height: 16px
      .mg
        margin: 0 19px
    .home-logo
      bg-img('../assets/images/fireworks/shared/logo.png')
    .page-logo
      bg-img('../assets/images/fireworks/shared/logo_b.png')

  .home-color
    color #fff !important
    a
      color #fff
</style>
