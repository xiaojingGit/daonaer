// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

FastClick.attach(document.body);

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
   preload:1.3,//预加载的宽高
   loading:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510121455870&di=5ff34933e5974f9f47e16faa39548acd&imgtype=0&src=http%3A%2F%2Ffiles.jb51.net%2Ffile_images%2Farticle%2F201607%2F2016071115484644.gif",
   error:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510121324367&di=5638ceee59ed7f281d85f463945f55a9&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2013%2F0830%2F20130830061910734.jpg",
   attempt:3,//尝试加载的次数
   listenEvents: [ 'scroll' ]
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
