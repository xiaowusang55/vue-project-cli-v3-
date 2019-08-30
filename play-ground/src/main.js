import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//swiper global regiteratoin start
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiperBasic from './components/swiper-basic.vue'

import '../node_modules/swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, swiperBasic)
//swiper global regiteratoin end


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
