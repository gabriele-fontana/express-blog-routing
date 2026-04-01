const express = require('express');
const router = express.Router();

// GET /posts - List of posts
router.get('/', (req, res) => {
    res.send('List of posts');
});

// GET /posts/:id - Details of a single post
router.get('/:id', (req, res) => {
    res.send(`Details of post ${req.params.id}`);
});

// POST /posts - Create a new post
router.post('/', (req, res) => {
    res.send('Create a new post');
});

// PUT /posts/:id - Update a post
router.put('/:id', (req, res) => {
    res.send(`Update post ${req.params.id}`);
});

// DELETE /posts/:id - Delete a post
router.delete('/:id', (req, res) => {
    res.send(`Delete post ${req.params.id}`);
});

module.exports = router;
