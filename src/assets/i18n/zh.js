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
      // {
      //   path: '/home',
      //   info: '首页'  //首页
      // },
      {
        path: '/property',
        info: '房产首页'  //房产首页
      },
      {
        path: '/allhouse',
        info: '全部房源'  //全部房源
      },
      {
        path: '/househelp',
        info: '帮我找房'  //帮我找房
      },
      {
        path: '/houseguide',
        info: '购房宝典'  //购房宝典
      },


      // {
      //   path: '/property',
      //   info: '房产',  //房产
      //   subs: [
      //     {
      //       info: '全部房源', //全部房源
      //       linkName: 'all-house'
      //     },
      //     {
      //       info: '帮我找房', //帮我找房
      //       linkName: 'house-help'
      //     },
      //     {
      //       info: '购房宝典', //购房宝典
      //       linkName: 'house-guide'
      //     },
      //   ]
      // },
      // {
      //   path: '/tourism',
      //   info: '旅游'  //旅游
      // },
      // {
      //   path: '/shortrent',
      //   info: '短租'  //短租
      // },
      // {
      //   path: '/taiyouliao',
      //   info: '泰有料' //泰有料
      // },
    ],
    login: {
      signIn: '登录',  //登录
      signUp: '注册',  //注册
    }
  },
  footer: {
    customerService: {
      title: '客服热线',  //客服热线
      day: '周一至周五 10:00-18:00', //周一至周五 10:00-18:00
    },
    contacts: {
      title: '联系我们',  //联系我们
      addr: {
        name: '地址：',  //地址：
        info: '深圳市南山区粤海街道海德三道天利中央商务广场B座29楼2901B', //深圳市南山区粤海街道海德三道天利中央商务广场B座29楼2901B
      },
      email: {
        name: '邮箱：',  //邮箱：
        info: 'info@dfj95.com',
      },
      focus: {
        name: '关注我们',  //关注我们
        gongZhongHao: '官方公众号',  //官方公众号
      },
      abouts: {
        menus: {
          lists: [
            {
              title: '关于我们', //关于我们
              children: [
                {
                  title: '公司介绍', //公司介绍
                  link: 'http://baidu.com',
                },
                {
                  title: '联系我们', //联系我们
                  link: 'http://baidu.com',
                },
                {
                  title: '加入我们', //加入我们
                  link: 'http://baidu.com',
                },
              ]
            },
            {
              title: '安全保障', //安全保障
              children: [
                {
                  title: '法律法规', //法律法规
                  link: 'http://baidu.com',
                },
                {
                  title: '隐私政策', //隐私政策
                  link: 'http://baidu.com',
                },
                {
                  title: '免责申明', //免责申明
                  link: 'http://baidu.com',
                },
              ]
            },
            {
              title: '新手引导', //安全保障
              children: [
                {
                  title: '注册账号', //注册账号
                  link: 'http://baidu.com',
                },
                {
                  title: '购房流程', //购房流程
                  link: 'http://baidu.com',
                },
              ]
            },
          ]
        }
      },
      download: {
        info: '扫描下载APP'  //扫描下载APP
      },
    },
    copyRight: 'Copyright©2017 dfj95.com , All Rights Reserved 粤ICP备16037344号' //Copyright©2017 dfj95.com , All Rights Reserved 粤ICP备16037344号
  },
}

export {
  zhMessages
}
