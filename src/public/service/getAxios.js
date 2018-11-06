import axios from 'axios';
import * as router from "element-ui"

/**
 * 后台接口数据请求底层封装
 *
 * 1.返回拦截器
 * 2.get、post、put、path、delete方式封装
 *
 * @param type
 * @param url
 * @param data
 * todo 请求拦截器(比对token)、返回拦截器的判断完善、错误页面处理
 */
// 1.返回拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errCode == 404) {
      router.push({
        path: "/login",
        querry: {redirect: router.currentRoute.fullPath} //从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  })

//2.get、post、put、path方式封装
export const getAxios = async function (type, url, data) {
  var data = await axios[type](url, data)
    .then(response => {
      return response.data;
    }, err => {
      return err;
    })
  return data;
}

