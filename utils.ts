export const debounce = (callback: Function, delay: number) => {
  let timer
  return function () {
    const args = arguments
    const context = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      callback.apply(context, args)
    }, delay)
  }
}
