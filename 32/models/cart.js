const { model, Schema } = require('mongoose')

const cartSchema = new Schema({
  count: Number,
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',   
    required: true
  },
})

module.exports = model('Cart', cartSchema)