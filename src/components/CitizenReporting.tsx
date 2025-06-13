
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Upload, CheckCircle, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CitizenReporting = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    violationType: '',
    location: '',
    trafficZone: '',
    description: ''
  });

  const [isReported, setIsReported] = useState(false);
  const [reportId, setReportId] = useState('');

  const violationTypes = [
    'No Helmet',
    'Triple Riding',
    'Wrong Side Driving',
    'Signal Jumping',
    'Illegal Parking',
    'Over Speeding',
    'Mobile Phone Usage',
    'Without License'
  ];

  const trafficZones = [
    'Begumpet Traffic Zone',
    'SR Nagar Traffic Zone',
    'Kukatpally Traffic Zone',
    'Mehdipatnam Traffic Zone',
    'LB Nagar Traffic Zone',
    'Secunderabad Traffic Zone',
    'Jubilee Hills Traffic Zone',
    'KPHB Traffic Zone'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReportId = `CR${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    setReportId(newReportId);
    setIsReported(true);
    toast({
      title: "Violation Reported Successfully!",
      description: `Report ID: ${newReportId} - Under Review`,
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
            <h2 className="text-2xl font-bold text-green-400 mb-2">Report Submitted!</h2>
            <p className="text-slate-300">Thank you for contributing to road safety</p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">Report Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Report ID:</span>
                <span className="text-yellow-400 font-mono">{reportId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Vehicle:</span>
                <span className="text-blue-400">{formData.vehicleNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Violation:</span>
                <span className="text-red-400">{formData.violationType}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Status:</span>
                <span className="text-orange-400 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Under Review
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Assigned Zone:</span>
                <span className="text-blue-400">{formData.trafficZone}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-700 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-green-400">+50</div>
              <div className="text-xs text-slate-400">Points Earned</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-blue-400">24hrs</div>
              <div className="text-xs text-slate-400">Processing Time</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-yellow-400">₹100</div>
              <div className="text-xs text-slate-400">Reward (if verified)</div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-300 mb-2">What happens next?</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Traffic officer will verify the evidence</li>
              <li>• Challan will be issued if violation confirmed</li>
              <li>• You'll receive reward points for valid reports</li>
              <li>• SMS notification when case is resolved</li>
            </ul>
          </div>

          <Button 
            onClick={() => setIsReported(false)}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Report Another Violation
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-orange-400 flex items-center">
          <Camera className="w-5 h-5 mr-2" />
          e-Sheher Squad - Citizen Reporting
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vehicleNumber" className="text-slate-300">Vehicle Number *</Label>
              <Input
                id="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="TS08GT9087"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="violationType" className="text-slate-300">Violation Type *</Label>
              <Select onValueChange={(value) => handleInputChange('violationType', value)} required>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select violation" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 text-white">
                  {violationTypes.map((violation) => (
                    <SelectItem key={violation} value={violation}>{violation}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location" className="text-slate-300">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Near Kukatpally Bus Stop"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="trafficZone" className="text-slate-300">Traffic Zone *</Label>
              <Select onValueChange={(value) => handleInputChange('trafficZone', value)} required>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select zone" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 text-white">
                  {trafficZones.map((zone) => (
                    <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description" className="text-slate-300">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Additional details about the violation"
              rows={3}
            />
          </div>

          <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-400 text-sm mb-2">Upload Photo/Video Evidence *</p>
            <p className="text-xs text-slate-500">Clear image/video showing the violation</p>
            <Button type="button" variant="outline" size="sm" className="mt-2 border-slate-600 text-slate-300">
              Choose Files
            </Button>
          </div>

          <div className="bg-green-900/30 border border-green-600 rounded-lg p-4">
            <h4 className="font-semibold text-green-300 mb-2">Citizen Rewards:</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• ₹100 reward for verified reports</li>
              <li>• Contribute to safer roads in Hyderabad</li>
              <li>• Build your citizen score</li>
              <li>• Monthly recognition for top reporters</li>
            </ul>
          </div>

          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
            <Camera className="w-4 h-4 mr-2" />
            Submit Violation Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CitizenReporting;
