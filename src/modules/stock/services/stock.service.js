const StockDocument = require("../models/stock.schema")
const statusEnum = require("../../../common/status.enum")

const stockService = {
  getAll () {
    return StockDocument.find({ status: statusEnum.ACTIVE })
  },

  getOne (id) {
    return StockDocument.find({ _id: id, status: statusEnum.ACTIVE})
  },

  createOne (payload) {
    return new StockDocument(payload).save()
  },

  async updateOne (id, payload) {
    return StockDocument.findOneAndUpdate({_id: id}, payload)
  },

  async deleteOne (id) {
    return StockDocument.findOneAndUpdate({_id: id}, { status: statusEnum.DELETED })
  }
}

module.exports = stockService