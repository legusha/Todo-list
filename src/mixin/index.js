export const ui = {
  props: {
    className: {
      type: String | Array,
      default: ''
    }
  },
  computed: {
    classMap () {
      const classMap = {}
      const typeString = typeof this.className === 'string'
      const typeArray = Array.isArray(this.className)
      if (typeString) {
        const className = this.className
        classMap[className] = className
        return classMap
      }
      if (typeArray) {
        this.className.forEach(name => {
          classMap[name] = name
        })
        return classMap
      }
    }
  }
}
