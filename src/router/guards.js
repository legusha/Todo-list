export default {
  note: (store, to, from, next) => {
    const isHasId = to.params?.id
    if (isHasId) {
      let id = parseInt(to.params.id) || false
      if (!id) {
        next({ name: 'Main' })
        return
      }
      const note = store.getters.notesList[--id]
      if (!note) {
        next({ name: 'Main' })
        return
      }
      next()
      return
    }
    next({ name: 'Main' })
  }
}
