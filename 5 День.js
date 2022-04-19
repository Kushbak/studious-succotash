// Циклы for, решение задачек

// for (let i = 0; i < 10; i++) {

// }

// for (объявление счетчика; условие; итерация) {
//   действия;
// }




// 1. Напишите функцию которая принимает число n и выводит в консоль массив, в котором по очереди все числа до n
// function first(num) {
//     let result = []
//     for(let i = 0; i <= num; i++) {
//         result.push(i)
//     }
//     console.log(result)
// }
// first(5)

// 2. Напишите функцию которая принимает массив чисел и выводит в консоль самое маленькое и самое большое число из этого массива
// function second(arr) {
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     console.log(min, max)
// }

// function second(arr) {
//     let min = arr[0]
//     let max = arr[0]
//     arr.forEach((item) => {
//         if(item < min) {
//             min = item
//         }
//         if(item > max) {
//             max = item
//         }
//     })
//     console.log(min, max)
// }

// let aaaaaaaaa = [2,5,1,31,12, 100000, -1111, -99999999, 100000000000000, 214125, 1512]
// second(aaaaaaaaa)

// 3. Напишите функцию которая принимает сомы и конвертирует их в доллары)
// function third(som) {
//     let dollars = 95
//     let result = som / dollars
//     console.log(result.toFixed(3))
// }
// third(1000)

// 4. Напишите функцию, которая принимает 2 числа и выводит в консоль четные числа между ними
// function fourth(num1, num2) {
//     for (let i = num1; i <= num2; i++) {
//         if(i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// fourth(11, 20)

// let testArr = [12312, 1231, 412, 22, 1, 111]
// second(testArr)


// let numb = 'str asd as da sd'
// let arr = numb.slice()

// console.log(numb)
// let arr = [123, 111, -1, 123, 43635, 112, 777]
// let arr2 = arr.map((item) => { // .map = модификация элементов и возврат модифицированного массива
//     return item / 2
// })
// let arr3 = arr.filter((item) => { // .filter фильтр массива, return true оставляет элемент в массивае, return false удаляет
//     return item % 1 === 0 && item < 0
// })

// console.log(arr3)