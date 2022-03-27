export function throttle(callback, wait) {
  // 定义开始时间
  let start = 0
  // 结果是一个返回函数
  return function(...args) {
    // 定义结束时间
    let current = Date.now()
    if(current - start >= wait) {
      callback.apply(this, args)
      start = current
    }
  }
}