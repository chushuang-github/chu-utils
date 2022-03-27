export function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    if(!res) {
      return false
    }
  }
  return true
}