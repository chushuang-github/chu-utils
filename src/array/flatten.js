// 数组深度扁平化
// 递归 + concat
export function flatten1(arr) {
  let result = []
  // 遍历数组
  arr.forEach(item => {
    if(Array.isArray(item)) {
      // 递归调用
      result = result.concat(flatten1(item))
    }else {
      result = result.concat(item)
    }
  })
  return result
}

// ... + some + concat
export function flatten2(arr) {
  // arr: [1, 2, [3, 4], [5, 6, [7, 8]]]
  // [].concat(1, 2, [3, 4], [5, 6, [7, 8]])
  // result初始值：[1, 2, 3, 4, 5, 6, [7, 8]]
  let result = [].concat(...arr)
  while(result.some(item => Array.isArray(item))) {
    result = [].concat(...result)
  }
  return result
}

// 递归 + some + concat
export function flatten3(arr) {
  return arr.reduce((result, item) => {
    if(Array.isArray(item)) {
      return result.concat(flatten3(item))
    }else {
      return result.concat(item)
    }
  }, [])
}