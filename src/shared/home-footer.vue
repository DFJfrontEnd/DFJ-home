<template>
  <div id="home-footer" class="color-w fz-16 c-d">
    <div class="wd">
      <div class="list flex">
        <div class="customer-service mr">
          <div class="title">{{$t('footer.customerService.title')}}</div>
          <div class="tel fz-30 color-t mb-18">{{tel}}</div>
          <div class="cc">{{$t('footer.customerService.day')}}</div>
        </div>
        <div class="contacts mr">
          <div class="title">{{$t('footer.contacts.title')}}</div>
          <div class="flex">
            <div class="cc">{{$t('footer.contacts.addr.name')}}</div>
            <div class="info cc fl-1">{{$t('footer.contacts.addr.info')}}</div>
          </div>
          <div class="flex mb-32">
            <div class="name cc">{{$t('footer.contacts.email.name')}}</div>
            <div class="info cc fl-1">{{$t('footer.contacts.email.info')}}</div>
          </div>
          <div class="focus row-c">
            <div class="name cc">{{$t('footer.contacts.focus.name')}}</div>
            <div class="link flex">
              <el-popover
                placement="right"
                popper-class="wx-focus"
                trigger="hover">
                <div class="ic"></div>
                <div class="info fz-14 t-c">{{$t('footer.contacts.focus.gongZhongHao')}}</div>
                <div slot="reference" class="wx ml-32 ic-box center c-p">
                  <div class="ic"></div>
                </div>
              </el-popover>
              <div class="wb ml-32 ic-box center c-p" @click="goWeiBo">
                <div class="ic"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="abouts flex">
          <div class="menus mr" v-for="menu in aboutLists">
            <div class="title">{{menu.title}}</div>
            <div class="menu cc mb-15 t-hover" v-for="subMenu in menu.children" @click="goLink(subMenu)">
              {{subMenu.title}}
            </div>
          </div>
        </div>
        <div class="download">
          <div class="down-img"></div>
          <div class="info t-c fz-14 color-w mt-15">{{$t('footer.contacts.download.info')}}</div>
        </div>
      </div>
      <div class="copy-right fz-12 cc t-c">{{$t('footer.copyRight')}}</div>
    </div>
  </div>
</template>

<script>
  import {OutLinks, Tel} from "../public/enums/enums"

  /**
   * 页脚公用组件
   */
  export default {
    name: "home-footer",
    data() {
      return {
        tel: '', //电话
      }
    },
    computed: {
      aboutLists: { //关于我们数组
        set() {
        },
        get() {
          return this.$t('footer.contacts.abouts.menus.lists')
        },
      }
    },
    created() {
      this.tel = Tel;
    },
    methods: {
      /**
       * 跳转到微博页
       */
      goWeiBo() {
        window.open(OutLinks.WeiBo);
      },
      /**
       * 跳转菜单链接
       *
       * 1.判断是否外部链接，是就跳转外部链接
       * 2.非外部链接跳转到项目内部组件
       * @param menu
       */
      goLink(menu) {
        //1.判断是否外部链接，是就跳转外部链接
        if (menu.link) {
          window.open(menu.link);
        }
        //2.非外部链接跳转到项目内部组件
        else {
          this.$router.push({name: menu.name})
        }
      }
    },
  }
</script>

<style scoped lang="stylus">
  #home-footer
    background-color #24273E
    padding-top: 60px !important
    .list
      justify-content start
      .contacts
        max-width 280px
        .cc
          line-height: 1.95
        .focus
          .ic-box
            width: 48px
            height: 48px
            border-radius 50%
            .ic
              width: 48px
              height: 48px
              border-radius 50%
          .wx
            &:hover
              background-color $themColor
            .ic
              bg-img('../assets/images/fireworks/shouye/shouye/gnsy_11.png')
          .wb
            &:hover
              background-color red
            .ic
              bg-img('../assets/images/fireworks/shouye/shouye/gnsy_13.png')
          .name
            line-height: 48px
      .mr
        margin-right: 88px
      .title
        font-size: 16px
        margin-bottom: 32px
      .cc
        color #80808a
        font-size: 14px
      .down-img
        width: 102px
        height: 102px
        bg-img('../assets/images/fireworks/shouye/shouye/gnsy_0.png')
    .mb-18
      margin-bottom: 18px
    .mb-32
      margin-bottom: 32px
    .ml-32
      margin-left: 32px
    .mb-15
      margin-bottom: 15px
    .ml-88
      margin-left: 88px
    .mt-15
      margin-top: 15px

    .copy-right
      color #80808a
      margin-top: 130px
      padding-bottom: 30px

  //微信关注号气泡
  .wx-focus
    padding 10px 0
    .ic
      width: 120px
      height: 120px
      bg-img('../assets/images/fireworks/shouye/shouye/gnsy_0.png')
    .info
      font-size: 14px
      color: #80808a
</style>
