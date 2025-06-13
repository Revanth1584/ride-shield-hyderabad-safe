
import React from 'react';
import { Shield, Bell, User } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="bg-slate-900/95 border-b border-slate-700 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-10 h-10 text-blue-400 animate-pulse" />
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">RideShield</h1>
                <p className="text-xs text-blue-300">Telangana Police</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
              <User className="w-5 h-5 text-blue-400" />
              <span className="text-white text-sm">Control Room</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
