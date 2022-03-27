// 检测一个对象是否为函数的实例
export function myInstanceOf(obj, Fn) {
  // 获取obj的隐式原型对象
  let proto = obj.__proto__
  // 遍历原型链
  while(proto) {
    if(Fn.prototype === proto) {
      return true
    }
    proto = proto.__proto__
  }
  return false
}