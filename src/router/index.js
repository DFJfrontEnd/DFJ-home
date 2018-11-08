import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Login from '../pages/login/login-in'
import HouseProperty from '../pages/house/house-property'
import HouseIndex from '../pages/house/house-index'
import AllHouse from '../pages/house/all-house'
import HouseHelp from '../pages/house/house-help'
import HouseGuide from '../pages/house/house-guide'
import Tourism from '../pages/tourism'
import ShortRent from '../pages/short-rent'
import TaiYouLiao from '../pages/taiyouliao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/property'
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
      path: '/property',  //海外房产
      name: 'house-property',
      component: HouseProperty
    },
    {
      path: '/houseindex',  //房产首页
      name: 'house-index',
      component: HouseIndex
    },
    {
      path: '/allhouse', //全部房源
      name: 'all-house',
      component: AllHouse
    },
    {
      path: '/househelp', //帮忙找房
      name: 'house-help',
      component: HouseHelp
    },
    {
      path: '/houseguide', //全部房源
      name: 'house-guide',
      component: HouseGuide
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
