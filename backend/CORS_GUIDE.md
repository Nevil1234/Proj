# 🌐 CORS Configuration Guide

## Current Setup (Perfect for Hackathon!)

Your backend is configured to be **developer-friendly** during the hackathon:

### ✅ Development Mode (Current)
- **CORS: Open for ALL origins** 
- No CORS errors from any tool or port
- Team members can test from anywhere
- Works with Postman, Thunder Client, browsers, etc.
- Different frontend ports won't cause issues

### 🔒 Production Mode (After Hackathon)
- **CORS: Restricted to specific origins**
- More secure
- Only your frontend domain can access the API

---

## How It Works

The server automatically detects the environment from `.env`:

```env
NODE_ENV=development  ← Keep this during hackathon
```

**Development Mode (`NODE_ENV=development`):**
```javascript
app.use(cors()); // Accepts requests from ANYWHERE
```

**Production Mode (`NODE_ENV=production`):**
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Only specific origin
  credentials: true,
}));
```

---

## During Hackathon

**Keep it as is!** Your current setup:

```env
NODE_ENV=development
```

✅ No CORS issues  
✅ Test from any tool  
✅ Team members on different ports work fine  
✅ Postman/curl work without issues  
✅ Multiple frontends can connect (if needed)  

---

## After Hackathon (Production)

When deploying to production, update `.env`:

```env
NODE_ENV=production
CORS_ORIGIN=https://your-actual-domain.com
```

This will:
- 🔒 Restrict API access to your frontend only
- 🛡️ Prevent unauthorized access from other domains
- ✅ More secure for production

---

## Quick Reference

| Mode | CORS Behavior | When to Use |
|------|---------------|-------------|
| **development** | Open (all origins) | Hackathon, local dev |
| **production** | Restricted (specific origin) | Deployed app |

---

## Testing CORS

### Development (should work from anywhere):
```bash
# From browser console on any website
fetch('http://localhost:5178/health')
  .then(r => r.json())
  .then(d => console.log(d));

# From Postman - just works!
# From curl - just works!
# From your frontend - just works!
```

### Production (only works from allowed origin):
```bash
# Only works from http://localhost:5173 (or your specified CORS_ORIGIN)
```

---

## Troubleshooting

### "CORS error" during development?
**Check:**
1. Is `NODE_ENV=development` in `.env`? ✅
2. Is the server running? (`npm run dev`)
3. Restart the server after changing `.env`

### Want to restrict even in development?
Change this in `src/server.js`:
```javascript
// Force restricted CORS even in development
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
```

---

## Summary

**For Hackathon:** Keep `NODE_ENV=development` → No CORS headaches! 🎉  
**For Production:** Change to `NODE_ENV=production` → Secure and restricted! 🔒

Your current setup is **perfect for team development**! 🚀
