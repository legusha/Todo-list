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
    ]
  },
  getters: {
    notesList: state => state.notesList
  },
  mutations: {
  }
}
