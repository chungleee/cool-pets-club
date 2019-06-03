const router = require('express').Router()
const User = require('../models/User')

// @route POST /api/users/create
// @desc  Create new user
// @acc   Public
router.post('/create', async (req, res) => {
  const { email, password } = req.body
  try {
    return res.json({ email, password })
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

module.exports = router
