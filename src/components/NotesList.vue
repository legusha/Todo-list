<template>
  <div class="d-flex justify-between flex-wrap notes-list">
    <div
      v-for="(note, index) in list"
      :key="index"
      class="card mb-3 note"
    >
      <div class="card-title note-title">
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
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList'
export default {
  name: 'NotesList',
  components: {
    ToDoList
  },
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
      }
    }
  },
  methods: {
    toDoListAction (list = []) {
      console.log(list)
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
