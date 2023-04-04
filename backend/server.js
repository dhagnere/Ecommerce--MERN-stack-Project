const { request } = require('express')
const express = require('express')
const app = express()
const port = 3001

const apiRoutes = require('./routes/apiRoutes')

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

//mongoDB connection
const connectDB = require('./config/db')
connectDB()

/*accès à l'APIredirige vers l'apiRoutes*/
app.use('/api', apiRoutes)

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error.message })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
