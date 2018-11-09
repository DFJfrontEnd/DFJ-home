import {getAxios} from './getAxios';
import {LangValue, RequestType} from "../enums/enums"
import {RequestUrls} from "../enums/urls"

/**
 * 获取我的消息
 *
 * @param type 获取消息的类型  1系统消息 2活动提醒 3.活动提醒非登录 4.房产订单提醒 5.景点门票提醒 6.一日游提醒 7.置业游提醒 8.房屋托管 21活动提醒（英文） 31 活动提醒非登录（英文）
 * @returns {Promise<void>}
 */
export const selectMessages = async function (type) {

  let data = await getAxios(RequestType.POST, RequestUrls.queryCity, {
    ishot: true,
    lang: LangValue[lan],
    active: true
  });
  return data;
}

