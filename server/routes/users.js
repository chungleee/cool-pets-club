const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { omitPassword } = require('../utils/utilities')

// @route POST /api/users/create
// @desc  Create new user
// @acc   Public
router.post('/create', async (req, res) => {
  const { email, password } = req.body
  try {
    // find if email exists
    const user = await User.findOne({ email })

    // if email exists - return error
    if (user) {
      return res.status(400).json({ error: 'Email is already in use' })
    }
    // salt & hash password
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(password, salt)

    // if don't exists - create new user
    let newUser = await new User({
      email,
      password: hash
    })
    // save and return document
    newUser = await newUser.save()
    // remove password
    newUser = omitPassword(newUser.toObject(), 'password')

    return res.status(200).json(newUser)
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

module.exports = router
