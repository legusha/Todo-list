<template>
  <section class="container"></section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Note',
  computed: {
    ...mapGetters(['notesList'])
  }
}
</script>

<style scoped>

</style>
