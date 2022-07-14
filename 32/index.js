const mongoose = require('mongoose')
const express = require('express')
const app = express()
const URI = "mongodb+srv://kushbak:12345@cluster0.dcknien.mongodb.net/?retryWrites=true&w=majority";
const ordersRoutes = require('./routes/orders')
const cartRoutes = require('./routes/cart')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Вы получили это сообщение' })
})

app.use('/orders', ordersRoutes)
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