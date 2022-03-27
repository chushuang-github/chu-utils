// 函数引用丢失，循环引用出错
export function deepClone1(target) {
  return JSON.parse(JSON.stringify(target))
}

// 函数属性不会丢失，循环引用出错
export function deepClone2(target) {
  if(target !== null && typeof target === "object") {
    let result = Array.isArray(target) ? [] : {}
    for(let key in target) {
      if(target.hasOwnProperty(key)) {
        result[key] = deepClone2(target[key])
      }
    }
    return result
  }else {
    return target
  }
}

// 函数属性不会丢失，循环引用不会出错
export function deepClone3(target, map = new Map()) {
  if(target !== null && typeof target === "object") {
    if(map.has(target)) {
      return map.get(target)
    }
    let result = Array.isArray(target) ? [] : {}
    map.set(target, result)
    for(let key in target) {
      if(target.hasOwnProperty(key)) {
        // 需要将map传入
        result[key] = deepClone3(target[key], map)
      }
    }
    return result
  }else {
    return target
  }
}

// 使用forEach遍历数组，使用Object.keys+forEach遍历对象，提高代码性能
// for...in会遍历对象原型上面的属性，性能比较低
export function deepClone4(target, map = new Map()) {
  if(target !== null && typeof target === "object") {
    if(map.has(target)) {
      return map.get(target)
    }
    let result = Array.isArray(target) ? [] : {}
    map.set(target, result)
    if(Array.isArray(target)) {
      target.forEach((item, index) => {
        result[index] = deepClone4(item, map)
      })
    }else {
      Object.keys(target).forEach(key => {
        result[key] = deepClone4(target[key], map)
      })
    }
    return result
  }else {
    return target
  }
}