const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.send('Route pour gérer les produits , exemple rechercher les produits')
})

module.exports= router