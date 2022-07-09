const { Router } = require('express')
const router = Router()
const Order = require('../models/order')

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()

    res.json(orders)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const order = new Order({
      ...req.body
    })
    await order.save()
    console.log('order', order)
    res.status(201).json({ message: 'Новый товар создан!' })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router