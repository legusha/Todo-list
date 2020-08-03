<template>
  <section class="container main">
    <div v-if="currentView === listView.list" class="main-action text-right pb-4 mb-4">
      <button class="btn-success btn-big" @click="changeView('add')">Add</button>
    </div>
    <div v-if="currentView === listView.add" class="main-action text-right pb-4 mb-4">
      <button class="btn-primary btn-big" @click="changeView('list')">Cancel</button>
    </div>
    <component
      :is="currentView"
      v-bind="{ list: notesList}"
      @noteAdd="addToNotesList"
      @noteRemove="removeFromNotesList"
    ></component>
  </section>
</template>

<script>
import NotesAdd from '@/components/NotesAdd'
import NotesList from '@/components/NotesList'
import { mapGetters, mapMutations } from 'vuex'

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
    ...mapMutations(['addNote', 'removeNote']),
    changeView (key) {
      this.currentView = this.listView[key]
    },
    addToNotesList (name) {
      const noteByName = this.notesList.find(item => item.name === name)
      if (noteByName) {
        return
      }
      this.addNote({ name })
      this.changeView('list')
    },
    removeFromNotesList (index) {
      this.removeNote({ index })
    }
  },
  created () {
    this.changeView('list')
  }
}
</script>

<style scoped>

</style>
