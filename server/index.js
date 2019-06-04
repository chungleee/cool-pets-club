// imports
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// server settings
const app = express()
const port = process.env.PORT || 3000
const { MONGO_URI } = require('./config/keys_dev')

// api routes
const usersRoutes = require('./routes/users')
const postsRoutes = require('./routes/posts')

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/users', usersRoutes)
app.use('/api/posts', postsRoutes)

// test route
app.get('/', (req, res) => {
  return res.json({ success: true })
})

// connections
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('>>> connected to mongoDB')
  })
  .catch(error => {
    console.error(error)
    process.exit()
  })
app.listen(port, () => {
  console.log(`>>> server running on http://localhost:${port}`)
})
