// console.log('git')

// Отправка измененных данных по очереди в консоли
// git status --- Статус текущего локального репозитория
// git add . --- Добавление всех измененных файлов на отправку
// git commit -m "какое-то сообщение" --- привязка измененных файлов к сообщению 
// git push --- отправка данных на удаленный репозиторий
// 
// Только для получения
// git pull --- получение данных с удаленного репозитория
// 
// git clone <ССЫЛКА НА РЕПОЗИТОРИЙ> --- склонировать репозиторий себе 









// Ошибка при обращении к переменной
// (опечатка, неправильное название, несуществование)
// Reference Error 
// let usernamee = 'Kushbak'
// console.log(username)

// SyntaxError: Ошибка при написании синтаксиса, кода самого js
// (скобки, циклы, условия, названия ключевых слов)
// if (true) 
//   console.log(1)
// }

// TypeError: Когда неправильно пользуемся переменными
// let someVar
// console.log(someVar)
// someVar.push(1)
// Cannot read property 'push' of undefined

// {
  // age: 20,
  // gender: male,
  // names: {
  //   first: '',
  //   last: '',
  //   middle: ''
  // },
  // location: America,
// }
const changeNameOfUser = (user, newName) => {
  let copyOfUser = {...user}
  copyOfUser.first = newName
  debugger // точка остановки для просмотра внутренности кода
  return copyOfUser
}
const me = {
  age: 20,
  gender: 'male',
  first: 'Kushbak',
  last: 'Mamytov',
  middle: '',
  location: 'America',
}

let { age } = me

// console.log(age)

// console.log(
  // changeNameOfUser(me, 'Amantur')
// )
let i = 0
while(i < 10) {
  i++
  debugger
}

1 + '1'

'1,2,3,4'
console.log([1,2,3,4].toString())





