// src/utils/auth.js
import { storage } from './storage';

export const auth = {
  login: (email, password) => {
    const users = storage.get('users') || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      storage.set('currentUser', {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      });
      return { success: true, user };
    }
    return { success: false, message: 'Invalid email or password' };
  },

  register: (userData) => {
    const users = storage.get('users') || [];
    
    // Check if user already exists
    if (users.some(u => u.email === userData.email)) {
      return { success: false, message: 'Email already registered' };
    }
    
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    storage.set('users', users);
    
    return { success: true, user: newUser };
  },

  logout: () => {
    storage.remove('currentUser');
  },

  getCurrentUser: () => {
    return storage.get('currentUser');
  },

  isAuthenticated: () => {
    return !!storage.get('currentUser');
  }
};
