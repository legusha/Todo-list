import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import './registerServiceWorker'

import '@/assets/scss/main.scss'

import filter from '@/filters'

import ToDoList from '@/components/ToDoList'
import Modal from '@/components/ui/Modal'
import Icon from '@/components/ui/Icon'

/** Global components **/

Vue.component('ToDoList', ToDoList)
Vue.component('Modal', Modal)
Vue.component('Icon', Icon)

/** Global filters **/

Vue.filter('replaceText', filter.replaceText)

/** Init instance Vue **/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
