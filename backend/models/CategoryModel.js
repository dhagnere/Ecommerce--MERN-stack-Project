const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: 'Catégorie par défault' },
  Image: { type: String, default: '/images/tablets-category.jpg' },
  attrs: v[{ key: { type: String, value: [{ type: String }] } }],
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category
