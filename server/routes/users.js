const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { omitPassword } = require('../utils/utilities')

// @route POST /api/users/register
// @desc  Create new user
// @acc   Public
router.post('/register', async (req, res) => {
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

// @route GET /api/users/login
// @desc  Fetch user by email
// @acc   Public
router.get('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    // find user by email
    const user = await User.findOne({ email })
    // if user not found - return error
    if (!user) {
      return res.status(404).json({ error: 'Incorrect credentials' })
    }
    // if user found
    // compare passwords
    const isMatch = await bcrypt.compare(password, user.password)
    // if pw no match - return error
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect credentials' })
    }
    // if pw match - return user
    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

// @route DELETE /api/users/:userId
// @desc  Delete user by id
// @acc   Public (will be private)
router.delete('/:userId', async (req, res) => {
  const id = req.params.userId
  try {
    const user = await User.findByIdAndDelete(id)
    // if not found
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    // if found - return with success
    return res.status(200).json({ deleted: true, user })
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

module.exports = router
