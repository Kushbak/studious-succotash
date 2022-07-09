const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  img: {
    type: String,
    requried: true
  }
})

module.exports = model('Order', orderSchema)