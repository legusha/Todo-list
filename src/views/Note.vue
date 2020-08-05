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
            :class-name="icon.className"
            @action="icon.handler(index)"
            class="mr-2"
          ></Icon>
        </div>
      </div>
      <div class="card-body note-body">
        <ToDoList
          :id="index.toString()"
          :list="note.todoList"
          :mutable="todoList.mutable"
          @action="toDoListAction"
        ></ToDoList>
        <p v-if="note.todoList.length === 0" class="m-0">Empty todo list</p>
      </div>
    </div>
    <Modal
      v-if="modals.ok.active"
      :active="modals.ok.active"
      @close="modals.ok.close(modals.ok)"
    >
      <template slot="header">
        <h2 class="m-0">Success:</h2>
      </template>
      <template slot="body">
        <h2>Your note has been saved!</h2>
      </template>
      <template slot="footer">
        <div>
          <button @click="modals.ok.accept(modals.ok)" type="button" class="btn-success">OK</button>
        </div>
      </template>
    </Modal>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Note',
  data () {
    return {
      todoList: {
        mutable: true
      },
      noteNameMaxSymbol: 36,
      icons: {
        edit: {
          symbol: 'fa fa-pencil',
          handler: this.saveNote,
          className: 'text-success'
        },
        remove: {
          symbol: 'fa fa-times',
          handler: this.removeFromNotesList,
          className: 'text-danger'
        }
      },
      modalActive: false,
      modals: {
        ok: {
          active: false,
          close: this.modalClose,
          accept: this.modalAccept
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
      const noteData = { index: this.index, note: this.note }
      this.updateNote(noteData)
      this.modals.ok.active = true
    },
    removeFromNotesList (index) {
      this.removeNote({ index })
    },
    modalAccept (modal) {
      const action = modal.action
      if (action) modal.action()
      modal.active = !modal.active
    },
    modalClose (modal) {
      modal.active = !modal.active
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
