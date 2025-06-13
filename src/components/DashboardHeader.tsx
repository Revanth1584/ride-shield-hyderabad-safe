
import React, { useState } from 'react';
import { Shield, Bell, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardHeader = () => {
  const [notifications] = useState([
    { id: 1, message: "Vehicle TS12ES4567 reported stolen in Kukatpally", time: "5 min ago" },
    { id: 2, message: "Traffic violation reported at Mehdipatnam", time: "12 min ago" },
    { id: 3, message: "GPS tracker offline: TS12ES9876", time: "25 min ago" }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast } = useToast();

  const handleControlRoomClick = () => {
    toast({
      title: "Access Denied",
      description: "You do not have permission to access the control room.",
      variant: "destructive",
    });
  };

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
                <p className="text-xs text-blue-300">In Collaboration with Hyderabad Police</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell 
                className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer transition-colors" 
                onClick={() => setShowNotifications(!showNotifications)}
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notifications.length}
              </span>
              
              {showNotifications && (
                <div className="absolute right-0 top-8 w-80 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50">
                  <div className="p-3 border-b border-slate-600">
                    <h3 className="text-white font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 border-b border-slate-700 last:border-b-0 hover:bg-slate-700">
                        <p className="text-white text-sm">{notification.message}</p>
                        <p className="text-slate-400 text-xs mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div 
              className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-700 transition-colors"
              onClick={handleControlRoomClick}
            >
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
