
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const currentPath = location.pathname;
  
  const sidebarItems = [
    { icon: Home, path: '/', label: 'Dashboard' },
    { icon: User, path: '/profile', label: 'Profile' },
    { icon: BarChart3, path: '/analytics', label: 'Analytics' },
    { icon: Package, path: '/inventory', label: 'Inventory' },
    { icon: Calendar, path: '/calendar', label: 'Calendar' },
    { icon: FileText, path: '/documents', label: 'Documents' },
    { icon: Users, path: '/team', label: 'Team' }
  ];

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
        {sidebarItems.map((item, index) => (
          <SidebarIcon 
            key={index} 
            icon={<item.icon size={20} />} 
            active={currentPath === item.path}
            path={item.path}
            label={item.label}
          />
        ))}
      </nav>
      
      <div className="mt-auto mb-6 flex flex-col items-center space-y-6">
        <SidebarIcon icon={<Settings size={20} />} path="/settings" label="Settings" />
        <SidebarIcon icon={<LogOut size={20} />} path="/logout" label="Logout" />
      </div>
    </div>
  );
};

interface SidebarIconProps {
  icon: React.ReactNode;
  active?: boolean;
  path: string;
  label: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, active, path, label }) => {
  return (
    <Link 
      to={path} 
      className="group relative"
      aria-label={label}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 
        ${active 
          ? 'bg-purple-600 text-white' 
          : 'text-gray-500 hover:bg-gray-800 hover:text-gray-200'}`}>
        {icon}
      </div>
      
      {/* Tooltip */}
      <div className="absolute left-14 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </div>
    </Link>
  );
};

export default Sidebar;
