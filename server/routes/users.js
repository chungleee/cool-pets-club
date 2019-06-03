const router = require('express').Router()

router.get('/test', (req, res) => {
  return res.json({ test: true })
})

module.exports = router
