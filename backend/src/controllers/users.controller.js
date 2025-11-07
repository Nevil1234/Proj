import { asyncHandler } from '../middleware/asyncHandler.js';
import { AppError } from '../middleware/errorHandler.js';
import * as userService from '../services/users.service.js';

// Get all users
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();
  
  res.json({
    success: true,
    count: users.length,
    data: users,
  });
});

// Get user by ID
export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  res.json({
    success: true,
    data: user,
  });
});

// Create new user
export const createUser = asyncHandler(async (req, res) => {
  const userData = req.body;
  const user = await userService.createUser(userData);

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: user,
  });
});

// Update user
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  const user = await userService.updateUser(id, userData);

  res.json({
    success: true,
    message: 'User updated successfully',
    data: user,
  });
});

// Delete user
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);

  res.json({
    success: true,
    message: 'User deleted successfully',
  });
});
