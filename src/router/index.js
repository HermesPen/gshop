import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
// import Main from '@/pages/main'
const Main = () => import('@/pages/main')
// import Order from '@/pages/order'
const Order = () => import('@/pages/order')
// import Search from '@/pages/search'
const Search = () => import('@/pages/search')
// import Profile from '@/pages/profile'
const Profile = () => import('@/pages/profile')
// import Login from '@/pages/login'
const Login = () => import('@/pages/login')
// import Shops from '@/pages/shops/shops'
const Shops = () => import('@/pages/shops/shops')
// import ShopGood from '@/pages/shops/shopgood'
const ShopGood = () => import('@/pages/shops/shopgood')
// import ShopInfo from '@/pages/shops/shopinfo'
const ShopInfo = () => import('@/pages/shops/shopinfo')
// import ShopList from '@/pages/shops/shoplist'
const ShopList = () => import('@/pages/shops/shoplist')
// import ShopRating from '@/pages/shops/shoprating'
const ShopRating = () => import('@/pages/shops/shoprating')

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
