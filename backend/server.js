const { request } = require('express')
const express = require('express')
const app = express()
const port = 3001

const apiRoutes= require("./routes/apiRoutes")

app.get('/',(req, res)=> {
  res.json({mesage : "API running..."})
})

/*accès à l'APIredirige vers l'apiRoutes*/
app.use('/api' , apiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

