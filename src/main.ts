// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import App from './App.vue'
import Router from './router'
import Store from './store'

Vue.config.productionTip = false
/* tslint:disable:no-unused-expression */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App },
  store: Store
})
/* tslint:enable:no-unused-expression */
