const stockService = require("../services/stock.service")
const utilFunction = require("../../../functions/utils")
const humps = require("humps")
require("dotenv").config();

const stockController = {
  async getStocks (req, res) {
    try {
      const allStocks = await stockService.getAll()

      res.json({
        success: true,
        data: allStocks
      })
    } catch (err) {
      console.error(`[GOT AN ERROR]: ${err.message}`);
      res.send(`[GOT AN ERROR]: ${err.message}`).status(500);
    }
  },

  async getStockById (req, res) {
    try {
      const payload = humps.camelizeKeys(req.params)
      const { id } = payload
      const stock = await stockService.getOne(id)

      res.json({
        success: true,
        data: stock
      })
    } catch (err) {
      console.error(`[GOT AN ERROR]: ${err.message}`);
      res.send(`[GOT AN ERROR]: ${err.message}`).status(500);
    }
  },

  async createStock (req, res) {
    try {
      const payload = humps.camelizeKeys(req.body)
      const { name, description, imgUrl, stockAmount, price, category } = payload
      const created = await stockService.createOne({ name, description, imgUrl, stockAmount, price, category })
      
      res.json({
        success: true,
        data: created
      })
    } catch (err) {
      console.error(`[GOT AN ERROR]: ${err.message}`);
      res.send(`[GOT AN ERROR]: ${err.message}`).status(500);
    }
  },

  async editStock (req, res) {
    try {
      const body = humps.camelizeKeys(req.body)
      const params = humps.camelizeKeys(req.params)
      const { id } = params
      const stock = utilFunction.removeUnuseData(body, ['name', 'description', 'imgUrl', 'stockAmount', 'price', 'category'])
      const edited = await stockService.updateOne(id, stock)

      res.json({
        success: true,
        data: edited
      })
    } catch (err) {
      console.error(`[GOT AN ERROR]: ${err.message}`);
      res.send(`[GOT AN ERROR]: ${err.message}`).status(500);
    }
  },

  async deleteStockById (req, res) {
    try {
      const params = humps.camelizeKeys(req.params)
      const { id } = params
      const deleted = await stockService.deleteOne(id)

      res.json({
        success: true,
        data: deleted
      })
    } catch (err) {
      console.error(`[GOT AN ERROR]: ${err.message}`);
      res.send(`[GOT AN ERROR]: ${err.message}`).status(500);
    }
  }
};

module.exports = stockController;
