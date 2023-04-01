//return the function call. Important all the database querries will be done here and results returned//
const Product = require('../models/ProductModel')

const getProducts = (req, res) => {
  return res.send('route pour gérer les produits')
}

module.exports = getProducts
