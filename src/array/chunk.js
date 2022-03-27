// 数组分块：将数组拆分成多个 size 长度的区块
export function chunk(arr, size = 1) {
  if(arr.length === 0) {
    return []
  }
  let result = []
  let temp = []
  arr.forEach(item => {
    if(temp.length === 0) {
      result.push(temp)
    }
    temp.push(item)
    if(temp.length === size) {
      temp = []
    }
  })
  return result
}