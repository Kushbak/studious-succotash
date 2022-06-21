// const express = require('express') // обращение к глобальным
// const app = express() // Создание экземпляра для сервера
const users = require('./users') // обращение к локальным 

users.addUser({ name: 'kushbak', username: 'kushbak' })
console.log(users.getUsers())

// Поменять пользователю с username andrew7 имя на James
// Удалить пользователя с username andrew


// app.listen(3000, () => {
//   console.log('Server is running on 3000 port')
// })