<template>
  <section class="container note-wrap">
    <div class="card mb-3 note">
      <div class="card-title note-title text-left d-flex align-center justify-between bg-secondary">
        <h3 class="m-0">{{note.name | replaceText(noteNameMaxSymbol)}}</h3>
        <div class="note-title-action">
          <Icon
            v-for="icon in icons"
            :key="icon.symbol"
            :symbol="icon.symbol"
            @action="icon.handler"
            class="text-primary mr-2"
          ></Icon>
        </div>
      </div>
      <div class="card-body note-body">
        <ToDoList
          :id="index.toString()"
          :list="note.todoList"
          :mutable="todoList.mutable"
          :checkboxColor="todoList.checkboxColor"
          @action="toDoListAction"
        ></ToDoList>
        <p v-if="note.todoList.length === 0" class="m-0">Empty todo list</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Note',
  data () {
    return {
      todoList: {
        mutable: true,
        checkboxColor: 'success'
      },
      noteNameMaxSymbol: 36,
      icons: {
        edit: {
          symbol: '&#9998;',
          handler: this.saveNote,
          color: 'success'
        },
        remove: {
          symbol: '&#10539;',
          handler: this.removeNoteLocal,
          color: 'warning'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['noteCurrent']),
    index () {
      const radix = 10
      return parseInt(this.$route.params.id, radix) - 1
    },
    note () {
      return this.noteCurrent
    }
  },
  methods: {
    ...mapMutations(['updateNote', 'removeNote']),
    toDoListAction (list = []) {
      console.log(list)
    },
    saveNote () {
      this.updateNote({ index: this.index, note: this.note })
    },
    removeNoteLocal () {
      this.removeNote({ index: this.index })
    }
  }
}
</script>

<style scoped lang="scss">
  .note-wrap {
    .note {
      width: 100%;
    }
  }
</style>
