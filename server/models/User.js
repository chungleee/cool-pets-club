const mongoose = require('mongoose')
const { Schema, SchemaTypes, model } = mongoose

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    posts: [{ type: SchemaTypes.ObjectId, ref: 'Post' }]
  },
  {
    timestamps: true
  }
)

module.exports = User = model('User', userSchema)
