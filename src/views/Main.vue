<template>
  <section id="main" class="container">
    <div class="main-action text-right pb-4 mb-4">
      <button class="btn-success btn-big">Add</button>
    </div>
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
            },
            {
              status: false,
              title: 'Todo2'
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
