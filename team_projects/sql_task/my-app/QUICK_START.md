# Quick Start Guide & Troubleshooting

## ⚡ Quick Start (5 Minutes)

### Step 1: Start the Server
```bash
cd e:\froentend_course\team_projects\sql_task\my-app
npm run dev
```
✅ You'll see: `➜  Local:   http://localhost:5173/`

### Step 2: Open Browser
- Go to: `http://localhost:5173/`
- You'll land on the Login page

### Step 3: Create Account (First Time)
1. Click "Register here"
2. Fill form:
   - Name: Your Name
   - Email: your@email.com
   - Password: your123password (min 6 chars)
   - Confirm Password: your123password
3. Click "Register" button
4. ✅ Success message appears, redirects to Login

### Step 4: Login
1. Email: your@email.com
2. Password: your123password
3. Click "Login"
4. ✅ Welcome to Dashboard!

### Step 5: Explore Content
- Click on any card (DDL, DML, or DQL)
- Read comprehensive SQL content
- Use "Next →" to move to next topic
- Click "Back to Dashboard" to return

### Step 6: Logout
- Click "Logout" button in header
- ✅ Redirects to Login page

## 🧪 Test with Demo Account

**Email:** test@example.com
**Password:** 123456

## 📋 Feature Checklist

After following quick start, verify these work:

- [ ] Register new user successfully
- [ ] Login with new credentials
- [ ] See personalized dashboard welcome
- [ ] Click DDL card - view DDL content
- [ ] Click DML card - view DML content
- [ ] Click DQL card - view DQL content
- [ ] Navigate between cards using Previous/Next
- [ ] Return to Dashboard from any page
- [ ] Logout and return to Login page
- [ ] LocalStorage shows users data (DevTools)

## 🔧 Troubleshooting

### Issue 1: Port 5173 Already in Use
**Problem:** Error says port 5173 is already in use

**Solutions:**
```bash
# Option 1: Use different port
npm run dev -- --port 3000

# Option 2: Kill process using port 5173
# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# On macOS/Linux:
lsof -ti:5173 | xargs kill -9
```

### Issue 2: npm Packages Not Installed
**Problem:** `Cannot find module 'react'`

**Solution:**
```bash
# Clear cache and reinstall
npm cache clean --force
npm install
npm run dev
```

### Issue 3: Blank Page or Errors in Console
**Problem:** Page doesn't load or shows errors

**Solutions:**
1. Check browser console (F12) for errors
2. Clear browser cache: Ctrl+Shift+Del
3. Close browser and reopen
4. Try private/incognito window
5. Restart dev server

### Issue 4: Login Not Working
**Problem:** Login form doesn't submit

**Solutions:**
1. Open DevTools (F12) → Application → LocalStorage
2. Check if 'users' key exists
3. Verify user was registered (email exists in users array)
4. Check password is exactly "123456"
5. Clear localStorage and register again:
   ```javascript
   // In browser console:
   localStorage.clear();
   ```

### Issue 5: Can't Access Protected Pages
**Problem:** Redirects to login after click

**Solutions:**
1. Verify you're logged in (check DevTools localStorage for 'user' key)
2. Try logout and login again
3. Clear localStorage and re-register
4. Check browser console for errors

### Issue 6: localStorage Data Gone
**Problem:** After closing browser, data is lost

**Solution:** This is normal behavior for localStorage in some contexts. Try:
1. Disable private/incognito browsing
2. Check browser privacy settings
3. Ensure cookies/storage is enabled
4. Try different browser

## 🔍 How to Debug

### Check LocalStorage
```javascript
// Open browser console (F12) and type:
console.log(localStorage);
console.log(JSON.parse(localStorage.getItem('users')));
console.log(JSON.parse(localStorage.getItem('user')));
```

### Check Current Route
```javascript
// In console:
console.log(window.location.pathname);
```

### Test Authentication Context
```javascript
// Add this to any component to debug:
const { user, loading } = useAuth();
useEffect(() => {
  console.log('User:', user);
  console.log('Loading:', loading);
}, [user, loading]);
```

### View Network Requests
1. Open DevTools (F12)
2. Click "Network" tab
3. Perform actions and watch requests
4. Should show XHR requests for API calls (if added)

## 🔐 Security Test

### Test Password Validation
```
Try registration with:
- Password: "123" → Should fail (less than 6 chars)
- Password: "password123" → Should succeed
- Password mismatch → Should fail
```

### Test Duplicate Registration
```
1. Register with email: test@example.com
2. Try registering again with same email
3. Should show error: "User already exists"
```

### Test Protected Routes
```
1. Logout (clear user from localStorage)
2. Try typing /dashboard in URL
3. Should redirect to /login
```

## 📊 Performance Tips

### Optimize Page Load
1. Use production build: `npm run build`
2. Deploy to CDN
3. Enable caching headers

### Optimize Components
1. Use React.memo for Cards
2. Use useCallback for handlers
3. Lazy load pages with React.lazy

### Monitor Performance
```javascript
// In browser console:
performance.mark('start');
// ... do something ...
performance.mark('end');
performance.measure('test', 'start', 'end');
console.log(performance.getEntriesByName('test'));
```

## 📱 Browser Compatibility

**Tested & Working:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Not Supported:**
- ❌ IE 11 (no ES6 modules)
- ❌ Very old browsers

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```
Creates optimized `dist` folder

### Test Production Build Locally
```bash
npm run preview
```
Serves production build at http://localhost:5173

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Drag and drop 'dist' folder to Netlify
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📚 Common Tasks

### Add New User Field
Edit `src/context/AuthContext.jsx`:
```javascript
const register = (email, password, name, phone) => {
  const newUser = { id: Date.now(), email, password, name, phone };
  // ... rest of code
};
```

### Change Color Scheme
Edit page files (e.g., `src/pages/DDL.jsx`):
```javascript
// Change from blue-600 to another color
className="bg-gradient-to-r from-red-600 to-pink-600"
```

### Add New SQL Topic
1. Create `src/pages/NewTopic.jsx`
2. Copy structure from existing topic
3. Update content
4. Add route in `App.jsx`
5. Add card in `Dashboard.jsx`

### Remove Demo Credentials
Edit `src/pages/Login.jsx` - remove the demo credentials section

## 🆘 Get Help

### Check Logs
```bash
# Terminal logs while dev server runs
# Look for red errors

# Browser console (F12)
# Look for red error messages
```

### Common Error Messages

| Error | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` |
| "Port already in use" | Change port with `--port 3000` |
| "React not defined" | Add import at top of file |
| "useAuth must be in Provider" | Wrap with AuthProvider |
| "localStorage is undefined" | Only available in browser, not SSR |

### Useful Commands

```bash
# Check npm version
npm --version

# Check node version
node --version

# Clear npm cache
npm cache clean --force

# Update npm
npm install -g npm@latest

# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Install specific version
npm install react@19.2.6
```

## ✨ Pro Tips

1. **Use React DevTools Extension** - Browser extension to debug React components
2. **Use Redux DevTools** - For complex state debugging
3. **Use Lighthouse** - Built in DevTools to audit performance
4. **Hot Reload Works** - Changes save automatically while dev server runs
5. **Use .env Files** - For environment variables
6. **Use TypeScript** - For better code quality (can add later)

## 📞 Support Resources

- React Docs: https://react.dev
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- MDN Web Docs: https://developer.mozilla.org

---

**Still stuck? Try:**
1. Refresh page (Ctrl+F5)
2. Clear browser data (Ctrl+Shift+Del)
3. Restart dev server
4. Restart browser
5. Restart computer (as last resort)

**Enjoy learning SQL! 🚀**
