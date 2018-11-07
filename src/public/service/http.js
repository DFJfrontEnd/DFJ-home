import {getAxios} from './getAxios';
import {LangValue, RequestType} from "../enums/enums"
import {RequestUrls} from "../enums/urls"

/**
 * 获取首页轮播图
 *
 * @param type 页面类型：1.启动页 2.首页 3.房产首页 4.旅游首页 5.泰有料首页
 * @param lang  中英文：CN EN 不用传系统识别
 * @param ifvisible 传true
 */
export const queryBanner = async function (pageType, ifvisible = true) {
  let lan = window.i18n.locale;
  let data = await getAxios(RequestType.POST, RequestUrls.queryBanner, {
    type: pageType,
    lang: LangValue[lan],
    ifvisible: ifvisible
  });
  return data;
}
