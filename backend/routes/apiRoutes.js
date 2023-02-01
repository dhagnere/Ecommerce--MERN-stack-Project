const express = require('express')
const app = express()
const productRoutes = require('./productRoutes')

app.use('/products', productRoutes)//in fact real route is api/products we use a middleware//

module.exports = app
