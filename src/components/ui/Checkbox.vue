<template>
  <div class="d-inline checkbox-wrap">
    <input
      :id="id"
      :checked="checked"
      :class="classMap"
      class="checkbox"
      type="checkbox"
    >
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
import { classDynamic } from '@/mixin'
export default {
  name: 'Checkbox',
  mixins: [classDynamic],
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
  }
}
</script>
