import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { generateOTP, validateOTP } from '../utils/otp';

const OTPVerification = ({ onVerify, onCancel, email }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    // Generate new OTP on mount for demo purposes
    const newOTP = generateOTP();
    setGeneratedOTP(newOTP);
    // In a real app, this would be sent via SMS/Email
    console.log("DEMO MODE: OTP Generated:", newOTP);
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Allow only single character
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      // Auto focus previous input on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const enteredOTP = otp.join('');
    
    if (enteredOTP.length < 6) {
      setError('Please enter all 6 digits');
      return;
    }

    if (validateOTP(enteredOTP, generatedOTP)) {
      setError('');
      onVerify();
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 animate-fade-in">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Account</h2>
          <p className="text-sm text-gray-500">
            We've sent a 6-digit code to <br/>
            <span className="font-semibold text-gray-700">{email}</span>
          </p>
        </div>

        {/* DEMO NOTICE */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 text-sm text-blue-800 text-center">
          <p className="font-medium">Demo Mode - Your OTP is:</p>
          <p className="text-xl font-bold tracking-widest mt-1">{generatedOTP}</p>
        </div>

        <form onSubmit={handleVerify}>
          <div className="flex justify-between gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-xl font-bold border rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
            ))}
          </div>

          {error && (
            <div className="mb-4 text-red-500 text-sm flex items-center gap-1.5 justify-center">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button type="submit" className="w-full btn-primary py-3 text-base">
              Verify Account
            </button>
            <button 
              type="button" 
              onClick={onCancel}
              className="w-full text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Cancel Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
