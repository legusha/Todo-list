<template>
  <form @submit.prevent="submit" class="p-4 border-secondary text-left d-flex justify-between">
    <input v-model="name" type="text"  class="input-primary input-big mr-4" :placeholder="placeholder">
    <button class="btn-outline-success btn-big text-black bg-white" type="submit">{{text}}</button>
  </form>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: 'Please enter notes name'
    },
    text: {
      type: String,
      default: 'Add'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      nameLocal: ''
    }
  },
  computed: {
    name: {
      get () {
        return this.value
      },
      set (val) {
        this.nameLocal = val
        this.$emit('input', val)
      }
    }
  },
  methods: {
    submit () {
      if (this.nameLocal.length === 0) return
      this.$emit('submit', this.nameLocal)
      this.name = ''
    }
  }
}
</script>
