<template>
  <div id="home">
    <NavigationBar :isHomePage="true"></NavigationBar>
  </div>
</template>

<script>
  import NavigationBar from '../shared/navigation-bar';
  import {queryBanner} from "../public/service/home"
  import {BannerPageTypes} from "../public/enums/enums"

  /**
   * 全站首页
   */
  export default {
    name: "home",
    data() {
      return {}
    },
    components: {
      NavigationBar
    },
    created() {
      this.getHomeBanner(BannerPageTypes.Home);
    },
    methods: {
      /**
       *获取首页轮播图
       *
       * @param pageType 页面类型
       */
      async getHomeBanner(pageType) {
        let data = await queryBanner(pageType);
        console.log('轮播图返回数据', data)
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
