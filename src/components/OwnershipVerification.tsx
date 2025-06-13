
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, CheckCircle, AlertTriangle, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const OwnershipVerification = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock database for demonstration
  const vehicleDatabase = {
    'TS13ET8323': {
      owner: 'Ravi Teja',
      status: 'Registered & Clean',
      lastVerified: '02 June 2025',
      chassisNumber: 'ME4JC547*****8901',
      model: 'Honda Activa 6G',
      color: 'Black',
      registrationDate: '15 March 2023',
      isStolen: false,
      mortgageStatus: 'Clear',
      insuranceStatus: 'Active'
    },
    'TS09EP1290': {
      owner: 'Lakshmi Prasad',
      status: 'Registered & Clean',
      lastVerified: '28 May 2025',
      chassisNumber: 'ME4JC547*****2145',
      model: 'TVS Jupiter',
      color: 'Blue',
      registrationDate: '08 January 2024',
      isStolen: false,
      mortgageStatus: 'Clear',
      insuranceStatus: 'Active'
    },
    'TS08GT9087': {
      owner: 'Unknown',
      status: 'STOLEN VEHICLE - DO NOT PURCHASE',
      lastVerified: '12 June 2025',
      chassisNumber: 'ME4JC547*****5432',
      model: 'Bajaj Pulsar',
      color: 'Red',
      registrationDate: '22 September 2022',
      isStolen: true,
      mortgageStatus: 'Under Investigation',
      insuranceStatus: 'Claimed'
    }
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate blockchain verification delay
    setTimeout(() => {
      const result = vehicleDatabase[vehicleNumber.toUpperCase()];
      if (result) {
        setVerificationResult(result);
        if (result.isStolen) {
          toast({
            title: "⚠️ STOLEN VEHICLE ALERT",
            description: "This vehicle is reported stolen. Contact police immediately.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "✅ Verification Complete",
            description: "Vehicle ownership verified successfully",
          });
        }
      } else {
        setVerificationResult('not_found');
        toast({
          title: "Vehicle Not Found",
          description: "This vehicle number is not registered in our database",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-blue-400 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Blockchain Ownership Verification
          </CardTitle>
          <p className="text-slate-400 text-sm">
            Verify vehicle ownership before second-hand purchase
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerification} className="space-y-4">
            <div>
              <Label htmlFor="vehicleNumber" className="text-slate-300">
                Vehicle Registration Number
              </Label>
              <Input
                id="vehicleNumber"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter vehicle number (e.g., TS13ET8323)"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Verifying with Blockchain...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Verify Ownership
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 bg-blue-900/30 border border-blue-600 rounded-lg p-4">
            <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Blockchain Security Features:
            </h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Tamper-proof ownership records</li>
              <li>• Real-time theft status verification</li>
              <li>• Immutable transaction history</li>
              <li>• Cross-verified with police database</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Verification Results */}
      {verificationResult && verificationResult !== 'not_found' && (
        <Card className={`max-w-2xl mx-auto border-2 ${
          verificationResult.isStolen 
            ? 'bg-red-900/20 border-red-500' 
            : 'bg-green-900/20 border-green-500'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center ${
              verificationResult.isStolen ? 'text-red-400' : 'text-green-400'
            }`}>
              {verificationResult.isStolen ? (
                <AlertTriangle className="w-5 h-5 mr-2" />
              ) : (
                <CheckCircle className="w-5 h-5 mr-2" />
              )}
              Verification Result
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <span className="text-slate-400">Vehicle Number:</span>
                  <div className="font-bold text-lg">{vehicleNumber.toUpperCase()}</div>
                </div>
                
                <div>
                  <span className="text-slate-400">Owner:</span>
                  <div className="font-semibold">{verificationResult.owner}</div>
                </div>
                
                <div>
                  <span className="text-slate-400">Status:</span>
                  <div className={`font-semibold ${
                    verificationResult.isStolen ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {verificationResult.status}
                  </div>
                </div>
                
                <div>
                  <span className="text-slate-400">Last Verified:</span>
                  <div>{verificationResult.lastVerified}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-slate-400">Vehicle Model:</span>
                  <div>{verificationResult.model}</div>
                </div>
                
                <div>
                  <span className="text-slate-400">Color:</span>
                  <div>{verificationResult.color}</div>
                </div>
                
                <div>
                  <span className="text-slate-400">Chassis Number:</span>
                  <div className="font-mono text-sm">{verificationResult.chassisNumber}</div>
                </div>
                
                <div>
                  <span className="text-slate-400">Registration Date:</span>
                  <div>{verificationResult.registrationDate}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded-lg p-3 text-center">
                <div className="text-sm text-slate-400">Mortgage Status</div>
                <div className={`font-semibold ${
                  verificationResult.mortgageStatus === 'Clear' ? 'text-green-400' : 'text-orange-400'
                }`}>
                  {verificationResult.mortgageStatus}
                </div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-3 text-center">
                <div className="text-sm text-slate-400">Insurance</div>
                <div className={`font-semibold ${
                  verificationResult.insuranceStatus === 'Active' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {verificationResult.insuranceStatus}
                </div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-3 text-center">
                <div className="text-sm text-slate-400">Theft Status</div>
                <div className={`font-semibold ${
                  verificationResult.isStolen ? 'text-red-400' : 'text-green-400'
                }`}>
                  {verificationResult.isStolen ? 'STOLEN' : 'CLEAN'}
                </div>
              </div>
            </div>

            {verificationResult.isStolen && (
              <div className="mt-6 bg-red-900/30 border border-red-600 rounded-lg p-4">
                <h4 className="font-semibold text-red-300 mb-2">⚠️ IMMEDIATE ACTION REQUIRED:</h4>
                <ul className="text-sm text-red-200 space-y-1">
                  <li>• Do not purchase this vehicle</li>
                  <li>• Contact nearest police station immediately</li>
                  <li>• Report suspicious seller activity</li>
                  <li>• Call emergency helpline: 100</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {verificationResult === 'not_found' && (
        <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Vehicle Not Found</h3>
            <p className="text-slate-300 mb-4">
              This vehicle number is not registered in our blockchain database.
            </p>
            <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-300 mb-2">Possible Reasons:</h4>
              <ul className="text-sm text-slate-300 space-y-1 text-left">
                <li>• Vehicle not registered with RideShield</li>
                <li>• Incorrect vehicle number entered</li>
                <li>• Vehicle from other state</li>
                <li>• Database sync in progress</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sample Vehicle Numbers for Demo */}
      <Card className="bg-slate-800/80 border-slate-600 text-white max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-slate-300 text-sm">Demo Vehicle Numbers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setVehicleNumber('TS13ET8323')}
              className="border-green-600 text-green-400 hover:bg-green-900/20"
            >
              TS13ET8323 (Clean)
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setVehicleNumber('TS09EP1290')}
              className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
            >
              TS09EP1290 (Clean)
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setVehicleNumber('TS08GT9087')}
              className="border-red-600 text-red-400 hover:bg-red-900/20"
            >
              TS08GT9087 (Stolen)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OwnershipVerification;
