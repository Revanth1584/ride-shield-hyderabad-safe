
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Shield, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const VehicleRegistration = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phoneNumber: '',
    vehicleNumber: '',
    chassisNumber: '',
    model: '',
    color: '',
    trackerType: ''
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    toast({
      title: "Vehicle Registered Successfully!",
      description: `${formData.vehicleNumber} is now protected by RideShield`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isRegistered) {
    return (
      <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-400 mb-2">Registration Successful!</h2>
            <p className="text-slate-300">Your vehicle is now protected by RideShield</p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">Registration Details</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>Vehicle Number: <span className="text-blue-400">{formData.vehicleNumber}</span></div>
              <div>Owner: <span className="text-blue-400">{formData.ownerName}</span></div>
              <div>Model: <span className="text-blue-400">{formData.model}</span></div>
              <div>Tracker: <span className="text-green-400">Active</span></div>
            </div>
          </div>

          <Button 
            onClick={() => setIsRegistered(false)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Register Another Vehicle
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-blue-300 flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          GPS Tracker Registration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ownerName" className="text-slate-300">Owner Name</Label>
              <Input
                id="ownerName"
                value={formData.ownerName}
                onChange={(e) => handleInputChange('ownerName', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phoneNumber" className="text-slate-300">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="+91 9876543210"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vehicleNumber" className="text-slate-300">Vehicle Number</Label>
              <Input
                id="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="TS13ET8323"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="chassisNumber" className="text-slate-300">Chassis Number</Label>
              <Input
                id="chassisNumber"
                value={formData.chassisNumber}
                onChange={(e) => handleInputChange('chassisNumber', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter chassis number"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="model" className="text-slate-300">Vehicle Model</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Honda Activa 6G"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="color" className="text-slate-300">Color</Label>
              <Input
                id="color"
                value={formData.color}
                onChange={(e) => handleInputChange('color', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Black"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="trackerType" className="text-slate-300">GPS Tracker Type</Label>
            <Select onValueChange={(value) => handleInputChange('trackerType', value)} required>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select certified tracker" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600 text-white">
                <SelectItem value="rideshield-pro">RideShield Pro (Recommended)</SelectItem>
                <SelectItem value="telematic-basic">Telematic Basic</SelectItem>
                <SelectItem value="gps-secure">GPS Secure Plus</SelectItem>
                <SelectItem value="track-master">TrackMaster 360</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4">
            <h4 className="font-semibold text-blue-300 mb-2">Benefits of Registration:</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Real-time tracking and theft alerts</li>
              <li>• ₹500 discount on traffic challans</li>
              <li>• Priority police response</li>
              <li>• Insurance premium reduction eligibility</li>
            </ul>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Register Vehicle & Activate Protection
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VehicleRegistration;
