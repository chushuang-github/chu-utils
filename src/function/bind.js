export function bind(Fn, obj, ...args1) {
  // 返回一个新的函数
  return function(...args2) {
    if(obj === undefined || obj === null) {
      obj = globalThis
    }
    obj.temp = Fn
    let result = obj.temp(...args1, ...args2)
    delete obj.temp
    return result
  }
}