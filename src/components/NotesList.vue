<template>
  <div class="d-flex justify-between flex-wrap notes-list">
    <div
      v-for="(note, i) in list"
      :key="i"
      class="card mb-3 note"
    >
      <div class="card-title note-title">
        <h3 class="m-0">{{note.name}}</h3>
      </div>
      <div class="card-body note-body">
        <ul>
          <li
            v-for="(todo, index) in note.todoList"
            :key="index"
          >
            <Checkbox
              :active="todo.status"
              :id="'checkbox-' + i"
              :label="todo.title"
              :type="checkboxType"
            >
            </Checkbox>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/utils/Checkbox'
export default {
  name: 'NotesList',
  components: {
    Checkbox
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      checkboxType: 'success'
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
