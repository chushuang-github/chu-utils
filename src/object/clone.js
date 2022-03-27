export function clone1(target) {
  if(Array.isArray(target)) {
    return [...target]
  }else if(target !== null && typeof target === "object") {
    return {...target}
  }else {
    return target
  }
}

export function clone2(target) {
  if(target !== null && typeof target === "object") {
    let result = Array.isArray(target) ? [] : {}
    for(let key in target) {
      // 判断当前对象身上是否有该属性
      if(target.hasOwnProperty(key)) {
        result[key] = target[key]
      }
    }
    return result
  }else {
    return target
  }
}