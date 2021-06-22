const express = require('express')
const stockController = require('./controllers/stock.controller')
const router = express.Router()

router.get('/', stockController.getStocks)
router.get('/:id', stockController.getStockById)
router.post('/', stockController.createStock)
router.put('/:id', stockController.editStock)
router.delete('/:id', stockController.deleteStockById)

module.exports = router