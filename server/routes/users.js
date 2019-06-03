const router = require('express').Router()
const User = require('../models/User')
const { omitPassword } = require('../utils/utilities')

// const omitPassword = function(object, field) {
//   delete object[field]
//   return object
// }

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
    // if don't exists - create new user
    let newUser = await new User({
      email,
      password
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
