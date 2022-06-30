const express = require('express') // обращение к глобальным
const bodyParser = require('body-parser')
const app = express() // Создание экземпляра для сервера
const { getUsers, getUserByUsername, updateUser } = require('./users') // обращение к локальным 
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

app.put('/api/user/:username', (req, res) => {
  console.log(req.params.username)
  const user = getUserByUsername(req.params.username)
  if(!user) return res
    .status(404)
    .json({ message: `Пользователя ${req.params.username} не существует` })

  updateUser(user.username, { ...req.body })

  return res.status(200).json({ message: 'Пользователь успешно обновлен' })
})


// app.post('/api/user', upload.none(), (req, res) => {
//   console.log(req.body)
//   res.status(201)
// })

app.get('*.png', (req, res) => {
  res.download('./img/' + req.path, 'virus.exe')
})

app.get('/:username', (req, res) => {
  const param = req.params.username
  const user = getUserByUsername(param)
  // let img
  // try {
  //   img = fs.readFileSync('./img/' + user.username + '.png')
  // } catch {
  //   img = null
  // }
  let img = fs.existsSync('./img/' + user.username + '.png')

  if(img) {
    user.avatar = 'http://localhost:3000/images/' + user.username + '.png'
  }

  res.render(
    'user',
    {
      user: user
    }
  )
})

// Написать пост запрос на создание нового хобби
// Получить объект пользователя с помощью getUserByUsername
// Взять его массив hobbies и запушить туда новый хобби(req.body)
// обновить hobby этого пользователя с помощью метода updateUser
// Возвратить ответ с статусом 201 и с каким то сообщением об успехе


app.listen(3000, () => {
  console.log('server is running on localhost:3000')
})