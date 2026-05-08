import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full">
            <AlertTriangle className="w-16 h-16 text-red-600" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">404</h1>
        <p className="mt-2 text-lg font-medium text-gray-900">Page not found</p>
        <p className="mt-2 text-base text-gray-500 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The link might be broken, or the page may have been removed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/" className="btn-primary">
            Go back home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
