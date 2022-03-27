export function reduce(arr, callback, initValue) {
  let result = initValue
  for(let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i)
  }
  return result
}