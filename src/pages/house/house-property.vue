<template>
  <div id="house-property" class="pt-t">
    <NavigationBar></NavigationBar>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!--<div class="wd">-->
    <!--<ImageList :lists="cityLists" rows="2">-->
    <!--<div slot="title" class="title fz-30 fw-bb">城市之光</div>-->
    <!--<div slot="text" slot-scope="{ item }">11</div>-->
    <!--&lt;!&ndash;<div slot="inner1" class="p-a" style="width: 100px;height: 30px;top: 0;left: 0;">54646</div>&ndash;&gt;-->

    <!--</ImageList>-->
    <!--</div>-->

    <!--<homeFooter></homeFooter>-->
  </div>
</template>

<script>
  import NavigationBar from '../../shared/navigation-bar';
  import HomeFooter from '../../shared/home-footer';
  import ImageList from '../../shared/image-list';

  /**
   * 海外房产
   */
  export default {
    name: "house-property",
    data() {
      return {
        cityLists: [  //城市之光列表
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg'},
        ]
      }
    },
    components: {
      NavigationBar,
      HomeFooter,
      ImageList,
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped lang="stylus">
  #house-property
    .title
      color #000
      margin-bottom: 60px
</style>
