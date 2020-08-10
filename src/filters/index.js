export default {
  replaceText (value, maxSymbol) {
    const startValueIndex = 0
    const end = '...'
    if (!value) return ''
    if (value.length >= maxSymbol) {
      return `${value.substring(startValueIndex, maxSymbol)}${end}`
    }
    return value
  }
}
