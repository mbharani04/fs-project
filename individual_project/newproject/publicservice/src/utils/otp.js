// src/utils/otp.js
export const generateOTP = () => {
  // Generate a 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const validateOTP = (input, actual) => {
  return input === actual;
};
