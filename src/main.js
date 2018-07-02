// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import './common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios= axios;
/* eslint-disable no-new */
fastclick.attach(document.body);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
