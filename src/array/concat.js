// 数组合并
export function concat(arr, ...args) {
  let result = [...arr]
  args.forEach(item => {
    if(Array.isArray(item)) {
      result.push(...item)
    }else {
      result.push(item)
    }
  })
  return result
}