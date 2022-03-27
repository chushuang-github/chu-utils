// 创建Fn构造函数的实例对象
// new 内部做了什么事情
export function newInstance(Fn, ...args) {
  // 创建一个新的对象
  let obj = {}
  // 修改函数内部this，并且返回
  const result = Fn.apply(obj, args)
  // 如果函数执行返回的是对象类型，就直接返回这个对象
  if(result instanceof Object) {
    return result
  }
  // 改变原型
  obj.__proto__ = Fn.prototype
  return obj
}