
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
// 4、用户名密码登录
export const reqPwLogin = ({ name, pw, captcha }) => post(BASE_URL + '/login_pwd', { name, pw, captcha })
// 5、获取短信验证码
export const reqSendCode = (phone) => post(BASE_URL + '/sendcode', phone)
// 6、手机号验证码登陆
export const reqPhoneLogin = (phone, code) => post(BASE_URL + '/login_sms', { phone, code })
// 7、请求用户信息
export const reqUserInfo = () => get(BASE_URL + '/userinfo')
// 8、用户登出
export const reqLoginOut = () => get(BASE_URL + '/logout')
// 9、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash, keyword) => get(BASE_URL + '/search_shops', { geohash, keyword })

// 获取商家信息
export const reqShopInfo = () => get('/info')
// 获取商家评价数组
export const reqShopRating = () => get('/rating')
// 获取商品数组
export const reqShopGood = () => get('/good')