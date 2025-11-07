# Hackathon Boilerplate - Quick Start Guide

A comprehensive React boilerplate with pre-built components, utilities, and routing setup to kickstart your hackathon project.

## 🚀 Features

- ✅ **Pre-built UI Components**: Button, Input, Card, Modal, Alert, Loading
- ✅ **Navigation**: Header, Footer with responsive design
- ✅ **Routing**: React Router v7 setup with nested routes
- ✅ **Custom Hooks**: useFetch, useLocalStorage, useDebounce, useToggle, useWindowSize
- ✅ **State Management**: Auth & Theme context providers
- ✅ **Utilities**: API helpers, constants, helper functions
- ✅ **Styling**: Tailwind CSS v4 configured
- ✅ **Ready Pages**: Home, Dashboard, About, 404

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── Loading.jsx
│   ├── Alert.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── index.js        # Component exports
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── DashboardPage.jsx
│   ├── AboutPage.jsx
│   ├── NotFoundPage.jsx
│   └── Layout.jsx      # App layout wrapper
├── context/            # React context providers
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── hooks/              # Custom React hooks
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   ├── useToggle.js
│   └── useWindowSize.js
├── utils/              # Utility functions
│   ├── api.js         # API request helpers
│   ├── constants.js   # App constants
│   └── helpers.js     # Helper functions
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## 🎯 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## 🧩 Component Usage

### Button
```jsx
import Button from './components/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>

// Variants: primary, secondary, success, danger, outline
// Sizes: sm, md, lg
```

### Input
```jsx
import Input from './components/Input';

<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errorMessage}
  required
/>
```

### Card
```jsx
import Card from './components/Card';

<Card title="Title" subtitle="Subtitle" hover>
  Your content here
</Card>
```

### Modal
```jsx
import Modal from './components/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
>
  Modal content
</Modal>
```

### Alert
```jsx
import Alert from './components/Alert';

<Alert
  type="success"  // success, error, warning, info
  message="Action completed!"
  onClose={() => setShow(false)}
/>
```

### Loading
```jsx
import Loading from './components/Loading';

<Loading size="md" fullScreen={false} />
```

## 🎣 Custom Hooks

### useFetch
```jsx
import useFetch from './hooks/useFetch';

const { data, loading, error, refetch } = useFetch('/api/users');
```

### useLocalStorage
```jsx
import useLocalStorage from './hooks/useLocalStorage';

const [value, setValue] = useLocalStorage('key', defaultValue);
```

### useDebounce
```jsx
import useDebounce from './hooks/useDebounce';

const debouncedValue = useDebounce(searchTerm, 500);
```

### useToggle
```jsx
import useToggle from './hooks/useToggle';

const [isOpen, toggle, setIsOpen] = useToggle(false);
```

### useWindowSize
```jsx
import useWindowSize from './hooks/useWindowSize';

const { width, height } = useWindowSize();
```

## 🔌 API Integration

Update the API base URL in `src/utils/api.js`:

```javascript
export const API_BASE_URL = 'https://your-api.com/api';
```

Use the API helper:

```jsx
import { api } from './utils/api';

// GET request
const data = await api.get('/users');

// POST request
const result = await api.post('/users', { name: 'John' });

// PUT request
const updated = await api.put('/users/1', { name: 'Jane' });

// DELETE request
await api.delete('/users/1');
```

## 🎨 Customization

### Update Branding
- Change "YourApp" in `src/components/Header.jsx` and `src/components/Footer.jsx`
- Update colors in Tailwind classes throughout components

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`:
```jsx
<Route path="new-page" element={<NewPage />} />
```

### Add Environment Variables
Create `.env` file:
```
VITE_API_URL=https://your-api.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🔐 Authentication

Use the Auth context:

```jsx
import { useAuth } from './context/AuthContext';

function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth();
  
  const handleLogin = async () => {
    const result = await login(email, password);
    if (result.success) {
      // Handle success
    }
  };
}
```

## 🎭 Theme Support

Use the Theme context:

```jsx
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
}
```

## 📝 Tips for Hackathon

1. **Focus on your unique features** - UI is ready, focus on your core idea
2. **Customize components** - Modify existing components instead of creating new ones
3. **Use the utilities** - Helper functions and constants are there to save time
4. **Quick prototyping** - Copy and modify example pages
5. **API integration** - Update `api.js` with your backend URL and start fetching

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router 7** - Routing
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **ESLint** - Code linting

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist folder
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

## 📄 License

Free to use for your hackathon project!

---

**Happy Hacking! 🎉**
