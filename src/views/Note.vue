<template>
  <section class="container note-wrap">
    <div class="card mb-3 note">
      <div class="card-title note-title text-left d-flex align-center justify-between bg-secondary">
        <h3 class="m-0">{{note.name | replaceText(noteNameMaxSymbol)}}</h3>
        <div class="note-title-action">
          <Icon
            :symbol="icon.edit"
            @action="iconAction"
            class="text-primary mr-2"
          ></Icon>
          <Icon
            :symbol="icon.remove"
            @action="iconAction"
            class="text-danger"
          ></Icon>
        </div>
      </div>
      <div class="card-body note-body">
        <ToDoList
          :id="id.toString()"
          :list="note.todoList"
          :mutable="todoList.mutable"
          :checkboxType="todoList.checkboxType"
          @action="toDoListAction"
        ></ToDoList>
        <p v-if="note.todoList.length === 0" class="m-0">Empty todo list</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Note',
  data () {
    return {
      todoList: {
        mutable: true,
        checkboxType: 'success'
      },
      noteNameMaxSymbol: 36,
      icon: {
        edit: '&#9998;',
        remove: '&#10539;'
      }
    }
  },
  computed: {
    ...mapGetters(['notesList']),
    id () {
      const radix = 10
      return parseInt(this.$route.params.id, radix) - 1
    },
    note () {
      return this.notesList[this.id]
    }
  },
  methods: {
    toDoListAction (list = []) {
      console.log(list)
    },
    iconAction () {
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
