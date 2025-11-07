import { asyncHandler } from '../middleware/asyncHandler.js';
import { AppError } from '../middleware/errorHandler.js';
import * as postService from '../services/posts.service.js';

// Get all posts
export const getAllPosts = asyncHandler(async (req, res) => {
  const { published } = req.query;
  const posts = await postService.getAllPosts(published);

  res.json({
    success: true,
    count: posts.length,
    data: posts,
  });
});

// Get post by ID
export const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  res.json({
    success: true,
    data: post,
  });
});

// Create new post
export const createPost = asyncHandler(async (req, res) => {
  const postData = req.body;
  const post = await postService.createPost(postData);

  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: post,
  });
});

// Update post
export const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const postData = req.body;
  const post = await postService.updatePost(id, postData);

  res.json({
    success: true,
    message: 'Post updated successfully',
    data: post,
  });
});

// Delete post
export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await postService.deletePost(id);

  res.json({
    success: true,
    message: 'Post deleted successfully',
  });
});
