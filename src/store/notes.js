import { NoteStorage } from '@/utils/storage'

const noteStorageKeyName = 'note-list'
const noteStorage = new NoteStorage(noteStorageKeyName)
noteStorage.write({ A: 123 })
console.log(noteStorage.read())

export default {
  state: {
    notesList: [
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
        name: 'Notes name a very big name',
        todoList: [
          {
            status: true,
            title: 'Todo'
          }
        ]
      },
      {
        name: 'Notes name a very avery big big name and text',
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
            title: 'Its a very very big to do name and other text'
          }
        ]
      }
    ],
    noteCurrent: null
  },
  getters: {
    notesList: state => state.notesList,
    noteCurrent: state => state.noteCurrent
  },
  mutations: {
    addNote (state, { name }) {
      const newNote = {
        name,
        todoList: []
      }
      state.notesList.unshift(newNote)
    },
    removeNote (state, { index }) {
      state.notesList.splice(index, 1)
    },
    updateNote (state, { index, note }) {
      state.notesList.splice(index, 1, note)
    },
    writeNoteCurrent (state, note) {
      note = JSON.parse(JSON.stringify(note)) // disable reactivity
      state.noteCurrent = note
    }
  }
}
