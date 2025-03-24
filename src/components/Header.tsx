
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-dashboard-dark border-b border-gray-800 flex items-center justify-between px-6 animate-fade-in">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-400">11/01/24 to 11/14/24</div>
          <div className="avatar bg-pink-600">V</div>
        </div>
        
        <div className="relative">
          <Bell size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
        </div>
        
        <div className="flex items-center space-x-2">
          <span>—</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 cursor-pointer">✕</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
