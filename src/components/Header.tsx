
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-dashboard-dark border-b border-gray-800 flex items-center justify-between px-6 animate-fade-in">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-white">Fusion dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-gray-800 text-sm text-gray-300 rounded-full pl-10 pr-4 py-2 w-48 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>
        
        <div className="relative">
          <Bell size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">3</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="avatar bg-purple-600">V</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
