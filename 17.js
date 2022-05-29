// let number2 = 20

// function someFunc() {
// }


// if(true) {
//   var number = 10 // var - функциональная область видимости
//   //  может выйти наружу блока {}\
//   // не может выйти наружу блока func() {}
//   let number2 = 10 // let - блочная область видимости,
//   // недоступен вне блока {} 
// }

// // блоки
// while() {}
// for() {}
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// console.log(number)



// // IIFE - Immidiately Invoked Function Expression
// (function() {
//   var number = 10

// })()




// function someFunc(num) {
//   if(num >= 100) {
//     return num // после return в функциях не работает
//   } 
//   return 'Число слишком маленькое'
// }

// function someFunc(num) {
//   if(num >= 100) return num
//   return 'Число слишком маленькое'
// }

// const returnSomeNum = (num) => num + 1000 // 

// someFunc(100)

// function firstNonConsecutive (arr) { // 0, 1, , 3, 4, 5,
//   for(let i = 0; i < arr.length; i++) {
//     if(cur === 2) {
//       continue
//     }
//     let cur = arr[i]
//     let prev = arr[i-1]
//     if(cur-1 !== prev) return cur
//   }
  
//   return null
// }

// console.log(
//   firstNonConsecutive([1,2,3,4, 5, 101, 102,])
// )

// continue в цикле переходит на след шаг
for(let i = 0; i < 10; i++) {
  if(i >= 5 && i <= 7) {
    break
  }
  console.log(i)
}