const router = require('express').Router()
const Post = require('../models/Post')

// @route POST /api/posts/create
// @desc  Create a new post
// @acc   Public - will require auth
router.post('/create', async (req, res) => {
  const { caption, url } = req.body
  try {
    // create new post
    let newPost = await new Post({
      caption,
      url
    })
    // save
    newPost = await newPost.save()

    return res.status(200).json(newPost)
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

// @route GET /api/posts/:postI
// @desc  Fetch post by id
// @acc   Public - will require auth
router.get('/:postId', async (req, res) => {
  // get post id from params
  const postId = req.params.postId
  try {
    // query find post by id
    const post = await Post.findById(postId)
    // if !post - return error
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }
    // if post - return post
    return res.status(200).json(post)
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

// @route GET /api/posts/
// @desc  Fetch all posts
// @acc   Public - will require auth
router.get('/', async (req, res) => {
  try {
    // find posts
    const posts = await Post.find()
    // if no post - return error
    if (!posts) {
      return res.status(404).json({ error: 'Something went wrong' })
    }
    // return posts array
    return res.status(200).json(posts)
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

module.exports = router
