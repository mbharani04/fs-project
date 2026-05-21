# Project File Structure & Description

## Created Files

### 1. Context Layer
**File:** `src/context/AuthContext.jsx`
**Purpose:** Manages authentication state globally using React Context API
**Features:**
- User registration with localStorage
- User login with credentials validation
- Logout functionality
- useAuth custom hook for easy access to auth methods
- Prevents duplicate registrations

### 2. Components Layer
**File:** `src/components/PrivateRoute.jsx`
**Purpose:** Protects routes that require authentication
**Features:**
- Redirects unauthenticated users to login
- Shows loading state while checking authentication
- Wraps protected pages

**File:** `src/components/Card.jsx`
**Purpose:** Reusable card component for displaying SQL topics
**Features:**
- Title, description, icon, and link
- Hover effects with shadow transition
- Gradient button styling
- Used for DDL, DML, DQL cards on dashboard

### 3. Pages Layer
**File:** `src/pages/Login.jsx`
**Purpose:** User login page
**Features:**
- Email and password input fields
- Form validation
- Success/error messages
- Link to register page
- Demo credentials displayed
- Redirects to dashboard after successful login

**File:** `src/pages/Register.jsx`
**Purpose:** User registration page
**Features:**
- Name, email, password, confirm password fields
- Password validation (minimum 6 characters)
- Duplicate user prevention
- Error handling
- Redirects to login after successful registration
- Link back to login page

**File:** `src/pages/Dashboard.jsx`
**Purpose:** Main dashboard after login
**Features:**
- Welcome message with user information
- Three SQL topic cards (DDL, DML, DQL)
- About SQL section with overview
- Logout button
- User email display
- Beautiful gradient header

**File:** `src/pages/DDL.jsx`
**Purpose:** DDL learning module
**Features:**
- Comprehensive DDL overview
- Four topics: CREATE, ALTER, DROP, TRUNCATE
- Syntax and examples for each command
- Key points section
- Navigation buttons (Previous/Next)
- Blue color scheme

**File:** `src/pages/DML.jsx`
**Purpose:** DML learning module
**Features:**
- Comprehensive DML overview
- Four topics: INSERT, UPDATE, DELETE, MERGE
- Syntax and examples for each command
- Key points section (6 important points)
- Navigation buttons (Previous/Next)
- Green color scheme

**File:** `src/pages/DQL.jsx`
**Purpose:** DQL learning module
**Features:**
- Comprehensive DQL overview
- Six topics: SELECT, WHERE, ORDER BY, GROUP BY, JOIN, AGGREGATE Functions
- Syntax and examples for each command
- Key points section (6 important points)
- Complex query example with explanation
- Navigation buttons (Previous/Next)
- Purple color scheme

### 4. Main Application File
**File:** `src/App.jsx`
**Purpose:** Main React component with routing configuration
**Features:**
- BrowserRouter setup
- AuthProvider wrapper
- All route configurations
- Protected routes using PrivateRoute
- Redirects root to login page
- Routes:
  - `/login` - Login page
  - `/register` - Registration page
  - `/dashboard` - Main dashboard (protected)
  - `/ddl` - DDL page (protected)
  - `/dml` - DML page (protected)
  - `/dql` - DQL page (protected)
  - `/` - Redirects to login

### 5. Configuration Files (Already Existing)
**File:** `package.json`
**Updated Dependencies:**
- react: ^19.2.6
- react-dom: ^19.2.6
- react-router-dom: ^7.15.1
- tailwindcss: ^4.3.0
- @tailwindcss/vite: ^4.3.0

**File:** `src/index.css`
**Content:** Tailwind CSS import for global styles

**File:** `src/main.jsx`
**Purpose:** React application entry point (unchanged)

**File:** `src/App.css`
**Purpose:** Application-specific styles (can add custom CSS here)

## File Summary Table

| File | Type | Purpose |
|------|------|---------|
| AuthContext.jsx | Context | Authentication state management |
| PrivateRoute.jsx | Component | Route protection |
| Card.jsx | Component | Reusable topic card |
| Login.jsx | Page | User login |
| Register.jsx | Page | User registration |
| Dashboard.jsx | Page | Main dashboard |
| DDL.jsx | Page | DDL learning content |
| DML.jsx | Page | DML learning content |
| DQL.jsx | Page | DQL learning content |
| App.jsx | Main | Root component with routing |

## Data Flow

```
App.jsx (with AuthProvider)
  ├─ Login.jsx (public route)
  ├─ Register.jsx (public route)
  └─ Protected Routes (via PrivateRoute component)
     ├─ Dashboard.jsx
     ├─ DDL.jsx
     ├─ DML.jsx
     └─ DQL.jsx
```

## Authentication Flow

```
Register User
    ↓
Store in localStorage['users']
    ↓
Redirect to Login
    ↓
Login User
    ↓
Validate credentials
    ↓
Store current user in localStorage['user']
    ↓
Access AuthContext via useAuth hook
    ↓
Navigate to Dashboard
```

## localStorage Schema

### Users Storage
```javascript
localStorage['users'] = [
  {
    id: 1234567890,
    email: "user@example.com",
    password: "password123",
    name: "User Name"
  },
  ...
]
```

### Current User Storage
```javascript
localStorage['user'] = {
  id: 1234567890,
  email: "user@example.com",
  name: "User Name"
  // password is not stored in current user object
}
```

## Component Relationships

```
AuthContext
  └─ Provides: { user, loading, register, login, logout }

App.jsx
  ├─ Uses: AuthProvider
  └─ Defines: Routes and PrivateRoute

PrivateRoute.jsx
  ├─ Uses: useAuth hook
  └─ Checks: Authentication status

Pages (DDL, DML, DQL, Dashboard)
  ├─ Use: useAuth hook to get user info
  └─ Use: Link for navigation

Components (Card)
  └─ Receives: Props for content and navigation
```

## Features Implementation Details

### 1. Authentication
- Email-password based authentication
- localStorage for persistence
- Duplicate registration prevention
- Password validation (min 6 characters)
- Session maintained on page refresh

### 2. Authorization
- Protected routes redirect unauthenticated users
- Loading state during auth check
- Automatic logout cleanup

### 3. Navigation
- React Router v7.15.1 for SPA routing
- Smooth page transitions
- Breadcrumb-like navigation in learning pages
- Back buttons available on all pages

### 4. UI/UX
- Tailwind CSS for styling
- Gradient backgrounds for visual appeal
- Responsive grid layouts
- Hover effects and transitions
- Color-coded pages for easy identification
- Demo credentials for quick testing

### 5. Content
- Comprehensive SQL explanations
- Real-world SQL examples
- Syntax reference for each command
- Key points and best practices
- Complex query examples

## How to Extend

### Add New User Fields
Edit `AuthContext.jsx` register function to include additional fields

### Add New SQL Topics
1. Create new page file in `src/pages/`
2. Add route in `App.jsx`
3. Add card in `Dashboard.jsx`

### Customize Styling
- Modify Tailwind classes in components
- Add custom CSS in `src/App.css`
- Adjust color schemes in individual page components

### Add Database Integration
Replace localStorage with API calls to backend service

---

**Total Components:** 9 files created
**Total Lines of Code:** ~1500+ lines
**Styling Framework:** Tailwind CSS
**State Management:** React Context API + localStorage
