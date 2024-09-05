const express = require('express');
const router = express.Router();

let posts = [
  { id: 1, title: "First Blog Post", excerpt: "This is the excerpt for the first blog post." },
  { id: 2, title: "Second Blog Post", excerpt: "This is the excerpt for the second blog post." },
];

// GET all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// GET a single post
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

// CREATE a new post
router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    excerpt: req.body.excerpt
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// UPDATE a post
router.put('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: 'Post not found' });

  post.title = req.body.title;
  post.excerpt = req.body.excerpt;
  res.json(post);
});

// DELETE a post
router.delete('/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Post not found' });

  posts.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
