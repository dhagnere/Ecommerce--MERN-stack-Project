const { request } = require('express')
const express = require('express')
const app = express()
const port = 3001

const apiRoutes= require("./routes/apiRoutes")

app.get('/',(req, res)=> {
  res.json({mesage : "API running..."})
})

app.use('/api' , apiRoutes)
//app.get('/api/products' , (req, res) => {
 // res.send('future route pour articles')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

