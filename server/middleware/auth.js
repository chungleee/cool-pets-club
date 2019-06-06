const jwt = require('jsonwebtoken')
const User = require('../models/User')
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
    console.log('decoded', decoded)

    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json(error)
  }
}

module.exports.auth = auth
