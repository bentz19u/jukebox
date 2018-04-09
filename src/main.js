// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import axios from 'axios'
import store from './store'
import App from './App'

Vue.config.productionTip = false

window.axios = axios.create();

window.bus = new Vue();

Vue.use(VueOnsen, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  beforeCreate() {
    this.$ons.platform.select("android");
  }
})
