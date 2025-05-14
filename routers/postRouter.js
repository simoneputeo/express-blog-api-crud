const postController = require('../controllers/postController');
const express = require('express');
const router = express.Router();
const posts = require('../data/posts');


// Index
router.get('/', postController.index);

// Show
router.get('/:id', postController.show);

// Store
router.post('/:id', postController.store);

// Update
router.put('/:id', postController.update);

// Destroy
router.delete('/:id', postController.destroy);
