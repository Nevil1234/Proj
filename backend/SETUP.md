# 🚀 Backend Setup Guide for Hackathon

Follow these steps to get your backend up and running quickly!

## Step 1: Install Dependencies

Open terminal in the backend folder and run:

```bash
cd backend
npm install
```

This will install:
- Express (Web framework)
- Prisma (ORM)
- PostgreSQL driver
- CORS, Helmet, Morgan (Middleware)
- Nodemon (Dev server with hot reload)

## Step 2: Get Your Railway Database URL

1. Go to [Railway.app](https://railway.app/)
2. Create a new project (if you haven't already)
3. Click "New" → "Database" → "Add PostgreSQL"
4. Once created, click on the PostgreSQL service
5. Go to the "Connect" tab
6. Copy the "Postgres Connection URL" - it looks like:
   ```
   postgresql://postgres:password@containers.railway.app:7432/railway
   ```

## Step 3: Configure Environment Variables

1. Create a `.env` file in the backend folder:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and paste your Railway database URL:
   ```env
   DATABASE_URL="postgresql://postgres:password@containers.railway.app:7432/railway"
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   ```

## Step 4: Setup Prisma

Generate Prisma Client:
```bash
npm run prisma:generate
```

Push your schema to the database:
```bash
npm run prisma:push
```

This creates the tables in your Railway database.

## Step 5: Seed Sample Data (Optional)

If you want sample data to test with:
```bash
npm run prisma:seed
```

This creates:
- 2 sample users (John Doe, Jane Smith)
- 3 sample posts

## Step 6: Start the Development Server

```bash
npm run dev
```

You should see:
```
🚀 Server is running on port 5000
📊 Environment: development
🔗 Health check: http://localhost:5000/health
```

## Step 7: Test Your API

Open your browser or use curl:

**Health Check:**
```bash
curl http://localhost:5000/health
```

**Get All Users:**
```bash
curl http://localhost:5000/api/users
```

**API Info:**
```bash
curl http://localhost:5000/api
```

## 🎉 You're Ready!

Your backend is now running and connected to Railway PostgreSQL!

---

## 🔥 Quick Commands Reference

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server |
| `npm run prisma:studio` | Open database GUI |
| `npm run prisma:push` | Push schema changes to DB |
| `npm run prisma:generate` | Regenerate Prisma Client |

---

## 🛠️ Customize for Your Project

### 1. Update Database Schema

Edit `prisma/schema.prisma` to match your project needs:

```prisma
model YourModel {
  id        String   @id @default(uuid())
  // Add your fields here
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Then run:
```bash
npm run prisma:push
```

### 2. Create New Routes

1. Create a new route file: `src/routes/yourmodel.routes.js`
2. Create a controller: `src/controllers/yourmodel.controller.js`
3. Create a service: `src/services/yourmodel.service.js`
4. Add route to `src/routes/index.js`

### 3. View Database

Open Prisma Studio to see and edit data visually:
```bash
npm run prisma:studio
```

---

## 🐛 Common Issues

### "Can't reach database server"
- Check your Railway database is running
- Verify DATABASE_URL in .env is correct
- Make sure you're connected to internet

### "Port 5000 already in use"
- Change PORT in .env to another number (e.g., 5001)
- Or kill the process using port 5000

### Prisma Client errors
- Run `npm run prisma:generate` again
- Delete node_modules and reinstall

---

## 📞 Need Help?

- Check Railway logs for database issues
- Use Prisma Studio to inspect database
- Check server logs in terminal

**Happy Hacking! 🎯**
