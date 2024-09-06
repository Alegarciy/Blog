const express = require('express');
const router = express.Router();
const db = require('../database');

// GET all posts
router.get('/', (req, res) => {
  db.all('SELECT * FROM posts', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// GET a single post
router.get('/:title', (req, res) => {
  db.get('SELECT * FROM posts WHERE title = ?', [req.params.title], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(row);
  });
});

// CREATE a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, title, content });
  });
});

// UPDATE a post
router.put('/:title', (req, res) => {
  const { content } = req.body;
  db.run('UPDATE posts SET content = ? WHERE title = ?', [content, req.params.title], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json({ title: req.params.title, content });
  });
});

// DELETE a post
router.delete('/:title', (req, res) => {
  db.run('DELETE FROM posts WHERE title = ?', req.params.title, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(204).send();
  });
});

module.exports = router;
