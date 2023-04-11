const connectDB = require('../config/db')
connectDB()

const categoryData = require('./categories')
const productData = require('./products')
const reviewData = require('./reviews')
const userData = require('./users')
const orderData = require('./orders')

const Category = require('../models/CategoryModel')
const Product = require('../models/ProductModel')
const Review = require('../models/ReviewModel')
const User = require('../models/UserModel')
const Order = require('../models/OrderModel')

const importData = async () => {
  try {
    await Category.collection.dropIndexes()
    await Product.collection.dropIndexes()
    await Review.collection.dropIndexes()
    await User.collection.dropIndexes()
    await Order.collection.dropIndexes()

    await Category.deleteMany({})
    await Product.deleteMany({})
    await Review.deleteMany({})
    await User.deleteMany({})
    await Order.deleteMany({})

    await Category.insertMany(categoryData)
    await User.insertMany(userData)
    await Order.insertMany(orderData)

    const reviews = await Review.insertMany(reviewData)

    //on parcours l'array de produits et on ajoute les reviews correspondantes
    const sampleProducts = productData.map((product) => {
      reviews.map((review) => {
        product.reviews.push(review._id)
      })
      return { ...product }
    })

    await Product.insertMany(sampleProducts)

    console.log('Seeder data imported!')
    process.exit()
  } catch (error) {
    console.error("Erreur los de l'importation des données du seeder !", error)
    process.exit(1)
  }
}

importData()
