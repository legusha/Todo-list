<template>
  <div class="d-flex justify-between flex-wrap notes-list p-4 border-secondary">
    <div
      v-for="(note, index) in list"
      :key="index"
      @mouseover="noteActive = index"
      @mouseleave="noteActive = null"
      class="card mb-3 note"
    >
      <div class="card-title note-title text-left d-flex align-center justify-between">
        <h3 class="m-0">{{note.name}}</h3>
        <div v-if="noteActive === index" class="note-title-action">
          <span class="text-primary cursor-point mr-2">&#9998;</span>
          <span @click="modalOpen(index)" class="text-danger cursor-point">&#10539;</span>
        </div>
      </div>
      <div class="card-body note-body">
        <ToDoList
          :id="index.toString()"
          :list="note.todoList"
          :mutable="todoList.mutable"
          :checkboxType="todoList.checkboxType"
          @action="toDoListAction"
        ></ToDoList>
        <p v-if="note.todoList.length === 0" class="m-0">Empty todo list</p>
      </div>
    </div>
    <Modal
      v-if="modalActive"
      :active="modalActive"
      @close="modalClose"
    >
      <template slot="header">
        <h2>Question:</h2>
      </template>
      <template slot="body">
        <h2>Are you sure you want to delete the note?</h2>
      </template>
      <template slot="footer">
        <div>
          <button type="button" class="btn-primary mr-4">Cancel</button>
          <button @click="$emit('noteRemove', noteRemoveIndex)" type="button" class="btn-success">Accept</button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'NotesList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      todoList: {
        mutable: false,
        checkboxType: 'success'
      },
      noteActive: null,
      noteRemoveIndex: null,
      modalActive: false
    }
  },
  methods: {
    toDoListAction (list = []) {
      console.log(list)
    },
    modalClose () {
      this.noteRemoveIndex = null
      this.modalActive = false
    },
    modalOpen (index) {
      this.noteRemoveIndex = index
      this.modalActive = true
    }
  }
}
</script>

<style scoped lang="scss">
  .notes-list {
    .note {
      flex-basis: 30%;
      align-self: stretch;
      align-content: stretch;
      .note-title-action {
        font-size: 22px;
      }
    }
    @media(max-width: 768px) {
      .note {
        flex-basis: 100%;
      }
    }
  }
</style>
