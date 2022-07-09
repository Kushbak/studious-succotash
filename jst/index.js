
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const orderRoutes = require('./routes/order')
const cartRoutes = require('./routes/cart')
const URI = "mongodb+srv://kushbak:12345@cluster0.dcknien.mongodb.net/?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/orders', orderRoutes)
app.use('/cart', cartRoutes)

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