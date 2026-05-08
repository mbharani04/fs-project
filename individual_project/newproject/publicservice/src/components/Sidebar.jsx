import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, User } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Complaints', path: '/reports', icon: FileText },
    { name: 'Profile', path: '#', icon: User },
    { name: 'Settings', path: '#', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-[calc(100vh-4rem)] hidden md:block sticky top-16">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">User Panel</h2>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive && item.path !== '#'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
