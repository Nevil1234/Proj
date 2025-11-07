# 🧪 API Testing Guide

Quick reference for testing your API endpoints.

## Base URL
```
http://localhost:5000
```

---

## 🏥 Health Check

### Check Server Status
```bash
curl http://localhost:5000/health
```

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-11-07T...",
  "uptime": 123.456
}
```

---

## 📋 API Info

### Get API Information
```bash
curl http://localhost:5000/api
```

**Response:**
```json
{
  "message": "Welcome to Hackathon API",
  "version": "v1",
  "endpoints": {
    "users": "/api/users",
    "posts": "/api/posts"
  }
}
```

---

## 👥 Users Endpoints

### 1. Get All Users
```bash
curl http://localhost:5000/api/users
```

### 2. Get User by ID
```bash
curl http://localhost:5000/api/users/{user-id}
```

### 3. Create New User
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "password": "password123",
    "role": "user"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "uuid-here",
    "email": "test@example.com",
    "name": "Test User",
    "role": "user",
    "createdAt": "2025-11-07T...",
    "updatedAt": "2025-11-07T..."
  }
}
```

### 4. Update User
```bash
curl -X PUT http://localhost:5000/api/users/{user-id} \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name"
  }'
```

### 5. Delete User
```bash
curl -X DELETE http://localhost:5000/api/users/{user-id}
```

---

## 📝 Posts Endpoints

### 1. Get All Posts
```bash
# All posts
curl http://localhost:5000/api/posts

# Only published posts
curl http://localhost:5000/api/posts?published=true

# Only draft posts
curl http://localhost:5000/api/posts?published=false
```

### 2. Get Post by ID
```bash
curl http://localhost:5000/api/posts/{post-id}
```

### 3. Create New Post
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the post content",
    "published": true,
    "authorId": "user-id-here"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Post created successfully",
  "data": {
    "id": "uuid-here",
    "title": "My First Post",
    "content": "This is the post content",
    "published": true,
    "authorId": "user-id-here",
    "author": {
      "id": "user-id-here",
      "name": "User Name",
      "email": "user@example.com"
    },
    "createdAt": "2025-11-07T...",
    "updatedAt": "2025-11-07T..."
  }
}
```

### 4. Update Post
```bash
curl -X PUT http://localhost:5000/api/posts/{post-id} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "published": true
  }'
```

### 5. Delete Post
```bash
curl -X DELETE http://localhost:5000/api/posts/{post-id}
```

---

## 🧪 Testing with JavaScript (Fetch)

### Get Users
```javascript
fetch('http://localhost:5000/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Create User
```javascript
fetch('http://localhost:5000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'new@example.com',
    name: 'New User',
    password: 'password123',
    role: 'user'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

### Create Post
```javascript
fetch('http://localhost:5000/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Test Post',
    content: 'This is a test',
    published: true,
    authorId: 'user-id-here'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🔌 Connect from Frontend

Your frontend is running on `http://localhost:5173` (Vite default).

The backend is already configured to accept requests from your frontend (CORS enabled).

### Example using your frontend's API utility:

```javascript
// In your React component
import { api } from '../utils/api';

// Get all users
const users = await api.get('/users');

// Create a post
const newPost = await api.post('/posts', {
  title: 'My Post',
  content: 'Post content',
  published: true,
  authorId: userId
});
```

---

## 🛠️ Using Postman or Thunder Client

1. **Import these as a collection** or create requests manually
2. Set base URL: `http://localhost:5000`
3. Add header: `Content-Type: application/json` for POST/PUT requests
4. Test each endpoint

---

## 📊 View Database with Prisma Studio

```bash
npm run prisma:studio
```

Opens a GUI at `http://localhost:5555` where you can:
- View all tables
- Add/edit/delete records
- See relationships
- Query data visually

---

## ✅ Success Responses

All successful responses follow this format:

```json
{
  "success": true,
  "message": "Optional message",
  "data": { /* your data */ },
  "count": 10  // For list endpoints
}
```

---

## ❌ Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": {
    "message": "Error description"
  }
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

---

## 💡 Tips

1. **Get User IDs first** before creating posts (posts need authorId)
2. **Use Prisma Studio** to quickly view and manage data
3. **Check server logs** in terminal for request details
4. **Test incrementally** - one endpoint at a time
5. **Save successful requests** in Postman/Thunder Client for reuse

---

## 🎯 Quick Test Flow

```bash
# 1. Start server
npm run dev

# 2. Check health
curl http://localhost:5000/health

# 3. Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","name":"Test","password":"pass123","role":"user"}'

# 4. Get all users (copy a user ID)
curl http://localhost:5000/api/users

# 5. Create a post (use the user ID from step 4)
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Post","content":"Content here","published":true,"authorId":"USER_ID_HERE"}'

# 6. Get all posts
curl http://localhost:5000/api/posts
```

Happy Testing! 🚀
