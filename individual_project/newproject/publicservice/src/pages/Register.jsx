import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';
import { validations } from '../utils/validations';
import CaptchaBox from '../components/CaptchaBox';
import OTPVerification from '../components/OTPVerification';
import { AlertCircle } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validations.isRequired(formData.name)) newErrors.name = 'Name is required';
    if (!validations.isEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!validations.isPhone(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!validations.isPassword(formData.password)) newErrors.password = 'Password must be at least 6 characters';
    if (!validations.isMatch(formData.password, formData.confirmPassword)) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;
    
    if (!isCaptchaValid) {
      setSubmitError('Please complete the CAPTCHA verification correctly.');
      return;
    }

    // Show OTP Verification modal
    setShowOTP(true);
  };

  const handleOTPVerify = () => {
    setShowOTP(false);
    
    const { confirmPassword, ...userData } = formData;
    const response = auth.register(userData);
    
    if (response.success) {
      // Simulate auto-login or redirect to login
      navigate('/login', { state: { message: 'Registration successful! Please login.' } });
    } else {
      setSubmitError(response.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Citizen Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join the platform to access secure government services
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">
          {submitError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 flex items-center gap-3">
              <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <div className="mt-1">
                  <input name="name" type="text" value={formData.name} onChange={handleChange} className="input-field" placeholder="Enter your full name" />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-1">
                  <input name="email" type="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div className="mt-1">
                  <input name="phone" type="text" maxLength="10" value={formData.phone} onChange={handleChange} className="input-field" placeholder="10-digit number" />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="mt-1">
                  <input name="password" type="password" value={formData.password} onChange={handleChange} className="input-field" placeholder="Min 6 characters" />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                <div className="mt-1">
                  <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} className="input-field" placeholder="Re-enter password" />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <CaptchaBox onValidate={setIsCaptchaValid} />
            </div>

            <div>
              <button type="submit" className="w-full btn-primary py-3 text-base">
                Create Account & Verify
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {showOTP && (
        <OTPVerification 
          email={formData.email}
          onVerify={handleOTPVerify} 
          onCancel={() => setShowOTP(false)} 
        />
      )}
    </div>
  );
};

export default Register;
