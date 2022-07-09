const map = (arr, cb) => {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr))
  }

  return result
}

let testArr = [1,2,3,4,5,6,7,8,9]

// console.log(map(testArr, (item, i) => {
//   return {
//     id: i,
//     item,
//     name: `${item} ${i}`
//   }
// }))

const filter = (arr, cb) => {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    let a = cb(arr[i], i, arr)
    if(a) result.push(arr[i])
  }

  return result
}

// console.log(filter(testArr, (item, i) => item > 5))   

const reduce = (arr, cb, defaultValue) => {
  let acc = defaultValue
  for(let i = 0; i < arr.length; i++) {
    cb(acc, arr[i], i, arr)
    console.log(acc, arr[i])
  }

  return acc
}

console.log(reduce(testArr, (sum, item) => {
  sum = sum + item
}, 0))