
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
  vehicleType: '2-wheeler' | '4-wheeler';
  lastUpdate: string;
}

const LiveMap = () => {
  const [vehicles, setVehicles] = useState<VehicleMarker[]>([
    {
      id: '1',
      location: 'Kukatpally',
      lat: 17.4851,
      lng: 78.4056,
      status: 'safe',
      vehicleNumber: 'TS12ES8342',
      vehicleType: '2-wheeler',
      lastUpdate: '2 mins ago'
    },
    {
      id: '2',
      location: 'Secunderabad',
      lat: 17.4399,
      lng: 78.4983,
      status: 'suspicious',
      vehicleNumber: 'TS12ES7561',
      vehicleType: '4-wheeler',
      lastUpdate: '5 mins ago'
    },
    {
      id: '3',
      location: 'Gachibowli',
      lat: 17.4400,
      lng: 78.3489,
      status: 'alert',
      vehicleNumber: 'TS12ES9876',
      vehicleType: '2-wheeler',
      lastUpdate: '1 min ago'
    },
    {
      id: '4',
      location: 'Banjara Hills',
      lat: 17.4126,
      lng: 78.4482,
      status: 'safe',
      vehicleNumber: 'TS12ES4521',
      vehicleType: '4-wheeler',
      lastUpdate: '3 mins ago'
    },
    {
      id: '5',
      location: 'Dilsukhnagar',
      lat: 17.3687,
      lng: 78.5256,
      status: 'safe',
      vehicleNumber: 'TS12ES3298',
      vehicleType: '2-wheeler',
      lastUpdate: '4 mins ago'
    },
    {
      id: '6',
      location: 'Hitech City',
      lat: 17.4484,
      lng: 78.3747,
      status: 'suspicious',
      vehicleNumber: 'TS12ES6743',
      vehicleType: '4-wheeler',
      lastUpdate: '6 mins ago'
    }
  ]);

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleMarker | null>(null);

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
          {/* Hyderabad Map Background */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/68f839c6-154b-491b-bbe8-c23946114849.png" 
              alt="Hyderabad Map" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-slate-900/40"></div>
          </div>

          {/* Vehicle Markers */}
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              style={{
                left: `${15 + index * 12}%`,
                top: `${25 + (index % 3) * 20}%`
              }}
              onClick={() => setSelectedVehicle(vehicle)}
            >
              <div className={`w-4 h-4 rounded-full ${getStatusColor(vehicle.status)} animate-pulse border-2 border-white`}>
                <div className={`absolute inset-0 rounded-full ${getStatusColor(vehicle.status)} opacity-30 animate-ping`}></div>
              </div>
              
              {/* Vehicle Info Tooltip */}
              {selectedVehicle?.id === vehicle.id && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-600 rounded-lg p-3 w-52 z-20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-400">{vehicle.vehicleNumber}</span>
                    {getStatusIcon(vehicle.status)}
                  </div>
                  <div className="text-xs text-slate-300 space-y-1">
                    <div>🚗 {vehicle.vehicleType}</div>
                    <div>📍 {vehicle.location}</div>
                    <div>🕒 {vehicle.lastUpdate}</div>
                    <div className="capitalize">Status: <span className={`font-semibold ${
                      vehicle.status === 'safe' ? 'text-green-400' :
                      vehicle.status === 'suspicious' ? 'text-yellow-400' : 'text-red-400'
                    }`}>{vehicle.status}</span></div>
                  </div>
                  <button 
                    className="absolute -top-2 -right-2 bg-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs hover:bg-slate-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVehicle(null);
                    }}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-slate-900/90 rounded-lg p-3 text-xs z-10">
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

          {/* Click instruction */}
          <div className="absolute top-4 left-4 bg-slate-900/90 rounded-lg p-2 text-xs text-blue-300 z-10">
            Click on markers to view vehicle details
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveMap;
