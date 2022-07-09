const { Router } = require('express')
const router = Router()
const Cart = require('../models/cart')
const Order = require('../models/order')

router.get('/', async (req, res) => {
  try {
    const cart = await Cart.find().populate('order')

    res.json(cart)
  } catch (err) {
    console.log(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate('order')

    res.json(cart)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const order = await Order.findById(req.body.orderId).exec()
    console.log('order',order)
    const cartItem = new Cart({
      order: order,
      count: 1
    })
    await cartItem.save()
    console.log('cart', cartItem)
    res.status(201).json({ message: 'Товар добавлен в корзину!' })
  } catch (err) {
    console.log(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id)
    const toChange = {
      count: req.body.count
    }
    Object.assign(cartItem, toChange)
    await cartItem.save()

    res.json({message: 'Успешно обновлено', cartItem})
  } catch (err) {
    console.log(err)
  }
})

module.exports = router