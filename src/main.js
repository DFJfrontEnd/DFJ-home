// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import {zhMessages} from "./assets/i18n/zh"
import {enMessages} from "./assets/i18n/en"

Vue.use(VueI18n);

Vue.config.productionTip = false;

//i18n中英文切换管理
window.i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh: zhMessages,
    en: enMessages
  }
})

/* eslint-disable no-new */
window.appVue = new Vue({
  el: '#app',
  data: {
    eventHub: new Vue() //全局事件注册
  },
  router,
  i18n,
  components: {App},
  template: '<App/>',
})
