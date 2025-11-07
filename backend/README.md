# Hackathon Backend API

A production-ready Node.js backend API built with Express, Prisma ORM, and PostgreSQL hosted on Railway.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database on Railway
- npm or yarn

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Then update `.env` with your Railway PostgreSQL credentials:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   ```
   
   Get your Railway database URL from:
   - Railway Dashboard → Your Project → PostgreSQL Service → Connect tab
   - Copy the "Postgres Connection URL"

3. **Generate Prisma Client**
   ```bash
   npm run prisma:generate
   ```

4. **Push Database Schema**
   
   For hackathon speed (no migrations):
   ```bash
   npm run prisma:push
   ```
   
   OR create migrations properly:
   ```bash
   npm run prisma:migrate
   ```

5. **Seed the Database (Optional)**
   ```bash
   npm run prisma:seed
   ```

6. **Start Development Server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.js             # Seed data
├── src/
│   ├── config/
│   │   └── database.js     # Prisma client configuration
│   ├── controllers/        # Request handlers
│   │   ├── users.controller.js
│   │   └── posts.controller.js
│   ├── middleware/         # Express middleware
│   │   ├── asyncHandler.js
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   ├── routes/             # API routes
│   │   ├── index.js
│   │   ├── users.routes.js
│   │   └── posts.routes.js
│   ├── services/           # Business logic
│   │   ├── users.service.js
│   │   └── posts.service.js
│   └── server.js           # Application entry point
├── .env                    # Environment variables (not in git)
├── .env.example            # Environment template
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm start` | Start production server |
| `npm run prisma:generate` | Generate Prisma Client |
| `npm run prisma:migrate` | Create and apply migrations |
| `npm run prisma:push` | Push schema to database (no migrations) |
| `npm run prisma:studio` | Open Prisma Studio GUI |
| `npm run prisma:seed` | Seed database with sample data |

## 📡 API Endpoints

### Health Check
- `GET /health` - Server health status

### API Info
- `GET /api` - API version and available endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Posts
- `GET /api/posts` - Get all posts (query: `?published=true/false`)
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

## 📝 Example API Requests

### Create User
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "name": "New User",
    "password": "password123",
    "role": "user"
  }'
```

### Create Post
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content",
    "published": true,
    "authorId": "user-uuid-here"
  }'
```

### Get All Published Posts
```bash
curl http://localhost:5000/api/posts?published=true
```

## 🗄️ Database Schema

The boilerplate includes two example models:

- **User**: Basic user model with authentication fields
- **Post**: Blog post model with author relationship

**Customize these models for your hackathon project!**

Edit `prisma/schema.prisma` and then run:
```bash
npm run prisma:push
```

## 🔧 Prisma Commands

### Open Prisma Studio (Database GUI)
```bash
npm run prisma:studio
```

### Reset Database
```bash
npx prisma migrate reset
```

### Format Schema
```bash
npx prisma format
```

## 🌐 Railway Deployment

1. **Connect to Railway**
   - Create a new project on Railway
   - Add PostgreSQL service
   - Add a new service from GitHub repo

2. **Set Environment Variables**
   - Railway automatically sets `DATABASE_URL`
   - Add other variables from `.env.example`

3. **Deploy**
   - Railway will automatically deploy on push
   - Build command: `npm install && npm run prisma:generate`
   - Start command: `npm start`

## 🔒 Security Notes

**⚠️ Important for Production:**

1. **Password Hashing**: The boilerplate doesn't hash passwords. Add bcrypt:
   ```bash
   npm install bcrypt
   ```

2. **Authentication**: Implement JWT or sessions for protected routes

3. **Validation**: Add request validation (e.g., joi, express-validator)

4. **Rate Limiting**: Add rate limiting for API endpoints

5. **CORS**: Configure CORS for your frontend domain

## 🎯 Hackathon Tips

1. **Speed over Perfection**: Use `prisma db push` instead of migrations during hackathon
2. **Prisma Studio**: Use it to quickly view and edit database data
3. **No Auth**: Skip authentication initially if not required
4. **Customize Models**: Replace User/Post models with your hackathon needs
5. **Seed Data**: Create realistic seed data to test your frontend

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Test connection
npx prisma db pull
```

### Prisma Client Not Generated
```bash
npm run prisma:generate
```

### Port Already in Use
Change `PORT` in `.env` file or kill the process:
```bash
lsof -ti:5000 | xargs kill -9
```

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Express Documentation](https://expressjs.com/)
- [Railway Documentation](https://docs.railway.app/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 📄 License

MIT License - Free to use for your hackathon project!

---

**Good luck with your hackathon! 🚀**
