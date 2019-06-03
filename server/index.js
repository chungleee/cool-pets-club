const express = require('express')
const app = express()

const usersRoutes = require('./routes/users')

const port = process.env.PORT || 3000

app.use('/api/users', usersRoutes)

app.get('/', (req, res) => {
  return res.json({ success: true })
})

app.listen(port, () => {
  console.log(`>>> server running on http://localhost:${port}`)
})
