import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from "vue-awesome-swiper"

import swipertemp from './components/swiper-basic.vue'
import "../node_modules/swiper/dist/css/swiper.css"

Vue.use(VueAwesomeSwiper)

Vue.component('glb-swiper', swipertemp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
