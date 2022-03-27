// 功能: 生成一个倒序的字符串
export function reverseString(str) {
  // 将字符串变成数组
  // let arr = [...str]
  let arr = str.split("")
  // 翻转数组
  arr.reverse()
  // 将数组拼接成字符串并返回
  return arr.join("")
}