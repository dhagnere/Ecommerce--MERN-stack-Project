const connectDB = require('../config/db')
connectDB()

const categoryData = require('./categories')
const productsData = require('./products')

const Category = require('../models/CategoryModel')
const Product = require('../models/ProductModel')

const importData = async () => {
  try {
    await Category.deleteMany({})
    await Category.insertMany(categoryData)
    await Product.deleteMany({})
    await Product.insertMany(productsData)
    console.log('Seeder data imported!')
    process.exit()
  } catch (error) {
    console.error("Erreur los de l'importation des données du seeder !", error)
    process.exit(1)
  }
}

importData()
