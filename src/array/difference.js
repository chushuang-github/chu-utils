// 获取arr1数组中有的元素，arr2数组里面没有的元素
export function difference(arr1, arr2 = []) {
  if(arr1.length === 0) {
    return []
  }
  if(arr2.length === 0) {
    return [...arr1]
  }
  return arr1.filter(item => !arr2.includes(item))
}