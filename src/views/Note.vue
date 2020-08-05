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
          <button @click="modalAccept(modals.ok)" type="button" class="btn-success">OK</button>
        </div>
      </template>
    </Modal>
    <Modal
      v-if="modals.remove.active"
      :active="modals.remove.active"
      @close="modals.remove.close(modals.remove)"
    >
      <template slot="header">
        <h2 class="m-0">Question:</h2>
      </template>
      <template slot="body">
        <h2>Are you sure you want to delete the note?</h2>
      </template>
      <template slot="footer">
        <div>
          <button @click="modals.remove.close(modals.remove)" type="button" class="btn-primary ml-2">Cancel</button>
          <button @click="modalAccept(modals.remove)" type="button" class="btn-success">OK</button>
        </div>
      </template>
    </Modal>
    <Modal
      v-if="modals.disableEdit.active"
      :active="modals.disableEdit.active"
      @close="modals.disableEdit.close(modals.disableEdit)"
    >
      <template slot="header">
        <h2 class="m-0">Question:</h2>
      </template>
      <template slot="body">
        <h2>Warning! You will not be able to edit Todo list?</h2>
      </template>
      <template slot="footer">
        <div>
          <button @click="modals.disableEdit.close(modals.disableEdit)" type="button" class="btn-primary ml-2">Cancel</button>
          <button @click="modalAccept(modals.disableEdit)" type="button" class="btn-success">OK</button>
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
        undoEdit: {
          symbol: 'fa fa-share',
          handler: this.undoChangeNote,
          className: 'text-primary'
        },
        disableEdit: {
          symbol: 'fa fa-pencil',
          handler: this.modalOpen.bind(this, 'disableEdit', this.changeEditTodoList, []),
          className: 'text-primary'
        },
        save: {
          symbol: 'fa fa-floppy-o',
          handler: this.modalOpen.bind(this, 'ok', this.saveNote, []),
          className: 'text-success'
        },
        remove: {
          symbol: 'fa fa-times',
          handler: this.modalOpen.bind(this, 'remove', this.removeFromNotesList, [this.index]),
          className: 'text-danger'
        }
      },
      modalActive: false,
      modalCurrentHandler: null,
      modals: {
        ok: {
          active: false,
          close: this.modalClose
        },
        remove: {
          active: false,
          close: this.modalClose
        },
        disableEdit: {
          active: false,
          close: this.modalClose
        }
      }
    }
  },
  computed: {
    ...mapGetters(['noteCurrent', 'notesList']),
    index () {
      const radix = 10
      return parseInt(this.$route.params.id, radix) - 1
    },
    note () {
      return this.noteCurrent
    }
  },
  methods: {
    ...mapMutations(['updateNote', 'removeNote', 'writeNoteCurrent']),
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
      this.$router.push({ name: 'Main' })
    },
    undoChangeNote () {
      const note = this.notesList[this.index]
      this.writeNoteCurrent(note)
    },
    changeEditTodoList () {
      this.toggleEditTodoList()
    },
    toggleEditTodoList () {
      this.todoList.mutable = !this.todoList.mutable
    },
    modalAccept (modal) {
      const handler = this.modalCurrentHandler
      if (handler) handler()
      modal.active = !modal.active
    },
    modalOpen (key = 'ok', handler = () => {}, args = []) {
      this.modals[key].active = true
      this.modalCurrentHandler = handler.bind(this, ...args)
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
