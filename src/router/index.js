import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Order from '@/pages/order'
import Search from '@/pages/search'
import Profile from '@/pages/profile'
import Login from '@/pages/login'
import Shops from '@/pages/shops/shops'
import ShopGood from '@/pages/shops/shopgood'
import ShopInfo from '@/pages/shops/shopinfo'
import ShopList from '@/pages/shops/shoplist'
import ShopRating from '@/pages/shops/shoprating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/shops',
      name: 'Shops',
      component: Shops,
      children: [
        {
          path: '/shops/good',
          component: ShopGood
        },
        {
          path: '/shops/info',
          component: ShopInfo
        },
        {
          path: '/shops/list',
          component: ShopList
        },
        {
          path: '/shops/rating',
          component: ShopRating
        },
        {
          path: '',
          redirect: '/shops/good'
        }
      ]
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
})
