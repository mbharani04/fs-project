// src/utils/validations.js
export const validations = {
  isRequired: (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    return true;
  },

  isEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  isPhone: (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  },

  isPassword: (password) => {
    return password && password.length >= 6;
  },

  isMatch: (value1, value2) => {
    return value1 === value2;
  }
};
