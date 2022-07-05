const express = require('express') // обращение к глобальным
const bodyParser = require('body-parser')
const app = express() // Создание экземпляра для сервера
const { getUsers, getUserByUsername, updateUser, addUser } = require('./users') // обращение к локальным 
const fs = require('fs')
const multer = require('multer')
const upload = multer()

// index.html
app.set('views', './neviews')
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/images', express.static('img'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  const usersFromDataBase = getUsers()
  res.render(
    'index',
    {
      users: usersFromDataBase,
      netitle: 'Верстка из Handlebars',
      lengthOfUsers: usersFromDataBase.length
    }
  )
})
// /:paramsName

app.get('/createUser', (req, res) => {
  res.render('createUser')
})

app.put('/api/user/:username', (req, res) => {
  console.log(req.params.username)
  const user = getUserByUsername(req.params.username)
  if(!user) return res
    .status(404)
    .json({ message: `Пользователя ${req.params.username} не существует` })

  updateUser(user.username, { ...req.body })

  return res.status(200).json({ message: 'Пользователь успешно обновлен' })
})

app.post('/createUser', upload.none(), (req, res) => {
  const newUser = req.body
  addUser(newUser)
  res.status(201).json({ message: 'Пользователь успешно создан' })
})

// Написать гет запрос с рендером createUser - готово
// Написать пост запрос - готово
// Подключить multer к запросу - готово
// Получить body и сохранить в переменную - готово
// Эту переменную добавить в базу данных с помощбью метода - готово
// Возвратить статус 201 с сообщением об успешном запросе - готово

app.get('*.png', (req, res) => {
  res.download('./img/' + req.path, 'virus.exe')
})

app.get('/:username', (req, res) => {
  const param = req.params.username
  const user = getUserByUsername(param)
  let img = fs.existsSync('./img/' + user.username + '.png')

  if(img) {
    user.avatar = 'http://localhost:3000/images/' + user.username + '.png'
  }

  res.render('user', { user: user })
})

app.listen(3000, () => {
  console.log('server is running on localhost:3000')
})