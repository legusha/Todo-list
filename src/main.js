import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import './registerServiceWorker'

import '@/assets/scss/main.scss'

import ToDoList from '@/components/ToDoList'
import Modal from '@/components/utils/Modal'

/** Global components **/

Vue.component('ToDoList', ToDoList)
Vue.component('Modal', Modal)

/** Global filters **/

Vue.filter('replaceText', function (value, maxSymbol) {
  const startValueIndex = 0
  if (!value) return ''
  if (value.length >= maxSymbol) {
    return `${value.substring(startValueIndex, maxSymbol)}...`
  }
  return value
})

/** Init instance Vue **/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
