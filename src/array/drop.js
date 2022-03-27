// 得到当前数组过滤掉左边count个后剩余元素组成的数组
export function drop(arr, count = 1) {
  return arr.filter((item, index) => {
    return index >= count
  })
}