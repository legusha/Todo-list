<template>
  <ul>
    <li
      v-for="(todo, index) in list"
      :key="index"
    >
      <Checkbox
        :id="checkboxId"
        :checked="todo.status"
        :label="todo.title"
        :type="checkboxType"
        @click="$emit('checkboxAction', {})"
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
      checkboxId: `checkbox-${this.id}`
    }
  }
}
</script>

<style scoped>

</style>
