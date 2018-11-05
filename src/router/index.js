import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Login from '../pages/login/login-in'
import HouseProperty from '../pages/house-property'
import Tourism from '../pages/tourism'
import ShortRent from '../pages/short-rent'
import TaiYouLiao from '../pages/taiyouliao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/login', //登录
      name: 'login-in',
      component: Login
    },
    {
      path: '/home', //首页
      name: 'home',
      component: Home
    },
    {
      path: '/property', //海外房产
      name: 'house-property',
      component: HouseProperty
    },
    {
      path: '/tourism', //旅游
      name: 'tourism',
      component: Tourism
    },
    {
      path: '/shortrent', //短租
      name: 'short-rent',
      component: ShortRent
    },
    {
      path: '/taiyouliao', //泰有料
      name: 'taiyouliao',
      component: TaiYouLiao
    },
  ]
})
