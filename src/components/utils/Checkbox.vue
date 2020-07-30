<template>
  <div class="d-inline">
    <input
      :id="id"
      :checked="checked"
      :class="classes"
      class="checkbox"
      type="checkbox"
    >
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success'
    }
  },
  data () {
    return {
      baseClass: 'checkbox-'
    }
  },
  computed: {
    classes () {
      const classes = {}
      const color = `${this.baseClass}${this.type}`
      classes[color] = true
      return classes
    }
  }
}
</script>
