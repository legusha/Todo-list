import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import '@/assets/scss/main.scss'

import ToDoList from '@/components/ToDoList'
import Modal from '@/components/utils/Modal'

Vue.component('ToDoList', ToDoList)
Vue.component('Modal', Modal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
