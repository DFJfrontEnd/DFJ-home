/**
 * 本地请求地址
 */
const LocalRequestUrlBase = 'http:localhost';

/**
 * 后台请求接口枚举
 */
const RequestUrls = {
  cities: {
    queryCity: '/api/queryCity', //泰国城市列表
    queryCityChart: '/api/queryCityChart', //泰国城市图表
  },
  tools: {},
  home: {
    queryBanner: '/api/queryBanner', //首页获取轮播图
  },
  houseProperty: {
    selectBusPropertys: '/api/selectBusPropertys', //房产列表
  },
  taiYouLiao: {},
  personal: {},
  tourism: {},
  orders: {},
  carRent: {},


}

export {
  RequestUrls,
  LocalRequestUrlBase,
}
