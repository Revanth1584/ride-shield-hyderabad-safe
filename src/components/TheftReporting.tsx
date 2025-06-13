
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, Upload, MapPin, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const TheftReporting = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phoneNumber: '',
    vehicleNumber: '',
    chassisNumber: '',
    model: '',
    color: '',
    lastSeenLocation: '',
    policeStation: '',
    additionalDetails: ''
  });

  const [isReported, setIsReported] = useState(false);
  const [caseNumber, setCaseNumber] = useState('');

  const policeStations = [
    'Moinabad PS',
    'Jubilee Hills PS',
    'KPHB PS',
    'SR Nagar PS',
    'Kukatpally PS',
    'Mehdipatnam PS',
    'LB Nagar PS',
    'Dilsukhnagar PS',
    'Begumpet PS',
    'Secunderabad PS'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCaseNumber = `TS2025${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    setCaseNumber(newCaseNumber);
    setIsReported(true);
    toast({
      title: "Theft Report Filed Successfully!",
      description: `Case Number: ${newCaseNumber}`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isReported) {
    return (
      <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-400 mb-2">Report Filed Successfully!</h2>
            <p className="text-slate-300">Your case has been registered with Hyderabad Police</p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">Case Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Case Number:</span>
                <span className="text-yellow-400 font-mono">{caseNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Vehicle Number:</span>
                <span className="text-blue-400">{formData.vehicleNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Assigned Station:</span>
                <span className="text-blue-400">{formData.policeStation}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-orange-400">Under Investigation</span>
              </div>
              <div className="flex justify-between">
                <span>Priority:</span>
                <span className="text-red-400">High</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-300 mb-2">Next Steps:</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Visit {formData.policeStation} within 24 hours</li>
              <li>• Bring original vehicle documents</li>
              <li>• SMS alerts will be sent to your registered number</li>
              <li>• Track case status on this portal</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              onClick={() => setIsReported(false)}
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-700"
            >
              Report Another Theft
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Track Case Status
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-red-400 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Report Vehicle Theft
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ownerName" className="text-slate-300">Owner Name *</Label>
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
              <Label htmlFor="phoneNumber" className="text-slate-300">Phone Number *</Label>
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
              <Label htmlFor="vehicleNumber" className="text-slate-300">Vehicle Number *</Label>
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
              <Label htmlFor="chassisNumber" className="text-slate-300">Chassis Number *</Label>
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
              <Label htmlFor="model" className="text-slate-300">Vehicle Model & Color *</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Honda Activa 6G - Black"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="lastSeenLocation" className="text-slate-300">Last Seen Location *</Label>
              <Input
                id="lastSeenLocation"
                value={formData.lastSeenLocation}
                onChange={(e) => handleInputChange('lastSeenLocation', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Kukatpally Metro Station"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="policeStation" className="text-slate-300">Nearest Police Station *</Label>
            <Select onValueChange={(value) => handleInputChange('policeStation', value)} required>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select nearest police station" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600 text-white">
                {policeStations.map((station) => (
                  <SelectItem key={station} value={station}>{station}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="additionalDetails" className="text-slate-300">Additional Details</Label>
            <Textarea
              id="additionalDetails"
              value={formData.additionalDetails}
              onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Any additional information about the theft (time, suspicious activity, etc.)"
              rows={3}
            />
          </div>

          <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-400 text-sm mb-2">Upload Photos (Optional)</p>
            <p className="text-xs text-slate-500">Vehicle photos, documents, or any evidence</p>
            <Button type="button" variant="outline" size="sm" className="mt-2 border-slate-600 text-slate-300">
              Choose Files
            </Button>
          </div>

          <div className="bg-red-900/30 border border-red-600 rounded-lg p-4">
            <h4 className="font-semibold text-red-300 mb-2">Important:</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• File report within 24 hours of theft</li>
              <li>• Keep your vehicle documents ready</li>
              <li>• False reporting is a punishable offense</li>
              <li>• You will receive SMS updates on case progress</li>
            </ul>
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            <AlertTriangle className="w-4 h-4 mr-2" />
            File Theft Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TheftReporting;
