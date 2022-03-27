// 功能: 如果给定的字符串是回文，则返回 true ；否则返回 false
export function palindrome(str) {
  let reverseStr = str.split("").reverse().join("")
  if(reverseStr === str) {
    return true
  }else {
    return false
  }
}