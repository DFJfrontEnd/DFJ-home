<template>
  <div id="house-home">
    <!--房产首页-->
    <NavigationBar></NavigationBar>


    <div class="main bg">
      <div class="head-wrapper">
        <div class="headIn-fl">
          <img class="headIn-pic" style="display:block;" src="../../assets/images/fireworks/shouye/tequan/mianfeizhu/wz-banner.png"/>
        </div>
        <div class="headIn-fr">
          <img class="headIn-pic" src="../../assets/images/fireworks/house/fcsy_0011.png"/>
        </div>
      </div>
      <div class="content">
        <!--泰国房价走势 start-->
        <div class="house-floor">
          <h2>泰国房价走势</h2>
          <div class="house-trend clearfix">
            <div class="trendFl fl-l">
              <div class="trendFl-data">

              </div>
            </div>
            <div class="trendMid fl-l"></div>
            <div class="trendFr fl-l"></div>
          </div>
        </div>
        <!--泰国房价走势 end-->
        <div class="house-floor">
          <h2>城市之光</h2>
          <ul class="city-list clearfix">
            <li class="city-item fl-l p-r mg-15">
              <img src="../../assets/images/fireworks/house/fcsy_0011.png"/>
              <div class="city-name p-center fz-28 fw">曼谷</div>
            </li>
            <li class="city-item fl-l p-r mg-15">
              <img src="../../assets/images/fireworks/house/fcsy_0011.png"/>
              <div class="city-name p-center fz-28 fw">曼谷</div>
            </li>
            <li class="city-item fl-l p-r mg-15">
              <img src="../../assets/images/fireworks/house/fcsy_0011.png"/>
              <div class="city-name p-center fz-28 fw">曼谷</div>
            </li>
            <li class="city-item fl-l p-r mg-15">
              <img src="../../assets/images/fireworks/house/fcsy_0011.png"/>
              <div class="city-name p-center fz-28 fw">曼谷</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="wd">
        <ImageList :lists="cityLists" :rows="1">
          <div slot="title" class="title fz-30 fw-bb">城市之光</div>
          <!--<div slot="text" slot-scope="{ item }">{{item.city}}</div>-->
          <div slot="inner1" class="p-a" slot-scope="{ item }" style="width: 100px;height: 30px;top: 0;left: 0;">{{item.url}}</div>
        </ImageList>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import NavigationBar from '../../shared/navigation-bar';
  import Footer from '../../shared/home-footer';
  import {queryCity} from "../../public/service/cities"
  import {BannerPageTypes} from "../../public/enums/enums"
  import ImageList from '../../shared/image-list';

  export default {
    name: "house-home",
    data() {
      return {
        cityLists: [  //城市之光列表
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg',city: '曼谷'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg',city: '普吉'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg',city: '清迈'},
          {url: 'http://www.dfj95.com/res/web/image/index/key02.jpg',city: '芭提雅'},

        ]
      }
    },
    components: {
      NavigationBar,
      Footer,
      ImageList
    },
    created() {
      this.getQueryCity()
    },
    methods: {
      /**
       *获取城市列表
       *
       * @param pageType 页面类型
       */
      async getQueryCity() {
        let data = await queryCity();
        console.log('城市列表数据', data)

      }
    }
  }
</script>

<style scoped lang="stylus">
  #house-home
    .testing
      position relative

    .content
      width 1272px
      margin 0 auto

    .head-wrapper
      max-width: 100%
      min-width: 1272px
      position: relative
      .headIn-fl
        width: 100%
        padding-right: 300px

      .headIn-fr
        width: 300px
        height: 100%
        position: absolute
        top: 0
        right: 0

    .house-floor
      .bg-purple-dark
        height 30px
        background: red

    img
      width: 100%
      height: 100%

    .city-item
      width: 288px
      height: 200px
      border-radius 6px
      overflow hidden
      .city-name
        color #fff
        transform: translate(-50%, -50%);

</style>
