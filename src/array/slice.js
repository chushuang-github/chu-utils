// 数组切片
export function slice(arr, start, end) {
  let result = []
  // 若arr数组长度为0
  if(!arr.length) {
    return []
  }
  // start临界条件
  start = start || 0
  if(start >= arr.length) {
    return []
  }
  // end临界条件
  end = end || arr.length
  if(end < start) {
    end = arr.length
  }
  
  for(let i = start; i < end; i++) {
    result.push(arr[i])
  }
  return result
}