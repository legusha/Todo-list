<template>
  <ul
    @click.stop="$emit('action', action($event))"
  >
    <li
      v-for="(todo, index) in list"
      :key="index"
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
  computed: {
    checkboxId () {
      return (index) => {
        return `checkbox-${this.id}-${index}`
      }
    }
  },
  methods: {
    action (event) {
      console.log(event)
      console.log(event.target)
      return {
        list: this.list
      }
    }
  }
}
</script>

<style scoped>

</style>
