<template>
  <div class="d-flex justify-between flex-wrap notes-list p-4 border-secondary">
    <div
      v-for="(note, index) in list"
      :key="index"
      class="card mb-3 note"
    >
      <div class="card-title note-title text-left">
        <h3 class="m-0">{{note.name}}</h3>
      </div>
      <div class="card-body note-body">
        <ToDoList
          :id="index.toString()"
          :list="note.todoList"
          :mutable="todoList.mutable"
          :checkboxType="todoList.checkboxType"
          @action="toDoListAction"
        ></ToDoList>
      </div>
    </div>
    <Modal
      v-if="modalActive"
      :active="modalActive"
      @close="modalClose"
    >
      <template slot="header">
        <h2>Header modal</h2>
      </template>
      <template slot="body">
        <p>Content modal</p>
      </template>
      <template slot="footer">
        <h2>Footer modal</h2>
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
      modalActive: false
    }
  },
  methods: {
    toDoListAction (list = []) {
      console.log(list)
    },
    modalClose () {
      this.modalActive = false
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
    }
    @media(max-width: 768px) {
      .note {
        flex-basis: 100%;
      }
    }
  }
</style>
