//  合并多个对象, 返回一个合并后对象(不改变原对象)
export function mergeObject(...objs) {
  let result = {}
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      // 检测result对象里面是否有key属性
      if(result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], obj[key])
      }else {
        result[key] = obj[key]
      }
    })
  })
  return result
}