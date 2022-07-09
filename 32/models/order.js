const { model, Schema } = require('mongoose')

const orderSchema = new Schema({
  name: {
    type: String
  },
  img: {
    type: String,
    required: true
  }
})

module.exports = model('Order', orderSchema)