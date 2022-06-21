// const path = require('path')
const fs = require('fs') // file system

// console.log(path.join(__dirname, 'views'))

// fs.mkdir('images/icons', (err) => {
//   // Если есть ошибка
//   if(err) throw err // Выбросит ошибку и остановит работу файла 
//   console.log('папка images успешно создана')
// })

const obj = [
  {   name: 'Andrew', username: 'andrew' },
  {   name: 'Andrew 2', username: 'andrew2' },
  {   name: 'Andrew 3', username: 'andrew3' },
  {   name: 'Andrew 4', username: 'andrew4' },
  {   name: 'Andrew 5', username: 'andrew5' },
  {   name: 'Andrew 6', username: 'andrew6' },
  {   name: 'Andrew 7', username: 'andrew7' },
  {   name: 'Andrew 8', username: 'andrew8' },
  {   name: 'Andrew 9', username: 'andrew9' },
  {   name: 'Andrew 10', username: 'andrew10' },
  {   name: 'Andrew 11', username: 'andrew11' },
  {   name: 'Andrew 12', username: 'andrew12' },
  {   name: 'Andrew 13', username: 'andrew13' },
]

fs.writeFile(
  'images/text.txt', 
  JSON.stringify(obj, null, 4), 
  (err) => {
    if(err) throw err
    console.log('text.txt успешно перезаписан')
  }
)

// fs.readFile('images/text.txt', (err, data) => {
//   if(err) throw err
//   const arr = JSON.parse(data.toString())
//   arr.push({ name: 'Kushbak' })
//   console.log(arr)
//   // Нужно запушить свое имя в массив arr
//   // и новый обновленный массив сохранить в text.txt
// })

// fs.appendFile('images/text.txt', 'sasass', () => {
//   console.log('a')
// })














// const math = require('./math.js')
// const squareOfPI = require('./squareOfPI')

// console.log(math.PI)
// console.log(math.kvadrat(285))
// console.log(squareOfPI)

