import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login/login-in'
import HouseProperty from '@/pages/house-property'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home', //首页
      name: 'home',
      component: Home
    },
    {
      path: '/login', //登录
      name: 'login-in',
      component: Login
    },
    {
      path: '/property', //海外房产
      name: 'house-property',
      component: HouseProperty
    },
  ]
})
