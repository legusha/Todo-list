export const ui = {
  props: {
    ui: {
      type: Object,
      default () {
        return {
          className: 'initial'
        }
      }
    }
  },
  computed: {
    uiClass () {
      const classes = {}
      const className = this.ui.className
      classes[className] = className
      return classes
    }
  }
}
