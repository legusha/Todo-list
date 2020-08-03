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
      v-bind="{ list: notesList}"
      @noteAdd="noteAdd"
      @noteRemove="noteRemove"
    ></component>
  </section>
</template>

<script>
import NotesAdd from '@/components/NotesAdd'
import NotesList from '@/components/NotesList'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: {
    NotesAdd,
    NotesList
  },
  data () {
    return {
      currentView: '',
      listView: {
        add: 'NotesAdd',
        list: 'NotesList'
      }
    }
  },
  computed: {
    ...mapGetters(['notesList'])
  },
  methods: {
    changeView (key) {
      this.currentView = this.listView[key]
    },
    noteAdd (name) {
      const noteByName = this.notesList.find(item => item.name === name)
      if (noteByName) {
        return
      }
      const newNote = {
        name,
        todoList: []
      }
      this.notesList.unshift(newNote)
      this.changeView('list')
    },
    noteRemove (index) {
      this.notesList.splice(index, 1)
    }
  },
  created () {
    this.changeView('list')
  }
}
</script>

<style scoped>

</style>
