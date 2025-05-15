const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

// Index
router.get('/', postController.index);

// Show
router.get('/:id', postController.show);

// Store
router.post('/', postController.store);

// Update
router.put('/:id', postController.update);

// Destroy
router.delete('/:id', postController.destroy);

module.exports = router;