import { Router } from 'express';
import * as postController from '../controllers/posts.controller.js';

const router = Router();

// Post routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router;
