import {getAxios} from './getAxios';
import {LangValue, RequestType} from "../enums/enums"
import {RequestUrls} from "../enums/urls"

/**
 * 获取城市列表
 *
 * @param ishot 是否热点（true false）
 * @param lang  中英文：CN EN 不用传系统识别
 * @param active 是否激活 （true）
 */
export const queryCity = async function () {
  let lan = window.i18n.locale;
  let data = await getAxios(RequestType.POST, RequestUrls.queryCity, {
    ishot: true,
    lang: LangValue[lan],
    active: true
  });
  return data;
}
