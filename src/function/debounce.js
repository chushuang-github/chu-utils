export function debounce(callback, delay) {
  let timer = null
  // 返回一个函数
  return function(...args) {
    // 清除定时器
    if(timer !== null) clearTimeout(timer)
    // 启动定时器
    timer = setTimeout(() => {
      // 执行回调函数
      callback.call(this, args)
      // 重置定时器变量
      timer = null
    }, delay)
  }
}