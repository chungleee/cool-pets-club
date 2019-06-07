const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { omitPassword } = require('../utils/utilities')
const { JWT_SECRET } = require('../config/keys_dev')

const auth = async (req, res, next) => {
  try {
    // check if token in header
    if (!req.header('Authorization')) {
      // if not - return error
      return res.status(400).json({ error: 'Please authenticate' })
    }
    // if yes - get token
    // if expired - return error
    const token = req.header('Authorization').replace('Bearer ', '')
    // decode token
    const decoded = await jwt.verify(token, JWT_SECRET)

    // find user by id
    let user = await User.findById(decoded.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    user = omitPassword(user.toObject(), 'password')
    req.user = user
    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json(error)
  }
}

module.exports.auth = auth
