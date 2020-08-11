<template>
  <ul
    @click.prevent.stop="action($event)"
    class="todo-list p-0"
  >
    <li
      v-for="(todo, index) in list"
      :key="index"
      @mouseover="indexIconsAction = index"
      @mouseleave="indexIconsAction = null"
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
      <div v-if="mutable && indexIconsAction === index" class="d-inline ml-3">
        <Icon
          :symbol="icons.edit.symbol"
          :class-name="icons.edit.className"
          @action="iconActionEdit(index)"
          class="mr-3"
        ></Icon>
        <Icon
          :symbol="icons.remove.symbol"
          :class-name="icons.remove.className"
          @action="iconActionRemove(index)"
        ></Icon>
      </div>
    </li>
  </ul>
</template>

<script>
import Checkbox from '@/components/ui/Checkbox'
import Icon from '@/components/ui/Icon'

export default {
  name: 'ToDoList',
  components: {
    Checkbox,
    Icon
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
      missParents: ['ul', 'li', 'span'],
      titleMaxSymbol: 16,
      checkClassName: 'checkbox-success',
      indexIconsAction: null,
      icons: {
        edit: {
          symbol: 'fa fa-pencil',
          className: 'text-primary'
        },
        remove: {
          symbol: 'fa fa-times',
          className: 'text-danger'
        }
      }
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
    },
    iconActionEdit (index) {
      this.$emit('action:edit', { list: this.list, index })
    },
    iconActionRemove (index) {
      this.$emit('action:remove', { list: this.list, index })
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
