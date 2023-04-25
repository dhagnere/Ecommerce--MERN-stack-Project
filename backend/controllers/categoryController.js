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

// @desc    Create new category
const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body
    if (!category) {
      res.status(400).send("La catégorie n'a pas été renseignée")
    }  
    const categoryExists = await Category.findOne({ name: category })
    if (categoryExists) {
      res.status(400).send('Cette catégorie existe déjà')
    } else {
      const categoryCreated = await Category.create({ name: category })
      res.status(201).send({ categoryCreated: categoryCreated })
    }
    
  } catch (err) {
    next(err)
  }
}

module.exports = { getCategories, newCategory }
