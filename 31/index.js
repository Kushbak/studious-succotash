const express = require('express') // обращение к глобальным
const bodyParser = require('body-parser')
const app = express() // Создание экземпляра для сервера
const { getUsers, getUserByUsername, updateUser } = require('./users') // обращение к локальным 


// index.html
app.set('views', './neviews')
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

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
app.get('/:username', (req, res) => {
  const users = getUsers()
  const param = req.params.username
  res.render(
    'user',
    {
      user: users.find(item => item.username === param)
    }
  )
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

app.listen(3000, () => {
  console.log('server is running on localhost:3000')
})