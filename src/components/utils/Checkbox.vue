<template>
  <div class="d-inline checkbox-wrap">
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
    prop: 'checked'
  },
  props: {
    checked: {
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
