import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Order from '@/pages/order'
import Search from '@/pages/search'
import Profile from '@/pages/profile'
import Login from '@/pages/login'

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
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
})
