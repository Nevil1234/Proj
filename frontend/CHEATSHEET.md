# Quick Reference Cheat Sheet

## Import Components
```jsx
import { Button, Input, Card, Modal, Loading, Alert } from './components';
// or individually
import Button from './components/Button';
```

## Common Patterns

### Form with Validation
```jsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');

<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={error}
  required
/>
```

### Modal Pattern
```jsx
const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
  Content here
</Modal>
```

### API Call
```jsx
import { api } from './utils/api';

const fetchData = async () => {
  try {
    const data = await api.get('/endpoint');
    setData(data);
  } catch (error) {
    setError(error.message);
  }
};
```

### Auth Usage
```jsx
import { useAuth } from './context/AuthContext';

const { user, login, logout, isAuthenticated } = useAuth();

if (isAuthenticated) {
  // Show protected content
}
```

### Debounced Search
```jsx
import useDebounce from './hooks/useDebounce';

const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);

useEffect(() => {
  // API call with debouncedSearch
}, [debouncedSearch]);
```

### Loading States
```jsx
const [loading, setLoading] = useState(false);

{loading ? <Loading /> : <Content />}
```

### Conditional Alert
```jsx
const [showAlert, setShowAlert] = useState(false);

{showAlert && (
  <Alert
    type="success"
    message="Done!"
    onClose={() => setShowAlert(false)}
  />
)}
```

## Tailwind Common Classes

- Spacing: `p-4`, `m-4`, `px-4`, `py-2`, `space-y-4`, `gap-4`
- Colors: `bg-blue-600`, `text-gray-700`, `border-red-500`
- Layout: `flex`, `grid`, `grid-cols-3`, `items-center`, `justify-center`
- Responsive: `md:flex`, `lg:grid-cols-4`, `sm:text-sm`
- Rounded: `rounded`, `rounded-lg`, `rounded-full`
- Shadow: `shadow`, `shadow-md`, `shadow-lg`
- Hover: `hover:bg-blue-700`, `hover:shadow-xl`

## Quick Component Variants

### Buttons
- `variant="primary"` - Blue
- `variant="secondary"` - Gray
- `variant="success"` - Green
- `variant="danger"` - Red
- `variant="outline"` - Outlined
- `size="sm|md|lg"`

### Alerts
- `type="success|error|warning|info"`

### Modal Sizes
- `size="sm|md|lg|xl"`

## Keyboard Shortcuts (VS Code)
- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + F` - Search in files
- `Alt + Up/Down` - Move line up/down
- `Ctrl/Cmd + D` - Select next occurrence
- `Ctrl/Cmd + /` - Toggle comment
