<template>
  <section id="main" class="container">
    <div v-if="currentView === listView.list" class="main-action text-right pb-4 mb-4">
      <button class="btn-success btn-big" @click="changeView('add')">Add</button>
    </div>
    <div v-if="currentView === listView.add" class="main-action text-right pb-4 mb-4">
      <button class="btn-primary btn-big" @click="changeView('list')">Cancel</button>
    </div>
    <component
      :is="currentView"
      v-bind="{ list: noteList}"
      @noteAdd="noteAdd"
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
      listView: {
        add: 'NotesAdd',
        list: 'NotesList'
      }
    }
  },
  methods: {
    changeView (key) {
      this.currentView = this.listView[key]
    },
    noteAdd (name) {
      const noteByName = this.noteList.find(item => item.name === name)
      if (noteByName) {
        return
      }
      const newNote = {
        name,
        todoList: []
      }
      this.noteList.unshift(newNote)
      this.changeView('list')
    }
  },
  created () {
    this.changeView('list')
  }
}
</script>

<style scoped>

</style>
