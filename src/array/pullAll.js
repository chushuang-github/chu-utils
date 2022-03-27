// 删除数组中的元素(删除的元素放在数组里面)，会改变原数组，返回被删除的元素
export function pullAll(arr, args) {
  // 保存删除的元素
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(args.includes(arr[i])) {
      // 保存元素
      result.push(arr[i])
      // 删除元素
      arr.splice(i, 1)
      // 下标自减
      i--
    }
  }
  return result
}