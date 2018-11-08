/**
 *枚举对象文件
 */

//请求方式
const RequestType = {
  POST: 'post',
  PUTS: 'put',
  DELETE: 'delete',
  PATH: 'path',
  GET: 'get',
}

//前端对后台中英文对照
const LangValue = {
  'zh': 'CN', //中文
  'en': 'EN' //英文
}

//轮播页面类型枚举枚举
const BannerPageTypes = {
  Start: 1,
  Home: 2,
  HousePropertyHome: 3,
  TourismHome: 4,
  TaiyouliaoHome: 5,
}

//公司电话
const Tel = '400-863-2227';

//外部链接
const OutLinks = {
  WeiBo: 'https://weibo.com/u/3237124162?is_hot=1',  //微博

}

export {
  RequestType,
  LangValue,
  BannerPageTypes,
  Tel,
  OutLinks,
}
