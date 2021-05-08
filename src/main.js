// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/index.styl'
import './assets/css/mixins.styl'
import { Dialog, Button } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/dialog/style'
import '@/mock/mockServer'


import VueLazyload from 'vue-lazyload'
Vue.use(Button);
Vue.use(Dialog)
Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
