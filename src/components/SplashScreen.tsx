
import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center z-50 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center animate-fade-in">
        <div className="relative mb-6">
          <Shield className="w-24 h-24 text-blue-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-ping mx-auto"></div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
          RideShield
        </h1>
        <p className="text-blue-300 text-lg animate-fade-in">
          In Collaboration with Hyderabad Police
        </p>
        <div className="mt-8">
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
