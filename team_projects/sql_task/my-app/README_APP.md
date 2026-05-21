# SQL Learning Hub - React Application

A complete, full-featured React application for learning SQL concepts with authentication, dashboard, and educational content on DDL, DML, and DQL.

## ✨ Features

- **User Authentication**
  - Register new users
  - Login with credentials
  - Logout functionality
  - Data stored in browser's localStorage

- **Dashboard**
  - Welcome message with user information
  - Three SQL topic cards (DDL, DML, DQL)
  - Quick overview of SQL concepts

- **Learning Modules**
  - **DDL (Data Definition Language)** - CREATE, ALTER, DROP, TRUNCATE
  - **DML (Data Manipulation Language)** - INSERT, UPDATE, DELETE, MERGE
  - **DQL (Data Query Language)** - SELECT, WHERE, ORDER BY, GROUP BY, JOIN, AGGREGATE Functions

- **User Experience**
  - Beautiful gradient UI with Tailwind CSS
  - Smooth navigation between pages
  - Protected routes (requires login to access content)
  - Demo credentials provided on login page
  - Responsive design

## 📁 Folder Structure

```
my-app/
├── src/
│   ├── pages/
│   │   ├── Login.jsx          # Login page
│   │   ├── Register.jsx       # Registration page
│   │   ├── Dashboard.jsx      # Main dashboard with 3 cards
│   │   ├── DDL.jsx            # DDL learning page
│   │   ├── DML.jsx            # DML learning page
│   │   └── DQL.jsx            # DQL learning page
│   ├── components/
│   │   ├── Card.jsx           # Reusable card component for topics
│   │   └── PrivateRoute.jsx   # Route protection component
│   ├── context/
│   │   └── AuthContext.jsx    # Authentication context
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles (Tailwind)
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **Navigate to the project directory:**
   ```bash
   cd e:\froentend_course\team_projects\sql_task\my-app
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The app will be available at `http://localhost:5173/`

## 🔐 Authentication System

### Demo Account
- **Email:** test@example.com
- **Password:** 123456

### User Registration
1. Click "Register here" on the login page
2. Enter your name, email, and password
3. Confirm password and submit
4. You'll be redirected to login page with success message
5. Login with your credentials

### Data Storage
- User credentials are stored in browser's **localStorage**
- `users` - Array of registered users
- `user` - Currently logged-in user data
- To clear data, open browser DevTools → Application → Local Storage → Clear All

## 📚 Learning Modules

### DDL - Data Definition Language
Learn how to define and modify database structures:
- CREATE - Create new database objects
- ALTER - Modify existing objects
- DROP - Delete objects
- TRUNCATE - Remove data while keeping structure

### DML - Data Manipulation Language
Learn how to manipulate data in databases:
- INSERT - Add new records
- UPDATE - Modify existing records
- DELETE - Remove records
- MERGE - Combine multiple operations

### DQL - Data Query Language
Learn how to retrieve data from databases:
- SELECT - Retrieve data
- WHERE - Filter records
- ORDER BY - Sort results
- GROUP BY - Group data
- JOIN - Combine multiple tables
- AGGREGATE Functions - COUNT, SUM, AVG, MIN, MAX

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.6
- **Routing:** React Router DOM 7.15.1
- **Styling:** Tailwind CSS 4.3.0
- **Build Tool:** Vite 8.0.12
- **State Management:** React Context API

## 📝 Code Examples

### Login Process
```javascript
const { login } = useAuth();
login(email, password);  // Validates and stores user in localStorage
```

### Protected Route
```jsx
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

### Authentication Context
```javascript
const { user, loading, register, login, logout } = useAuth();
```

## 🎨 UI Features

- **Gradient Backgrounds** - Beautiful color schemes for each page
- **Card-based Layout** - Easy navigation between topics
- **Color-coded Pages:**
  - DDL: Blue gradient
  - DML: Green gradient
  - DQL: Purple gradient
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Transitions** - Hover effects and page transitions

## 🔧 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🐛 Known Features & Limitations

### Features
✅ Complete authentication system with localStorage
✅ Protected routes with automatic redirects
✅ Three comprehensive SQL learning modules
✅ Navigation between pages
✅ Logout functionality
✅ Responsive design
✅ Beautiful UI with Tailwind CSS

### Notes
- Passwords are stored in plain text in localStorage (for demo purposes only)
- For production, use proper backend authentication and HTTPS
- Consider using encrypted storage for sensitive data

## 🔒 Security Recommendations (for Production)

1. Implement backend authentication with JWT tokens
2. Use HTTPS for all communications
3. Implement password hashing (bcrypt, argon2)
4. Add CSRF protection
5. Use secure HTTP-only cookies
6. Implement rate limiting on login attempts
7. Add email verification
8. Implement password reset functionality

## 📖 Usage Guide

1. **First Time Users:**
   - Click "Register here"
   - Create an account with your details
   - Login with your new credentials

2. **Learning Content:**
   - Browse the dashboard
   - Click on any of the three cards (DDL, DML, DQL)
   - Read the comprehensive content with examples
   - Use navigation buttons to move between topics

3. **Navigation:**
   - Use "← Back to Dashboard" to return to main page
   - Use "Next →" and "← Previous" to navigate between topics
   - Click user name area to see current session info

## 🚀 Deployment

To deploy this application:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting service

## 📞 Support

For issues or questions:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Clear localStorage if experiencing authentication issues
4. Ensure Vite development server is running

## 📄 License

This project is created for educational purposes.

## 🎓 Learning Outcomes

After completing this SQL Learning Hub, you'll understand:
- SQL fundamentals (DDL, DML, DQL)
- Database structure and operations
- Data manipulation techniques
- Data querying and retrieval
- Authentication basics in web applications

---

**Happy Learning! 🚀**
