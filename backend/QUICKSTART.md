# 🎯 QUICK START - Do This Now!

## Step 1: Update Database URL ⚠️ **IMPORTANT**

Open the `.env` file and replace this line:
```
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
```

With your Railway PostgreSQL connection URL. Get it from:
1. Go to https://railway.app/
2. Your Project → PostgreSQL Service → Connect Tab
3. Copy "Postgres Connection URL"
4. Paste it in `.env`

Example:
```
DATABASE_URL="postgresql://postgres:abc123xyz@containers-us-west-123.railway.app:7432/railway"
```

## Step 2: Push Database Schema

After updating the DATABASE_URL, run:
```bash
npm run prisma:push
```

This creates your tables in Railway PostgreSQL.

## Step 3: (Optional) Add Sample Data

```bash
npm run prisma:seed
```

Creates 2 sample users and 3 sample posts.

## Step 4: Start Development Server

```bash
npm run dev
```

Server will run on: http://localhost:5000

## 📡 Test Your API

### Health Check
http://localhost:5000/health

### API Endpoints
- GET http://localhost:5000/api/users
- GET http://localhost:5000/api/posts
- GET http://localhost:5000/api

---

## 🔥 Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run prisma:studio` | Open database GUI |
| `npm run prisma:push` | Update database schema |
| `npm run prisma:generate` | Regenerate Prisma Client |

---

## 🎨 Customize for Your Project

### Update Database Models

1. Edit `prisma/schema.prisma`
2. Add/modify your models
3. Run `npm run prisma:push`

Example:
```prisma
model Product {
  id          String   @id @default(uuid())
  name        String
  price       Float
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Add New API Endpoint

1. Create route: `src/routes/yourmodel.routes.js`
2. Create controller: `src/controllers/yourmodel.controller.js`
3. Create service: `src/services/yourmodel.service.js`
4. Register in `src/routes/index.js`

---

## 🐛 Troubleshooting

**Can't connect to database?**
- Verify DATABASE_URL in .env
- Check Railway database is running
- Make sure no typos in connection string

**Port 5000 already in use?**
- Change PORT in .env to 5001 or another number
- Or kill the process: `lsof -ti:5000 | xargs kill -9`

**Prisma errors?**
- Run: `npm run prisma:generate`
- Delete node_modules and run: `npm install`

---

## 📚 File Structure

```
src/
├── config/         # Database configuration
├── controllers/    # Handle requests
├── services/       # Business logic
├── routes/         # Define endpoints
├── middleware/     # Error handling, etc.
└── server.js       # Main app file
```

---

## ✅ You're All Set!

Once you complete Steps 1-4 above, your backend will be:
- ✅ Connected to Railway PostgreSQL
- ✅ Running on port 5000
- ✅ Ready for API requests from your frontend
- ✅ Has sample User & Post models

**Check README.md for full documentation!**

Good luck with your hackathon! 🚀
