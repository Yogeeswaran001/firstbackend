const postController = require('../controllers/post.controller');

express.routes.post('/posts', postController.createPost);