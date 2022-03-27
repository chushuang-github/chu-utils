// 数组去重
export function unique1(arr) {
  let result = []
  arr.forEach(item => {
    if(result.indexOf(item) === -1) {
      result.push(item)
    }
  })
  return result
}

export function unique2(arr) {
  let result = []
  let obj = {}
  arr.forEach(item => {
    // 将item作为下标存储到对象里面
    if(!obj[item]) {
      obj[item] = true
      result.push(item)
    }
  })
  return result
}

export function unique3(arr) {
  let set = new Set(arr)
  // 下面两种方法都是ok的
  // return Array.from(set)
  return [...set]
}