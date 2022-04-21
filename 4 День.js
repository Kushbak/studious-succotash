// let array =  [1, 5, -8, 13, 0, 111, -88, -1]
// let result = 0

// array.forEach((item) => {
//     if(item > 0) {
//         result = result + item
//     }
// })
// console.log(result)

// array.forEach((item) => {
//     if(item < 0) {
//         array2.push(item)
//     }
// })

// console.log(array2.length)


// let array = [1, 5, -8, 13, 0, 111, -88, -1]
// let result = 0
// array.forEach((item) => {
//     if(item < 0) {
//         result = result + 1
//     }
// })
// console.log(result)

// let array =  [1,2,3,4,5]
// let array2 = []

// array.forEach((item) => {
//     array2.push(item * item)
// })

// console.log(array2)

// let array = [1,2,3,4,5]


// а это объявление функции
// function название_функции(параметр1, параметр2) {
//   какоето действие
// }
// название_функции(аргумент1, аргумент2) <- это вызов функции

// function declaration
// function sum(a) {
//     let result = 0
//     a.forEach((item) => {
//         if(item < 0) {
//             result = result + 1
//         }
//     })
//     console.log(b)
// }
// console.log(result)
// sum([12, 1, -55, 123123, -77, 0, 1])
// sum([-1, -2, -3, -4 ,-5 , 6])

// function expression
// console.log(func2)

// function expression
// let func = function() {
//     console.log(1)
// }

// // function declaration
// function func2() {

// }

// // arrow function
// let func3 = () => {
//     console.log(3)
// }

// function min(a, b) {
//     if(a < b) {
//         return a
//     } else {
//         return b
//     }
// }
// min(1, 2)
// console.log(2 ** 5)

// циклы
function pow(x, n) {
    let i = 1
    let result = x
    while(i < n) {
        result = result * x
        i = i + 1
    }
    return result
}
console.log(pow(2, 5))


// array.forEach((item) => {

// })