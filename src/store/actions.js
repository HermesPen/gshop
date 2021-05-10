import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOOD,
    RECEIVE_RATING,
    RECEIVE_INFO,
    INCREMENT_ADD_FOOD,
    DECREMENT_ADD_FOOD
} from './mutations_types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLoginOut,
    reqShopInfo,
    reqShopRating,
    reqShopGood
} from '@/api'

export default {
    // 异步获取地址
    async getAddress({ commit, state }) {
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        // 提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }
    },

    // 异步获取食品分类列表
    async getCategorys({ commit }) {
        // 发送异步ajax请求
        const result = await reqFoodCategorys()
        // 提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, { categorys })
        }
    },

    // 异步获取商家列表
    async getShops({ commit, state }) {
        // 发送异步ajax请求
        const { longitude, latitude } = state
        const result = await reqShops(longitude, latitude)
        // 提交一个mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    },
    // 同步记录用户信息
    getUserInfo({ commit }, userInfo) {
        commit(RECEIVE_USER_INFO, { userInfo })
    },
    // 异步获取用户信息
    async getUserInfo({ commit }) {
        const user = await reqUserInfo()
        if (user.code === 0) {
            const userInfo = user.data
            commit(RECEIVE_USER_INFO, { userInfo })
        }
    },
    // 异步退出用户登录
    async logout({ commit }) {
        const user = await reqLoginOut()
        if (user.code === 0) {
            commit(RESET_USER_INFO)
        }
    },
    // 异步获取商家信息
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }
    },
    // 异步获取商家评价
    async getShopRating({ commit }) {
        const result = await reqShopRating()
        if (result.code === 0) {
            const rating = result.data
            commit(RECEIVE_RATING, { rating })
        }
    },
    // 异步获取商家商品
    async getShopGood({ commit }, cb) {
        const result = await reqShopGood()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOOD, { goods })
            cb && cb()
        }
    },
    // 同步更新food中的count值
    updateFoodCount({ commit }, { isAdd, food }) {
        if(isAdd) {
            commit(INCREMENT_ADD_FOOD,{food})
        } else {
            commit(DECREMENT_ADD_FOOD,{food})
        }
    }
}