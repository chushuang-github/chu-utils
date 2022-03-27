export function call(Fn, obj, ...args) {
  if(obj === undefined || obj === null) {
    // 浏览器环境globalThis为window，node环境globalThis为global
    obj = globalThis
  }
  // 为obj对象添加临时的方法
  obj.temp = Fn
  // 调用temp方法
  let result = obj.temp(...args)
  // 删除添加的temp方法
  delete obj.temp
  return result
}