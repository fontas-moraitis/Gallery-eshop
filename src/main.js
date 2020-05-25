import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCurrencyFilter from 'vue-currency-filter'
import OutsideClick from './directives/OutsideClick.js'

Vue.use(VueCurrencyFilter,
  {
    symbol: '€',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

Vue.config.productionTip = false

Vue.directive('outside-click', OutsideClick)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
