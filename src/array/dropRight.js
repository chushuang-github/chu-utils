// 得到当前数组过滤掉右边count个后剩余元素组成的数组
export function dropRight(arr, count = 1) {
  return arr.filter((item, index) => {
    return index < arr.length - count
  })    
}