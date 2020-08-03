<template>
  <form  @submit.prevent="noteAdd" class="p-4 border-secondary text-left d-flex justify-between">
    <input v-model="name" type="text"  class="input-primary input-big mr-4" placeholder="Please enter notes name">
    <button class="btn-outline-success btn-big text-black bg-white" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: 'NotesAdd',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    noteAdd () {
      if (this.name.length === 0) return
      this.$emit('noteAdd', this.name)
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>
