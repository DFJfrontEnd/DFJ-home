import {getAxios} from './getAxios';
import {LangValue, RequestType} from "../enums/enums"
import {RequestUrls} from "../enums/urls"


/**
 * 获取房产列表
 *
 * @param cityid 城市id
 * @param lang  中英文：CN EN 不用传系统识别
 * @param ifhot 是否热点
 * @param ifnew 是否最新
 * @param ifvisible 传true 显示
 * @param Ifrecommend 是否推荐（汇聚优选）
 * @param propertytype 传房产类型
 * @param investtype 投资类型：投资房、养老房、度假房
 * @param searchstr 传搜索词
 * @param minprice 传最小价格
 * @param maxprice 传最大价格
 * @param minarea 传最小面积
 * @param maxarea 传最大面积
 * @param orderdesc 排序规则 租金涨幅:rentDesc 房价涨幅:priceDesc 价格:unitPriceAsc 默认时间排序
 */
export const selectBusPropertys = async function (pageType, ifvisible = true) {
  let lan = window.i18n.locale;
  let data = await getAxios(RequestType.POST, RequestUrls.home.queryBanner, {
    type: pageType,
    lang: LangValue[lan],
    ifvisible: ifvisible
  });
  return data;
}

