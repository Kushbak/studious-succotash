// Виды функции
// function someFunc() {}
// const someFunc2 = () => {} 
// Способы объявления функции
// function someFunc3 () {}
// const someFunc4 = function(item, index) {}

async function someAsyncFunction() {
  console.log('Началось ожидание')
  const res = await wait(3) // await пишется до функции которую должны ожидать
  // Ожидание 3 секунды, ничего не выполняется
  // Через 3 секунды выполняется следующий код

  // await работает только с промисами
  // Три точки под await означает что никакого эффекта она не даст
  await setTimeout(() => {}, 1000) 

  console.log('Прошло какое то время и мы получили сообщение:' + res)
}
someAsyncFunction()

// Когда пишем async await мы говорим чтоб он прямо сейччас ждал и 
// не выполнял ничего в рамках этой функции 
// А при промисе - "Когда получишь, тогда и сделаешь"
function wait(operation) {
  return new Promise((res) => {
    setTimeout(() => {
      res(operation) 
    }, 3000)
  })
}

// const getSomeCalculation = async () => {
//   console.log('Просто сооббщение которое означает что функция началась')
//   let fortyFive = 45
//   console.log('Второе сообщение')
//   let getSomeSumOfVar = fortyFive + 100
//   console.log('Мы получили' + getSomeSumOfVar)
//   // типа очень сложная операция, которая занимает 3 секунды
//   const result = await wait(155+getSomeSumOfVar) 
//   console.log('Наше вычисление = ' + result)
// }

// getSomeCalculation()
// кАКОЙ ТО КОММЕНТАРИЙ


