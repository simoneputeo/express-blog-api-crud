const postController = require('../controllers/postController');

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
