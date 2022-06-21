const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Вы на ГЛАВНОЙ СТРАНИЦЕ')
})
app.get('/orders', (req, res) => {
  res.send('Вы на Странице товаров')
})
app.get('/cart', (req, res) => {
  res.send('Вы на Странице корзины')
})
app.get('/api/cart', (req, res) => {
  res.json([
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
    { message: 'Какие то данные для запроса' },
  ])
})

app.post('/', (req, res) => {
  res.status(400).send('Произошла ошибка')

  // const body = req.body
  // console.log(req.body)
  // res.send(`Вваше сообщение: ${body}`)
})


app.listen(3000, () => {
  console.log('Server is running')
})