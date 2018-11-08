/**
 * 本地请求地址
 */
const LocalRequestUrlBase = 'http:localhost';

/**
 * 后台请求接口枚举
 */
const RequestUrls = {
  queryBanner: '/api/queryBanner', //首页获取轮播图
  queryCity: '/api/queryCity', //泰国城市列表
  queryCityChart: '/api/queryCityChart', //泰国城市图表
  selectBusPropertys: '/api/selectBusPropertys', //房产列表
}

export {
  RequestUrls,
  LocalRequestUrlBase,
}
