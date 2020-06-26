import Vue from 'vue'
import * as d3 from 'd3'
import App from './App.vue'
import router from './router'
import d3Base from './mixins/d3-base'
import CustomComponent from './components'

Vue.config.productionTip = false
Vue.prototype.d3 = d3

Vue.mixin(d3Base)
Vue.use(CustomComponent)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
