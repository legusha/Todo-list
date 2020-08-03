export default {
  note: (store, to, from, next) => {
    const isHasId = to.params?.id
    if (isHasId) {
      const radix = 10
      let id = parseInt(to.params.id, radix) || false
      if (!id) {
        next({ name: 'Main' })
        return
      }
      const note = store.getters.notesList[--id]
      if (!note) {
        next({ name: 'Main' })
        return
      }
      next({ props: { id, note } })
      return
    }
    next({ name: 'Main' })
  }
}
