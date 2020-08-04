export default {
  replaceText (value, maxSymbol) {
    const startValueIndex = 0
    if (!value) return ''
    if (value.length >= maxSymbol) {
      return `${value.substring(startValueIndex, maxSymbol)}...`
    }
    return value
  }
}
