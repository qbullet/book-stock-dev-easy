const mongoose = require('mongoose')
const Schema = mongoose.Schema
const statusEnum = require('../../../common/status.enum')

const stockSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'default',
  },
  imgUrl: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  stockAmount: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0 
  },
  status: {
    type: String,
    default: statusEnum.ACTIVE,
  },
},{ timestamps: true })

const StockModel = mongoose.model('stock', stockSchema)
module.exports = StockModel
