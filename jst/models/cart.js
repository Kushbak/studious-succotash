const { Schema, model } = require('mongoose')

const cartSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    requried: true
  },
  count: {
    type: Number,
    required: true
  }
},{
  versionKey: false,
  
})

module.exports = model('Cart', cartSchema)