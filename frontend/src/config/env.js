// Environment variables
// Create a .env file in the root directory and add your variables

// Example .env file:
// VITE_API_URL=http://localhost:3000/api
// VITE_APP_NAME=YourApp

export default {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  appName: import.meta.env.VITE_APP_NAME || 'YourApp',
};
