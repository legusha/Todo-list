import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import guards from '@/router/guards'

import Main from '@/views/Main.vue'
import Note from '@/views/Note.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: Note,
    props: true,
    beforeEnter: guards.note.bind(null, store)
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
