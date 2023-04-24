const Category = require('../models/CategoryModel')

// @desc    Get all categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: 'asc' }).orFail()
    res.json(categories)
  } catch (eror) {
    next(error)
  }
}

module.exports = getCategories
