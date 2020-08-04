<template>
  <section class="container main">
    <div v-if="currentView === listView.list" class="main-action text-left mb-4 p-4 border-secondary bg-secondary">
      <button class="btn-success btn-big" @click="changeView('add')">Add</button>
    </div>
    <div v-if="currentView === listView.add" class="main-action text-right mb-4 p-4 border-secondary bg-secondary">
      <button class="btn-primary btn-big" @click="changeView('list')">Cancel</button>
    </div>
    <component
      :is="currentView"
      v-bind="{ list: notesList}"
      @submit="addToNotesList"
      @noteRemove="removeFromNotesList"
      class="border-secondary"
    ></component>
  </section>
</template>

<script>
import NotesAdd from '@/components/ui/Input'
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
