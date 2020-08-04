<template>
  <ul
    @click.prevent.stop="action($event)"
    class="todo-list p-0"
  >
    <li
      v-for="(todo, index) in list"
      :key="index"
      class="todo-list-item p-0 mb-2"
    >
      <Checkbox
        v-model="todo.status"
        :id="checkboxId(index)"
        :label="todo.title | replaceText(titleMaxSymbol)"
        :class="{'cursor-init': !mutable}"
        :class-name="checkClassName"
      >
      </Checkbox>
    </li>
  </ul>
</template>

<script>
import Checkbox from '@/components/ui/Checkbox'

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
    mutable: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      missParents: ['ul', 'li'],
      titleMaxSymbol: 16,
      checkClassName: 'checkbox-success'
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
    toggleItemStatus (index) {
      this.list[index].status = !this.list[index].status
    },
    action (event) {
      const exit = this.missParents.includes(event.target.tagName.toLowerCase()) || !this.mutable
      if (exit) return
      if (event.target?.control?.id) {
        const checkboxIndexArr = event.target.control.id.split('-')
        const checkboxIndex = parseInt(checkboxIndexArr[checkboxIndexArr.length - 1])
        this.toggleItemStatus(checkboxIndex)
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
