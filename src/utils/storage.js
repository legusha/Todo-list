class LocalStorage {
  constructor () {
    const proto = Object.getPrototypeOf(this)
    if (proto.constructor === LocalStorage) {
      throw new Error('Abstract class should not be instantiated')
    }
    this.storage = window.localStorage
  }

  read (key) {
    const error = JSON.stringify({ read: { key } })
    throw new Error(`Method is not implemented ${error}`)
  }

  write (value, key) {
    const error = JSON.stringify({ write: { key, value } })
    throw new Error(`Method is not implemented ${error}`)
  }

  delete (key) {
    const error = JSON.stringify({ delete: { key } })
    throw new Error(`Method is not implemented ${error}`)
  }

  clear () {
    throw new Error('Method is not implemented')
  }
}

class NoteStorage extends LocalStorage {
  #key = 'note-list'
  constructor (keyName) {
    super()
    this.#key = keyName
  }

  read (key = this.#key) {
    const res = this.storage.getItem(key)
    if (res) {
      return JSON.parse(res)
    }
    return []
  }

  write (value = '', key = this.#key) {
    this.storage.setItem(key, JSON.stringify(value))
    return this
  }

  delete (key = this.#key) {
    this.storage.removeItem(this.#key)
    return this
  }

  clear () {
    this.storage.clear()
    return this
  }
}

export {
  NoteStorage
}
