import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "@/assets/css/tailwind.css"
import router from './router'
Vue.config.productionTip = false

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
