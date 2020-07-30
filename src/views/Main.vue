<template>
  <section class="container">
    <NotesList
      :list="noteList"
    ></NotesList>
  </section>
</template>

<script>
import NotesList from '@/components/NotesList'
export default {
  name: 'Main',
  components: {
    NotesList
  },
  data () {
    return {
      noteList: [
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: true,
              title: 'Todo'
            }
          ]
        },
        {
          name: 'Notes name',
          todoList: [
            {
              status: false,
              title: 'Todo'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
