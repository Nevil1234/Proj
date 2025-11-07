import { Router } from 'express';
import userRoutes from './users.routes.js';
import postRoutes from './posts.routes.js';

const router = Router();

// API version and status
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Hackathon API',
    version: process.env.API_VERSION || 'v1',
    endpoints: {
      users: '/api/users',
      posts: '/api/posts',
    },
  });
});

// Route modules
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export default router;
