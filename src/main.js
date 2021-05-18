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
import './utils/time'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import VueLazyload from 'vue-lazyload'
import loading from './assets/images/loading.gif'
Vue.use(Button);
Vue.use(Dialog)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: loading,
  attempt: 1
})
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
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
