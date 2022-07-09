const { Router } = require('express')
const router = Router()
const Order = require('../models/order')

router.get('/', (req, res) => {
  res.json([])
})

router.get('/:orderid', (req, res) => {
  const id = req.params.orderid
  res.json({ message: id })
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