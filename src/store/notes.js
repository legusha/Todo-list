import { NoteStorage } from '@/utils/storage'

const noteStorageKeyName = 'note-list'
const noteStorage = new NoteStorage(noteStorageKeyName)

const exampleNoteList = [
  {
    name: 'My future plans',
    todoList: [
      {
        title: 'Learn Node.js',
        status: false
      },
      {
        title: 'Learn PHP',
        status: false
      },
      {
        title: 'Learn Laravel',
        status: false
      }
    ]
  }
]

if (noteStorage.read().length === 0) {
  noteStorage.write(exampleNoteList)
}

export default {
  state: {
    notesList: noteStorage.read(),
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
      noteStorage.write(state.notesList)
    },
    removeNote (state, { index }) {
      state.notesList.splice(index, 1)
      noteStorage.write(state.notesList)
    },
    updateNote (state, { index, note }) {
      state.notesList.splice(index, 1, note)
      noteStorage.write(state.notesList)
    },
    writeNoteCurrent (state, note) {
      note = JSON.parse(JSON.stringify(note)) // disable reactivity
      state.noteCurrent = note
    }
  }
}
