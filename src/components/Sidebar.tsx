
import React from 'react';
import { 
  Home, 
  User, 
  BarChart3, 
  Package, 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-16 bg-dashboard-dark h-screen fixed left-0 top-0 border-r border-gray-800 flex flex-col items-center py-6 z-10">
      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center animate-pulse-subtle">
          <div className="w-6 h-6 text-white">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <nav className="flex flex-col items-center space-y-6 flex-1">
        <SidebarIcon icon={<Home size={20} />} active />
        <SidebarIcon icon={<User size={20} />} />
        <SidebarIcon icon={<BarChart3 size={20} />} />
        <SidebarIcon icon={<Package size={20} />} />
        <SidebarIcon icon={<Calendar size={20} />} />
        <SidebarIcon icon={<FileText size={20} />} />
        <SidebarIcon icon={<Users size={20} />} />
      </nav>
      
      <div className="mt-auto mb-6 flex flex-col items-center space-y-6">
        <SidebarIcon icon={<Settings size={20} />} />
        <SidebarIcon icon={<LogOut size={20} />} />
      </div>
    </div>
  );
};

interface SidebarIconProps {
  icon: React.ReactNode;
  active?: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, active }) => {
  return (
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 
      ${active 
        ? 'bg-purple-600 text-white' 
        : 'text-gray-500 hover:bg-gray-800 hover:text-gray-200'}`}>
      {icon}
    </div>
  );
};

export default Sidebar;
