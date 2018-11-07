/**
 *官网英文语言信息提取
 *
 * 1.json格式，涉及项目内中文提取信息均在此修改
 * 2.需严格遵循如下级别格式：页面>组件>功能组>功能点，如：home:{ navigation: { title:'鼎丰居官网' //鼎丰居官网 } }
 * 3.非中文翻译需按照各信息点(//)后面的备注文字进行翻译
 * 4.html页面中使用方法：在模板引擎中统一使用 {{$t('home.navigation.title')}}
 * 5.在js中使用：统一使用 this.$t('home.navigation.title') 替换
 */
const enMessages = {
  navigation: {
    lists: [
      // {
      //   path: '/home',
      //   info: 'shouye'  //首页
      // },
      {
        path: '/property',
        info: 'fangchan'  //房产
      },
      // {
      //   path: '/tourism',
      //   info: 'lvyou'  //旅游
      // },
      // {
      //   path: '/shortrent',
      //   info: 'duanzu'  //短租
      // },
      // {
      //   path: '/taiyouliao',
      //   info: 'taiyouliao' //泰有料
      // },
    ],
    login: {
      signIn: 'signIn',  //登录
      signUp: 'signUp',  //注册
    }
  },
}

export {
  enMessages
}
