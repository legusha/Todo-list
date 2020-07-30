<template>
  <div class="d-inline">
    <input
      :id="id"
      :checked="active"
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
  props: {
    active: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
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
