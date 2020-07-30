<template>
  <ul
    @click.prevent.stop="action($event)"
    class="todo-list"
  >
    <li
      v-for="(todo, index) in list"
      :key="index"
      class="todo-list-item p-0 mb-2"
    >
      <Checkbox
        v-model="todo.status"
        :id="checkboxId(index)"
        :label="todo.title"
        :type="checkboxType"
      >
      </Checkbox>
    </li>
  </ul>
</template>

<script>
import Checkbox from '@/components/utils/Checkbox'

export default {
  name: 'ToDoList',
  components: {
    Checkbox
  },
  props: {
    id: {
      type: String,
      require: true
    },
    list: {
      type: Array,
      default: () => []
    },
    checkboxType: {
      type: String,
      default: 'success'
    }
  },
  data () {
    return {
      missParents: ['ul', 'li']
    }
  },
  computed: {
    checkboxId () {
      return (index) => {
        return `checkbox-${this.id}-${index}`
      }
    }
  },
  methods: {
    toggleToDoStatus (index) {
      this.list[index].status = !this.list[index].status
    },
    action (event) {
      const exit = this.missParents.includes(event.target.tagName.toLowerCase())
      if (exit) return
      if (event.target?.control?.id) {
        const checkboxIndexArr = event.target.control.id.split('-')
        const checkboxIndex = parseInt(checkboxIndexArr[checkboxIndexArr.length - 1])
        this.toggleToDoStatus(checkboxIndex)
      }
      this.$emit('action', { list: this.list })
    }
  }
}
</script>

<style scoped lang="scss">
  .todo-list {
    .todo-list-item {
      list-style-type: none;
    }
  }
</style>
