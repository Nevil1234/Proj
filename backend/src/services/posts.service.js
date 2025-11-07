import prisma from '../config/database.js';
import { AppError } from '../middleware/errorHandler.js';

// Get all posts
export const getAllPosts = async (published) => {
  const where = {};
  
  if (published !== undefined) {
    where.published = published === 'true';
  }

  return await prisma.post.findMany({
    where,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// Get post by ID
export const getPostById = async (id) => {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
};

// Create new post
export const createPost = async (data) => {
  const { title, content, published, authorId } = data;

  // Verify author exists
  const author = await prisma.user.findUnique({
    where: { id: authorId },
  });

  if (!author) {
    throw new AppError('Author not found', 404);
  }

  return await prisma.post.create({
    data: {
      title,
      content,
      published: published || false,
      authorId,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
};

// Update post
export const updatePost = async (id, data) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  return await prisma.post.update({
    where: { id },
    data,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
};

// Delete post
export const deletePost = async (id) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  return await prisma.post.delete({
    where: { id },
  });
};
