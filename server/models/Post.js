const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    caption: {
      type: String
    },
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = Post = mongoose.model('Post', postSchema)
