const router = require('express').Router()
const { auth } = require('../middleware/auth')
const Post = require('../models/Post')
const User = require('../models/User')

// @route POST /api/posts/create
// @desc  Create a new post
// @acc   Private
router.post('/create', auth, async (req, res) => {
  const { caption, url } = req.body
  const userId = req.user._id
  try {
    // create new post
    let newPost = await new Post({
      caption,
      url,
      uploader: userId
    })
    // save
    newPost = await newPost.save()

    let user = await User.findById(userId)
    user.posts.push(newPost._id)
    await user.save()

    // return res.status(200).json(newPost)
    return res.status(200).json(newPost)
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

// @route GET /api/posts/:postI
// @desc  Fetch post by id
// @acc   Public - will require auth
router.get('/:postId', auth, async (req, res) => {
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
router.get('/', auth, async (req, res) => {
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

// @route PUT /api/posts/:postId
// @desc  Edit post by id
// @acc   Private
router.put('/:postId', auth, async (req, res) => {
  // get post id
  const postId = req.params.postId
  try {
    // init updates object
    const updates = {}
    // loop req.body
    for (const keys in req.body) {
      // if field not empty - push into updates obj
      if (req.body[keys].length > 0) {
        updates[keys] = req.body[keys]
      }
    }

    // find post by id
    // check if post uploader id matches with user id in req
    const post = await Post.findByIdAndUpdate(postId, updates).where({
      uploader: req.user._id
    })
    // if !post - return error
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    return res.status(200).json({ edited: true, post })
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

// @route DELETE /api/posts/:postId
// @desc  Delete post by id
// @acc   Public - will require auth
router.delete('/:postId', auth, async (req, res) => {
  // get post id from params
  const postId = req.params.postId
  try {
    // find post by id
    // check if post uploader id matches with user id in req
    const post = await Post.findByIdAndDelete(postId).where({
      uploader: req.user._id
    })

    // if !post - return error
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    // remove it from User.posts array
    // get user
    const user = await User.findById(req.user._id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    // remove post from array
    await user.posts.pull(postId)
    await user.save()

    return res.status(200).json({ deleted: true, post })
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
})

module.exports = router
