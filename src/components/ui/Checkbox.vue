<template>
  <div class="d-inline checkbox-wrap">
    <input
      :id="id"
      :checked="checked"
      :class="concatClass"
      class="checkbox"
      type="checkbox"
    >
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
import { ui } from '@/mixin'
export default {
  name: 'Checkbox',
  mixins: [ui],
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
