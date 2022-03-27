// 组合寄生式继承
function create(proto) {
  function Fn() { }
  Fn.prototype = proto
  return new Fn()
}

export function extend(Child, Parent) {
  Child.prototype = create(Parent.prototype)
  Child.prototype.constructor = Child
}