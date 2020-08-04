export default {
  note (store, to, from, next) {
    const isHasId = to.params?.id
    if (isHasId) {
      const radix = 10
      let id = parseInt(to.params.id, radix) || false // if not parse to integer,expected false instead NaN
      const note = store.getters.notesList[--id]
      const isId = id === 0 ? true : id
      if (isId && note) {
        store.commit('writeNoteCurrent', note)
        next()
        return
      }
      next({ name: 'Main' })
      return
    }
    next({ name: 'Main' })
  }
}
