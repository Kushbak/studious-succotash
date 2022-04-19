// setTimeout(() => {     
//   // ждет ответа от какого то кода, занимает некоторое время
//   console.log('Выполнился таймаут')
// }, 0) // Выполняется последним после синхронных задач

// [].reduce((sum, item) => {

// }, 0)

// console.log({}/13) // NaN

// const user = new User() // экхх

// Javascript - однопоточный синхронный язык

// let user =  {}

// Синхронность, выполняется сразу при получении кода
// function someFunc() { 
//   // Не ждет
//   console.log(1)
// }

// let number = 1000

// someFunc()

//Асинхронность 
// setTimeout(() => {     
//   // ждет ответа от какого то кода, занимает некоторое время
//   console.log(1)
// }, 0)


// console.log('Какое то действие')


// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }


// Event Loop


// 12312313 => someCalculation(12312313)

// Promise - асинхронный код, имеет 3 состояния - 
// pending = ожидание
// fullfilled = выполнился успешно
// rejected = безуспешно

// let someAsyncValue = new Promise((resolve, reject) => {
//   let isFinished = false
//   if(isFinished) {
//     resolve(1)
//   } else {
//     reject('Потому что isFinished не положительное значение')
//   }
// })

// console.log(someAsyncValue)

// someAsyncValue.then((data) => { // then игнорируется при не успещном запросе
//   console.log('Выполнился успешно', data)
// }).catch((err) => { // catch игнорируется при успещном запросе
//   console.log('Выполнился не успешно', err)
// })

// let userData

{/* <data>
  <fact>liunrvnarln nekrnvlaierunvli unraiwufnalirunflireun</fact>
  <length>97</length>
</data> */}

// Promise - микрозадача
// setTimeout - макрозадача
// Микрозадачи выполняются раньше макрозадач

// fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//   .then(res => res.json()) // Преобразование ответа в json
//   .then((data) => {  // Получение ответа от предыдущего then и обработка data
//     console.log(data)
//   })
//   .catch((err) => { // Если ошибка
//     console.log(err)
//   })


// console.log(2)

