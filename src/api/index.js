
/**   
 * api接口统一管理
 */
import { get, post } from './axios'
const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => get(BASE_URL + '/position', geohash)
// 2、获取食品分类列表
export const reqFoodCategorys = () => get(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => get(BASE_URL + '/shops', { longitude, latitude })