
function someAsyncFunc2() {
  return fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json()) // Преобразование ответа в json
    .then((data) => {  // Получение ответа от предыдущего then и обработка data
      console.log('promise', data)
    })
    .catch((err) => { // Если ошибка
      console.log(err)
    })
}
async function someAsyncFunc() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = res.json()
    console.log('async await', data)
}
// someAsyncFunc2()
// someAsyncFunc()
// async function someAsyncFunc() {
//   const response = await someAsyncFunc()
//   console.log(1)
// }


// 2xx - хорошо
//  200 - успешно получил данные
//  201 - успешно создал данные

// 3xx - редирект
// 4хх - ошибки
  // 401 - не авторизован
  // 402 - не помню
  // 403 - доступ запрещен
  // 404 - страница не найдена

// 500 - ошибка сервера
