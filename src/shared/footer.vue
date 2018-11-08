<template>
  <div id="footer" class="pd color-w fz-16 c-d">
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
          <div class="name cc">关注我们</div>
          <div class="link flex">
            <el-popover
              placement="right"
              popper-class="wx-focus"
              trigger="hover">
              <div class="ic"></div>
              <div class="info fz-14 t-c">官方公众号</div>
              <div slot="reference" class="wx ml-32 ic-box center c-p">
                <div class="ic"></div>
              </div>
            </el-popover>
            <div class="wb ml-32 ic-box center c-p">
              <div class="ic"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="abouts">
        <div class="title">关于我们</div>
      </div>
    </div>
    <div class="copy-right"></div>
  </div>
</template>

<script>
  import {Tel} from "../public/enums/enums"

  export default {
    name: "footer",
    data() {
      return {
        tel: '', //电话
      }
    },
    created() {
      this.tel = Tel;
    }
  }
</script>

<style scoped lang="stylus">
  #footer
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

    .mb-18
      margin-bottom: 18px
    .mb-32
      margin-bottom: 32px
    .ml-32
      margin-left: 32px

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
