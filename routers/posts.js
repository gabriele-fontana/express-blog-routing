const express = require('express');
const router = express.Router();
const blogPosts = require('../assets/blogPosts');


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

//INDEX /posts - GET posts JSON
router.get('/', (req, res) => {
    res.json(blogPosts);
});


module.exports = router;
