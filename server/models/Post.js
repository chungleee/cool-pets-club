const mongoose = require('mongoose')
const { Schema, SchemaTypes, model } = mongoose

const postSchema = new Schema(
  {
    caption: {
      type: String
    },
    url: {
      type: String,
      required: true
    },
    uploader: {
      type: SchemaTypes.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

module.exports = Post = model('Post', postSchema)
