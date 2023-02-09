const express = require('express')
const router = express.Router()

const getProducts = require('../controllers/productController')

//if get is used on / then call the getProducts from productController//
router.get('/', getProducts)

module.exports = router
