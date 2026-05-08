import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { generateCaptcha } from '../utils/captcha';

const CaptchaBox = ({ onValidate }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptchaText(newCaptcha);
    setUserInput('');
    onValidate(false);
  };

  useEffect(() => {
    refreshCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setUserInput(val);
    onValidate(val === captchaText);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Security Verification
      </label>
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 font-mono text-lg font-bold tracking-widest text-gray-700 select-none relative overflow-hidden flex-1 text-center">
          {/* Noise lines for visual security */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none mix-blend-overlay"></div>
          {captchaText}
        </div>
        <button
          type="button"
          onClick={refreshCaptcha}
          className="p-2.5 rounded-md text-gray-500 hover:text-primary-600 hover:bg-primary-50 border border-gray-300 transition-colors"
          title="Refresh Captcha"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter the text shown above"
        className="input-field"
        required
      />
    </div>
  );
};

export default CaptchaBox;
