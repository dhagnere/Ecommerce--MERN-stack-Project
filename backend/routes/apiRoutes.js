const express = require('express')
const app = express()
const productRoutes = require('./productRoutes')

//*list of all routes from api//

//in fact real route is api/products we use a middleware//
app.use('/products', productRoutes)
module.exports = app
