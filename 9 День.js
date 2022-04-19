// this
// for loop

// var getConcatenation = function (nums) {
//     const ans = [1, 3, 5, 1, 3, 5];
//     for (i = 0;i < nums.length; i++) {
//         ans[i] = nums[i];
//         ans[i + nums.length] = nums[i];
//     }
//     console.log(ans);
// };
// getConcatenation([1, 3, 5])

// const abc = ['a', 'b', 'c', 'd', 'e']

// const modifiedAbc = abc.map((item) => {
//     return { value: item }
// })

// let modifiedAbc = []
// abc.forEach((item) => {
//     modifiedAbc.push(item + ' 1')
// })
// console.log(modifiedAbc)

// let arr = ['23', '56', '11', '99', '1215161']

// let total = arr.reduce((tot, item) => {
//     return '235611991215161'
// }, '')

// let user = {
//     id: '123',
//     name: 'Manas'
// // }
// let id = '123'
// let name1 = 'Manas'

// let obj = {
//     name1: id
// }

// let copyObj = {
//     ...obj,
//     age: 99,
// }

// let arr = [1,2,3]
// let copyArr = [0, 1, ...arr, 5]

// console.log(copyObj)
// console.log(copyArr)

// const users = [
//     { id: "1", name: "John" },
//     { id: "2", name: "Anna" },
//     { id: "3", name: "Kate" },
// ]

// const usernamesById = users.reduce(function (result, user) {
//     return {
//         ...result,
//         [user.id]: user.name, // [ключ = user.id]: значение = user.name
//     }
// }, {})

// console.log(usernamesById)
  // { '1': 'John', '2': 'Anna', '3': 'Kate' }


  // ['1', '3', '2', '1']
  const number = 1231
  
  const stringNumber = String(number) // 1231 ->"1231"
  const stringNumber2 = number + '' // 1231 ->"1231"
  
  const numberString = Number(stringNumber) // "1231" -> 1231
  const numberString2 = +stringNumber // "1231" -> 1231
  
  String(number).split('').reverse()
  
let arr = ['1', '2', '3', '1']
// reverse loop
for(let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}

'abcdefg' === 'gfedcba'
