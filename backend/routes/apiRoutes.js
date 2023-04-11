const express = require('express')
const app = express()
const productRoutes = require('./productRoutes')
const categoryRoutes = require('./categoryRoutes')
const orderRoutes = require('./orderRoutes')
const userRoutes = require('./userRoutes')

//*list of all routes from api//

//in fact real route is api/products we use a middleware//
app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.use('/orders', orderRoutes)
app.use('/users', userRoutes)

module.exports = app
