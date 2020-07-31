<template>
  <section id="main" class="container">
    <div v-if="currentView === view.list" class="main-action text-right pb-4 mb-4">
      <button class="btn-success btn-big" @click="changeView('add')">Add</button>
    </div>
    <div v-if="currentView === view.add" class="main-action text-right pb-4 mb-4">
      <button class="btn-primary btn-big" @click="changeView('list')">Cancel</button>
    </div>
    <component
      :is="currentView"
      v-bind="{ list: noteList}"
    ></component>
  </section>
</template>

<script>
import NotesAdd from '@/components/NotesAdd'
import NotesList from '@/components/NotesList'

export default {
  name: 'Main',
  components: {
    NotesAdd,
    NotesList
  },
  data () {
    return {
      noteList: [
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            },
            {
              status: false,
              title: 'Todo2'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: false,
              title: 'Todo'
            }
          ]
        }
      ],
      currentView: '',
      view: {
        add: 'NotesAdd',
        list: 'NotesList'
      }
    }
  },
  methods: {
    changeView (key) {
      this.currentView = this.view[key]
    }
  },
  created () {
    this.changeView('list')
  }
}
</script>

<style scoped>

</style>
