const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const stockRoute = require('./src/modules/stock/stock.route')
require('dotenv').config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//db config
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })

//ROUTER
app.use('/stock', stockRoute)

//Basic Route
app.get('/', (req, res) => {
  res.send('book-stock-manager-server is running...')
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`book-stock-manager-server is running on port ${PORT} ...`)
})

module.exports = app
