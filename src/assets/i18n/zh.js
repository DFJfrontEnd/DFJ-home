/**
 *官网中文语言信息提取
 *
 * 1.json格式，涉及项目内中文提取信息均在此修改
 * 2.需严格遵循如下级别格式：页面>组件>功能组>功能点，如：home:{ navigation: { title:'鼎丰居官网' //鼎丰居官网 } }
 * 3.非中文翻译需按照各信息点后面(//之后)的备注文字进行翻译
 * 4.html页面中使用方法：在模板引擎中统一使用 {{$t('home.navigation.title')}}
 * 5.在js中使用：统一使用 this.$t('home.navigation.title') 替换
 */
const zhMessages = {
  navigation: {
    lists: [
      {
        path: '/home',
        info: '首页'  //首页
      },
      {
        path: '/property',
        info: '房产',  //房产
        subs: [
          {
            info: '全部房源', //全部房源
            linkName: 'all-house'
          },
          {
            info: '帮我找房', //帮我找房
            linkName: 'house-help'
          },
          {
            info: '购房宝典', //购房宝典
            linkName: 'house-guide'
          },
        ]
      },
      {
        path: '/tourism',
        info: '旅游'  //旅游
      },
      {
        path: '/shortrent',
        info: '短租'  //短租
      },
      {
        path: '/taiyouliao',
        info: '泰有料' //泰有料
      },
    ],
    login: {
      signIn: '登录',  //登录
      signUp: '注册',  //注册
    }
  }
}

export {
  zhMessages
}
