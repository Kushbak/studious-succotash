const { Router } = require('express')
const router = Router()
const Order = require('../models/order')

router.get('/', async (req, res) => {
  const orders = await Order.find()
  res.json(orders)
})

router.get('/:orderid', async (req, res) => {
  const order = await Order.findById(req.params.orderid)
  res.json(order)
})

router.post('/add', async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    img: req.body.img
  })

  await newOrder.save()

  res.json({ message: 'Товар успешно создан' })
})

module.exports = router