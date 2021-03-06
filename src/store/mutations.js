/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOOD,
    RECEIVE_INFO,
    RECEIVE_RATING,
    INCREMENT_ADD_FOOD,
    DECREMENT_ADD_FOOD,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutations_types'

export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {}
    },
    [RECEIVE_GOOD](state, { goods }) {
        state.goods = goods
    },
    [RECEIVE_RATING](state, { ratings }) {
        state.ratings = ratings
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },
    [INCREMENT_ADD_FOOD](state, { food }) {
        if (!food.count) {
            Vue.set(food, 'count', 1)
            // target：要更改的数据源(可以是对象或者数组)
            // key：要更改的具体数据
            // value ：重新赋的值// 第一次点击+号赋值为1
            state.cartFoods.push(food)
        } else {
            food.count++
        }
    },
    [DECREMENT_ADD_FOOD](state, { food }) {
        if (food.count) {
            food.count--
            if (food.count === 0) {
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }
    },
    [CLEAR_CART](state) {
        // 重置food中的count
        state.cartFoods.forEach(food => {
            food.count = 0
        });
        // 清除购物车中的选项
        state.cartFoods = []
    },
    [RECEIVE_SEARCH_SHOPS](state, { searchShops }) {
        state.searchShops = searchShops
    }
}