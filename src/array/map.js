export function map(arr, callback) {
  // 声明一个空的数组
  let result = []
  // 变量数组
  for(let i = 0; i < arr.length; i++) {
    let value = arr[i]
    result.push(callback(value, i, arr))
  }
  // 返回结果
  return result
}