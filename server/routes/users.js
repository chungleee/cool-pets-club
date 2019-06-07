const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { auth } = require('../middleware/auth')
const { omitPassword } = require('../utils/utilities')
const { JWT_SECRET } = require('../config/keys_dev')

// @route GET /api/users/current
// @desc  Fetch current logged in user
// @acc   Private
router.get('/current', auth, async (req, res) => {
  const { user } = req
  try {
    return res.status(200).json(user)
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
    let user = await User.findOne({ email })
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

    // if pw match - sign token
    const payload = {
      id: user._id
    }

    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })

    // if pw match - return user
    user = omitPassword(user.toObject(), 'password')
    return res.status(200).json({ user, token })
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

// @route GET /api/users/:userId
// @desc  Fetch user by id
// @acc   Public (will be private)
router.get('/:userId', auth, async (req, res) => {
  const userId = req.params.userId
  try {
    console.log(req.user)
    let user = await User.findById(userId).populate('posts')
    // if user not found - return error
    if (!user) {
      res.status(404).json({ error: 'User not found' })
    }
    user = omitPassword(user.toObject(), 'password')
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
})

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

// @route DELETE /api/users/:userId
// @desc  Delete user by id
// @acc   Public (will be private)
router.delete('/delete', auth, async (req, res) => {
  // get user id from req.user
  const id = req.user._id
  try {
    // find user by id
    const user = await User.findByIdAndDelete(id)
    // if no user - return error
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    // else - delete
    return res.status(200).json({ deleted: true, user })
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

module.exports = router
