export const ui = {
  props: {
    ui: {
      type: Object,
      default () {
        return {
          element: 'bg',
          color: 'initial'
        }
      }
    }
  },
  computed: {
    concatClass () {
      const classes = {}
      const ui = this.ui
      const color = `${ui.element}-${ui.color}`
      classes[color] = color
      return classes
    }
  }
}
