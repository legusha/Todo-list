export const ui = {
  props: {
    ui: Object,
    default: {
      startClass: 'bg-',
      color: 'initial'
    }
  },
  computed: {
    concatClass () {
      const classes = {}
      const ui = this.ui
      const color = `${ui.startClass}${ui.color}`
      classes[color] = color
      return classes
    }
  }
}
