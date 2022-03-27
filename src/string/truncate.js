// 功能: 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
export function truncate(str, size) {
  return str.length > size ? str.slice(0, size) + "..." : str
}