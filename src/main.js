// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import FastClick from 'fastclick'
import store from './vuex/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

FastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
