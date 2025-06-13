
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Trophy, Star, Shield } from 'lucide-react';

const IncentivesSection = () => {
  const topRiders = [
    { name: 'Ravi Kumar', points: 2450, reward: '₹1,000' },
    { name: 'Priya Singh', points: 2380, reward: '₹800' },
    { name: 'Aditya Reddy', points: 2210, reward: '₹600' },
    { name: 'Lakshmi Devi', points: 2150, reward: '₹400' },
    { name: 'Suresh Babu', points: 2080, reward: '₹200' }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-green-900/80 to-blue-900/80 border-green-600 text-white">
        <CardHeader>
          <CardTitle className="text-green-300 flex items-center text-sm">
            <Gift className="w-4 h-4 mr-2" />
            Tracker Benefits
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Traffic Challan Discount</span>
            <span className="text-green-400 font-bold">₹500 OFF</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Insurance Premium</span>
            <span className="text-green-400 font-bold">15% OFF</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Recovery Guarantee</span>
            <span className="text-green-400 font-bold">₹25,000</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-600 text-white">
        <CardHeader>
          <CardTitle className="text-yellow-400 flex items-center text-sm">
            <Trophy className="w-4 h-4 mr-2" />
            Top Safe Riders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {topRiders.map((rider, index) => (
              <div key={rider.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs font-bold ${
                    index === 0 ? 'bg-yellow-500 text-black' :
                    index === 1 ? 'bg-gray-400 text-black' :
                    index === 2 ? 'bg-orange-600 text-white' :
                    'bg-slate-600 text-white'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-slate-300">{rider.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 font-semibold">{rider.reward}</div>
                  <div className="text-slate-500 text-xs">{rider.points} pts</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncentivesSection;
