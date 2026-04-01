const express = require('express');
const router = express.Router();
const blogPosts = require('../assets/blogPosts');



//INDEX /posts - GET posts JSON
router.get('/', (req, res) => {
    res.json(blogPosts);
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


//SHOW /posts/:id GET single post JSON
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogPosts.find(post => post.id === id)
    res.json(post);
})

module.exports = router;
