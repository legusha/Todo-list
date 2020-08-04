export const ui = {
  props: {
    className: {
      type: String,
      default: 'initial'
    }
  },
  computed: {
    classMap () {
      const classMap = {}
      const className = this.className
      classMap[className] = className
      return classMap
    }
  }
}
