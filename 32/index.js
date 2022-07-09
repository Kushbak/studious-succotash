const mongoose = require('mongoose')
const express = require('express')
const app = express()
const URI = "";
const ordersRoutes = require('./routes/orders')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Вы получили это сообщение' })
})

app.use('/orders', ordersRoutes)

async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(3000, () => {
      console.log('Server is running on port', 3000)
    })
  } catch (e) {
    console.log(e)
  }
}

start()