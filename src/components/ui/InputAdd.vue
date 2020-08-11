<template>
  <form @submit.prevent="submit" class="p-4 border-secondary text-left d-flex justify-between">
    <input v-model="name" type="text"  class="input-primary input-big mr-4" :placeholder="placeholder">
    <button class="btn-outline-success btn-big text-black bg-white" type="submit">{{text}}</button>
  </form>
</template>

<script>
export default {
  name: 'InputAdd',
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
      name: this.value
    }
  },
  methods: {
    submit () {
      if (this.name.length === 0) return
      this.$emit('submit', this.name)
      this.name = ''
    }
  }
}
</script>
