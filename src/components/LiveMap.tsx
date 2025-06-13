
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface VehicleMarker {
  id: string;
  location: string;
  lat: number;
  lng: number;
  status: 'safe' | 'suspicious' | 'alert';
  vehicleNumber: string;
  lastUpdate: string;
}

const LiveMap = () => {
  const [vehicles, setVehicles] = useState<VehicleMarker[]>([
    {
      id: '1',
      location: 'Dilsukhnagar',
      lat: 17.416,
      lng: 78.5226,
      status: 'safe',
      vehicleNumber: 'TS13ET8323',
      lastUpdate: '2 mins ago'
    },
    {
      id: '2',
      location: 'Kukatpally',
      lat: 17.4851,
      lng: 78.4056,
      status: 'suspicious',
      vehicleNumber: 'TS09EP1290',
      lastUpdate: '5 mins ago'
    },
    {
      id: '3',
      location: 'Mehdipatnam',
      lat: 17.3850,
      lng: 78.4867,
      status: 'alert',
      vehicleNumber: 'TS08GT9087',
      lastUpdate: '1 min ago'
    },
    {
      id: '4',
      location: 'KPHB',
      lat: 17.4875,
      lng: 78.3953,
      status: 'safe',
      vehicleNumber: 'TS02HU4521',
      lastUpdate: '3 mins ago'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'suspicious':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'alert':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <MapPin className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-500';
      case 'suspicious':
        return 'bg-yellow-500';
      case 'alert':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prev => prev.map(vehicle => ({
        ...vehicle,
        lastUpdate: Math.random() > 0.7 ? 'Just now' : vehicle.lastUpdate
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-slate-800/80 border-slate-600 text-white h-96">
      <CardHeader>
        <CardTitle className="text-blue-300 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Live Vehicle Tracking - Hyderabad
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 bg-slate-700 rounded-lg overflow-hidden">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                {/* Road network simulation */}
                <path d="M0,150 Q100,50 200,150 T400,150" stroke="#374151" strokeWidth="2" fill="none" />
                <path d="M200,0 Q150,100 200,200 T200,300" stroke="#374151" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Vehicle Markers */}
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`
              }}
            >
              <div className={`w-4 h-4 rounded-full ${getStatusColor(vehicle.status)} animate-pulse`}>
                <div className={`absolute inset-0 rounded-full ${getStatusColor(vehicle.status)} opacity-30 animate-ping`}></div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-600 rounded-lg p-3 w-48 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">{vehicle.vehicleNumber}</span>
                  {getStatusIcon(vehicle.status)}
                </div>
                <div className="text-xs text-slate-300">
                  <div>📍 {vehicle.location}</div>
                  <div>🕒 {vehicle.lastUpdate}</div>
                  <div className="capitalize">Status: {vehicle.status}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-slate-900/90 rounded-lg p-3 text-xs">
            <div className="space-y-1">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Safe</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span>Suspicious</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span>Alert</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveMap;
